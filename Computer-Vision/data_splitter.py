import os
import shutil
import random
from tqdm import tqdm


SOURCE_DIR = 'Dog Emotion'
BASE_OUTPUT_DIR = 'dataset'
TRAIN_RATIO = 0.67
SEED = 42

CLASSES = ['angry', 'calm', 'happy', 'sad']




for subset in ['training_set', 'validation_set']:
    for emotion in CLASSES:
        os.makedirs(os.path.join(BASE_OUTPUT_DIR, subset, emotion), exist_ok=True)



random.seed(SEED)


for emotion in CLASSES:
    class_source_path = os.path.join(SOURCE_DIR, emotion)

    if not os.path.exists(class_source_path):
        print(
            f"eroare fisier")
        continue

    all_files = [f for f in os.listdir(class_source_path) if f.endswith(('.jpg', '.jpeg', '.png'))]
    random.shuffle(all_files)


    train_split_point = int(len(all_files) * TRAIN_RATIO)
    train_files = all_files[:train_split_point]
    validation_files = all_files[train_split_point:]


    for filename in tqdm(train_files, desc=f" Copiere Train {emotion}"):
        src = os.path.join(class_source_path, filename)
        dst = os.path.join(BASE_OUTPUT_DIR, 'training_set', emotion, filename)
        shutil.copyfile(src, dst)


    for filename in tqdm(validation_files, desc=f"Copiere Valid {emotion}"):
        src = os.path.join(class_source_path, filename)
        dst = os.path.join(BASE_OUTPUT_DIR, 'validation_set', emotion, filename)
        shutil.copyfile(src, dst)

