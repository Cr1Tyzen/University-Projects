import numpy as np
import random
import matplotlib.pyplot as plt

num_items = 10
capacity = 50
values = [10, 16, 19, 50, 76, 27, 34, 45, 15, 12]
weights = [17, 13, 25, 22, 33, 11, 29, 7, 5, 2]

n = 300
max_iter = 200
mutation_rate = 0.3
convergence_threshold = 0.91

p = 0.5


def genereaza_populatie(n, num_items):
    return [np.random.randint(2, size=num_items) for _ in range(n)]


# Calc valori fitness
def adecvare(cromozom):
    valoare_totala = sum(v for v, bit in zip(values, cromozom) if bit == 1)
    greutate_totala = sum(w for w, bit in zip(weights, cromozom) if bit == 1)
    if greutate_totala > capacity:
        return 0  # Penalizare
    return valoare_totala


# Selectia prin turneu
def selectie_turneu(fitness, populatie, nr_selecti=4, d=3):
    crom_selectati = []
    for _ in range(nr_selecti):
        participanti = np.random.choice(len(fitness), d, replace=False)
        winner = participanti[0]
        for participant in participanti:
            if fitness[participant] > fitness[winner]:
                winner = participant
        crom_selectati.append(populatie[winner])
    return crom_selectati


# Incrucisare reala discreta
def incrucisare_real_discreta(parinte1, parinte2):
    alegere_copil1 = np.random.randint(1, 3, len(parinte1))
    alegere_copil2 = np.random.randint(1, 3, len(parinte2))
    copil1 = np.where(alegere_copil1 == 1, parinte1, parinte2)
    copil2 = np.where(alegere_copil2 == 1, parinte1, parinte2)
    return copil1, copil2


# Mutatie binara tare
def mutatie_binara(cromozom, rata):
    nr_aleatoare = [np.random.random() for _ in cromozom]
    cromozom_mutat = []
    for i in range(len(cromozom)):
        if nr_aleatoare[i] < rata:
            cromozom_mutat.append(1 - cromozom[i])
        else:
            cromozom_mutat.append(cromozom[i])
    return np.array(cromozom_mutat)


# Algoritmul genetic
def algoritm_genetic():
    populatie = genereaza_populatie(n, num_items)
    it = 0
    istoricul_adecvare = []

    while it < max_iter:
        # Evaluare populatie
        valori_adecvare = [adecvare(cromozom) for cromozom in populatie]
        adecvare_medie = np.mean(valori_adecvare)
        dispersie = np.std(valori_adecvare)
        istoricul_adecvare.append(adecvare_medie)

        print(f"Iteratia {it}: Adecvare medie = {adecvare_medie:.2f}, Dispersie = {dispersie:.2f}")

        # Convergenta
        if False and dispersie / adecvare_medie < convergence_threshold:
            print(f"Convergenta atinsa la iteratia {it}.")
            break

        # Selectia parintilor
        fitness = [adecvare(cromozom) for cromozom in populatie]

        # Calcul numar parinti pe baza p
        numar_parinti = int(n * p)
        print(f"Numar de parinti selectati: {numar_parinti} ")

        # Selectie parinti
        parinti = selectie_turneu(fitness, populatie, nr_selecti=numar_parinti)

        # Incrucisare
        copii = []
        for i in range(0, len(parinti), 2):
            if i + 1 < len(parinti):
                copil1, copil2 = incrucisare_real_discreta(parinti[i], parinti[i + 1])
                copii.extend([copil1, copil2])


        numar_mutatii = int(len(copii) *mutation_rate)
        copii_pentru_mutatie = random.sample(range(len(copii)), numar_mutatii)


        for idx in copii_pentru_mutatie:
            copii[idx] = mutatie_binara(copii[idx], mutation_rate)

        # Creare populatie noua
        populatie.extend(copii)
        valori_adecvare = [adecvare(cromozom) for cromozom in populatie]

        # Selectia supravietuitorilor
        populatie = sorted(populatie, key=adecvare, reverse=True)[:n]

        it += 1

    cea_mai_buna_solutie = max(populatie, key=adecvare)
    print("Cea mai buna solutie:", cea_mai_buna_solutie)
    print("Valoarea totala:", adecvare(cea_mai_buna_solutie))


    plt.plot(range(len(istoricul_adecvare)), istoricul_adecvare, marker='o')
    plt.title("Evolutia adecvarii medii")
    plt.xlabel("Iteratii")
    plt.ylabel("Adecvare medie")
    plt.grid()
    plt.show()


algoritm_genetic()
