import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np
from tensorflow.keras.preprocessing import image
import os
import random



train_datagen = ImageDataGenerator(
    rescale=1. / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True)
training_set = train_datagen.flow_from_directory(
    'dataset/training_set',
    target_size=(64, 64),
    batch_size=32,
    class_mode='categorical')


test_datagen = ImageDataGenerator(rescale=1. / 255)
test_set = test_datagen.flow_from_directory(
    'dataset/validation_set',
    target_size=(64, 64),
    batch_size=32,
    class_mode='categorical')



cnn = tf.keras.models.Sequential()


cnn.add(tf.keras.layers.Conv2D(filters=32, kernel_size=3, activation='relu', input_shape=[64, 64, 3]))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))

cnn.add(tf.keras.layers.Conv2D(filters=32, kernel_size=3, activation='relu'))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))


cnn.add(tf.keras.layers.Flatten())


cnn.add(tf.keras.layers.Dense(units=128, activation='relu'))

cnn.add(tf.keras.layers.Dropout(0.5))

cnn.add(tf.keras.layers.Dense(units=4, activation='softmax'))


cnn.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

print("\n--- Inceperea Antrenarii CNN (50 Epochs cu Dropout) ---")
history = cnn.fit(x=training_set, validation_data=test_set, epochs=100)



val_accuracy = history.history['val_accuracy'][-1]
print(f"Accuracy pe setul de validare : {val_accuracy:.4f} ({val_accuracy * 100:.2f}%)")

print("Prediction pe o Imagine Aleatorie din Setul de Validare")


BASE_VALIDATION_PATH = 'dataset/validation_set'

try:

    available_classes = os.listdir(BASE_VALIDATION_PATH)
    class_folders = [c for c in available_classes if os.path.isdir(os.path.join(BASE_VALIDATION_PATH, c))]

    if not class_folders:
        raise Exception("ciuciu clase 'dataset/validation_set'.")

    random_class = random.choice(class_folders)
    class_path = os.path.join(BASE_VALIDATION_PATH, random_class)


    all_images = os.listdir(class_path)
    image_files = [f for f in all_images if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

    if not image_files:
        raise Exception(f"ciuciu imagini in folderul {class_path}.")

    random_image_file = random.choice(image_files)
    TEST_IMAGE_PATH = os.path.join(class_path, random_image_file)


    print(f"Img aleasa este: {random_image_file}")
    print(f"din folderul: {random_class.upper()}")
    print("-" * 50)


    test_image = image.load_img(TEST_IMAGE_PATH, target_size=(64, 64))
    test_image = image.img_to_array(test_image)
    test_image = np.expand_dims(test_image, axis=0)


    result = cnn.predict(test_image)


    class_indices = training_set.class_indices
    class_names = list(class_indices.keys())

    predicted_class_index = np.argmax(result)
    prediction = class_names[predicted_class_index]


    print(f"Probabilitati obtinute (în ordinea: {class_names}): {result[0].round(4)}")
    print(f"Predict:Emotie:{prediction.upper()}")

except Exception as e:
    print(f"Eroare in timpul predictului : {e}")