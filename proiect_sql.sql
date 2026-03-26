﻿use SteakHouse;


-- Creare tabel Produse
CREATE TABLE  Produse (
    ID INT PRIMARY KEY,
    Denumire VARCHAR(255) NOT NULL,
    Gramaj DECIMAL(10, 2) NOT NULL,
    Pret DECIMAL(10, 2) NOT NULL
);

-- Creare tabel Client
CREATE TABLE  Client (
    ID INT PRIMARY KEY,
    Nume VARCHAR(255) NOT NULL,
    Adresa VARCHAR(255) NOT NULL,
    DataNasterii DATE NOT NULL,
    NrTelefon VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

-- Creare tabel Comanda
CREATE TABLE Comanda (
    ID INT PRIMARY KEY,
    IdAbonat INT,
    DataComanda DATE NOT NULL,
    PretTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (IdAbonat) REFERENCES Client(ID)
);

-- Creare tabel ProduseComandate
CREATE TABLE  ProduseComandate (
    ID INT PRIMARY KEY,
    IdComanda INT,
    IdProdus INT,
    Cantitate INT NOT NULL,
    PretTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (IdComanda) REFERENCES Comanda(ID),
    FOREIGN KEY (IdProdus) REFERENCES Produse(ID)
);

-- Inserare date in tabelul Produse
INSERT INTO Produse (ID, Denumire, Gramaj, Pret) VALUES
(1, 'Biftec de vita', 300, 45.99),
(2, 'Biftec de porc', 250, 35.50),
(3, 'File de somon', 200, 55.75),
(4, 'Friptura de pui', 200, 30.99),
(5, 'File mignon', 150, 65.00),
(6, 'Costita de porc', 350, 40.25),
(7, 'Antricot de vita', 400, 50.00),
(8, 'Ribs de porc', 500, 42.99),
(9, 'Burger de vita', 200, 15.99),
(10, 'Burger de pui', 200, 14.99),
(11, 'Burger vegetarian', 200, 12.99),
(12, 'Ciorba de fasole', 300, 10.99),
(13, 'Salata Caesar', 150, 12.50),
(14, 'Cartofi prajiti', 200, 6.99),
(15, 'Legume la gratar', 250, 8.75),
(16, 'Sos de usturoi', 50, 2.99),
(17, 'Sos BBQ', 50, 3.50),
(18, 'Sos picant', 50, 3.25),
(19, 'Sos de branza', 50, 4.25),
(20, 'Sos de ciuperci', 50, 4.50);

-- Inserare date in tabelul Client
INSERT INTO Client (ID, Nume, Adresa, DataNasterii, NrTelefon, Email) VALUES
(1, 'John Doe', 'Str. Principala nr. 10', '1990-05-15', '1234567890', 'john.doe@yahoo.com'),
(2, 'Jane Smith', 'Str. Libertatii nr. 5', '1985-09-20', '0987654321', 'jane.smith@yahoo.com'),
(3, 'Alex Johnson', 'Bd. Revolutiei nr. 30', '1978-03-10', '5555555555', 'alex.johnson@yahoo.com'),
(4, 'Maria Garcia', 'Aleea Florilor nr. 8', '1995-11-25', '7777777777', 'maria.garcia@yahoo.com'),
(5, 'Michael Brown', 'Str. Pacii nr. 12', '1982-07-08', '6666666666', 'michael.brown@yahoo.com'),
(6, 'Emma Lee', 'Bd. Independentei nr. 3', '1998-02-18', '9999999999', 'emma.lee@yahoo.com'),
(7, 'David Martinez', 'Bd. Victoriei nr. 15', '1970-12-05', '4444444444', 'david.martinez@yahoo.com'),
(8, 'Sarah Wilson', 'Str. Dorobanti nr. 25', '1989-04-30', '3333333333', 'sarah.wilson@yahoo.com'),
(9, 'Daniel Anderson', 'Aleea Soarelui nr. 7', '1993-08-12', '8888888888', 'daniel.anderson@yahoo.com'),
(10, 'Lara Croft', 'Bd. Unirii nr. 20', '1980-01-05', '2222222222', 'lara.croft@yahoo.com'),
(11, 'Justin Bieber', 'Bd. Carol nr. 115', '1982-01-15', '2241232222', 'justin.bieber@gmail.com'),
(12, 'Justin Timberlake', 'Bd. Carol nr. 10', '1985-09-25', '2222222222', 'justin.timberlake@yahoo.com'),
(13, 'Chris Brown', 'Bd. Unirii nr. 20', '1981-08-15', '2221234522', 'chris.brown@gmail.com'),
(14, 'Lionel Messi', 'Bd. Carol nr. 20', '1982-07-15', '222765452222', 'lionel.messi@yahoo.com'),
(15, 'Gordan Ramsay', 'Bd. Carol nr. 21', '1985-05-23', '2222546222', 'gordon.ramsay@yahoo.com'),
(16, 'Laura Taylor', 'Bd. Carol nr. 22', '1986-11-01', '22223462222', 'laura.taylor@yahoo.com'),
(17, 'Taylor Swift', 'Bd. Carol nr. 23', '1981-11-03', '212345762222', 'taylor.swift@gmail.com'),
(18,  'Rowan Atkinson', 'Bd. Carol nr. 24', '1983-07-07', '22223462222', 'rowan.atkinson@gmail.com'),
(19, 'Dwayne Johnson', 'Bd. Carol nr. 25', '1982-01-01', '2222879222222', 'dwayne.johnson@gmail.com'),
(20, 'Kevin Hart', 'Bd. Carol nr. 26', '1983-05-05', '22271312222', 'kevin.hart@yahoo.com');


-- Inserare date in tabelul Comanda
INSERT INTO Comanda (ID, IdAbonat, DataComanda, PretTotal) VALUES
(1, 1, '2024-05-01', 75.98),
(2, 3, '2024-05-02', 45.75),
(3, 5, '2024-05-03', 62.50),
(4, 2, '2024-05-04', 35.99),
(5, 4, '2024-05-05', 48.25),
(6, 6, '2024-05-06', 27.99),
(7, 8, '2024-05-07', 40.50),
(8, 10, '2024-05-08', 55.25),
(9, 7, '2024-05-09', 30.50),
(10, 9, '2024-05-10', 42.99),
(11, 5, '2024-08-12', 43.99),
(12, 6, '2024-12-13', 45.99),
(13, 5, '2024-03-22', 47.99),
(14, 1, '2024-03-13', 45.99),
(15, 2, '2024-03-10', 55.99),
(16, 3, '2024-02-10', 62.99),
(17, 3, '2024-05-12', 82.99),
(18, 5, '2024-05-11', 92.99),
(19, 6, '2024-04-10', 112.99),
(20, 7, '2024-05-20', 152.99);

-- Inserare date in tabelul ProduseComandate
INSERT INTO ProduseComandate (ID, IdComanda, IdProdus, Cantitate, PretTotal) VALUES
(1, 1, 1, 1, 45.99),
(2, 1, 14, 2, 25.00),
(3, 2, 3, 1, 55.75),
(4, 2, 15, 1, 12.50),
(5, 3, 8, 1, 35.50),
(6, 3, 17, 1,3.50),
(7, 4, 10, 2, 29.98),
(8, 4, 13, 1, 6.99),
(9, 5, 6, 1, 40.25),
(10, 5, 18, 1, 4.50),
(11, 6, 9, 1, 14.99),
(12, 7, 5, 1, 30.99),
(13, 8, 2, 1, 35.50),
(14, 8, 6, 1, 40.25),
(15, 9, 11, 2, 25.98),
(16, 10, 7, 1, 50.00),
(17, 10, 12, 1, 10.99),
(18, 10, 16, 1, 2.99),
(19, 10, 18, 1, 3.25),
(20, 10, 19, 1, 4.25);



--2. bucataru vrea sa stie  care este cel mai cumparat produs
SELECT TOP 1 Denumire
FROM (
    SELECT p.Denumire, SUM(pc.Cantitate) AS TotalCantitate
    FROM Produse p
    JOIN ProduseComandate pc ON p.ID = pc.IdProdus
    GROUP BY p.ID, p.Denumire
) AS Subquery
ORDER BY TotalCantitate DESC;


--3 bucataru cere realizarea unui raport in care sa se vada urm info realizare vedere join tabek

CREATE VIEW RaportComenzi AS
SELECT c.Nume AS 'Nume Client',
       c.DataNasterii AS 'Data Abonare',
       co.ID AS 'Comanda',
       co.DataComanda AS 'Data comanda',
       co.PretTotal AS 'Pret Total'
FROM Client c
JOIN Comanda co ON c.ID = co.IdAbonat;

select * from RaportComenzi;

--4 bucatar doreste sa stie preparatul preferat al fiecarui client

-- Adaug o coloana noua în tabelul Client pt a stoca ID-ul produsului preferat
ALTER TABLE Client
ADD IdProdusPreferat INT;

-- Creez o procedura stocata pentru actualizarea preferintelor clientului
CREATE PROCEDURE ActualizarePreferinteClient AS
BEGIN
    -- Declar variabile pentru ID-ul clientului și ID-ul produsului preferat
    DECLARE @IdClient INT;
    DECLARE @IdProdusFavorit INT;

    -- Declar un cursor pentru a parcurge fiecare client din tabelul Client //idk
    DECLARE curClient CURSOR FOR
    SELECT ID FROM Client;

    -- Deschid cursorul
    OPEN curClient;

    -- Obt primul ID de client din cursor
    FETCH NEXT FROM curClient INTO @IdClient;

    --Incep un loop pentru a parcurge fiecare client din cursor  //idk
    WHILE @@FETCH_STATUS = 0
    BEGIN
        -- Creez o tabela temporara pentru a stoca numarul de comenzi pentru fiecare produs al clientului //idk
        CREATE TABLE #ProdusePreferate (
            IdProdus INT,
            NrComenzi INT,
            RowNum INT
        );

        -- Introduc in tabelul temporar nr de comenzi pentru fiecare produs si ordonez rezultatele dupa nr de comenzi si data celei mai recente comenzi  //idk
        INSERT INTO #ProdusePreferate (IdProdus, NrComenzi, RowNum)
        SELECT TOP 1 pc.IdProdus, COUNT(*) AS NrComenzi, ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC, MAX(c.DataComanda) DESC)
        FROM Comanda c
        JOIN ProduseComandate pc ON c.ID = pc.IdComanda
        WHERE c.IdAbonat = @IdClient
        GROUP BY pc.IdProdus
        ORDER BY NrComenzi DESC, MAX(c.DataComanda) DESC;

        -- Obt. ID-ul produsului preferat pentru client
        SELECT @IdProdusFavorit = IdProdus FROM #ProdusePreferate WHERE RowNum = 1;

        -- Serg tabelul temporar
        DROP TABLE #ProdusePreferate;

        -- Actualizez coloana IdProdusPreferat din tabelul Client cu produsul preferat pentru clientul respectiv
        UPDATE Client
        SET IdProdusPreferat = @IdProdusFavorit
        WHERE ID = @IdClient;

        -- Afisez un mesaj ce indica produsul preferat al clientului
        PRINT 'Clientul cu ID-ul = ' + CAST(@IdClient AS VARCHAR(10)) + ' are ca preparat favorit ' + CAST(@IdProdusFavorit AS VARCHAR(10));

        -- Obtine urm ID de client din cursor
        FETCH NEXT FROM curClient INTO @IdClient;
    END

    -- Inchid cursorul
    CLOSE curClient;

    -- De-aloc cursorul
    DEALLOCATE curClient;
END;

EXEC ActualizarePreferinteClient;
SELECT ID, Nume, IdProdusPreferat
FROM Client;


--5. Realizeaza un trigger care pentru fiecare comanda noua a unui client sa lanseze procedura stocata care calculeaza produsul favorit al clientului.
CREATE PROCEDURE CalculProdusPreferat
    @IdClient INT AS
BEGIN
    -- Declar variabila pentru ID-ul produsului preferat
    DECLARE @IdProdusFavorit INT

    -- Creez o tabela temporara pentru a stoca numarul de comenzi pentru fiecare produs al clientului pt ca asa trebuie //idk
    CREATE TABLE #ProdusePreferate (
        IdProdus INT,
        NrComenzi INT,
        RowNum INT
    )

    -- Calculez nr de comenzi pentru fiecare produs al clientului si ordonez rezultatele dupa numarul de comenzi si data celei mai recente comenzi //idk
    INSERT INTO #ProdusePreferate (IdProdus, NrComenzi, NrRand)
    SELECT TOP 1 pc.IdProdus, COUNT(*) AS NrComenzi, ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC, MAX(c.DataComanda) DESC)
    FROM Comanda c
    JOIN ProduseComandate pc ON c.ID = pc.IdComanda
    WHERE c.IdAbonat = @IdClient
    GROUP BY pc.IdProdus
    ORDER BY NrComenzi DESC, MAX(c.DataComanda) DESC

    -- Obtin ID-ul produsului preferat pentru client
    SELECT @IdProdusFavorit = IdProdus FROM #ProdusePreferate WHERE NrRand = 1

    -- Sterg tabela temporara //idk
    DROP TABLE #ProdusePreferate

    -- Actualizez coloana IdProdusPreferat din tabelul Client cu produsul preferat pentru clientul acela
    UPDATE Client
    SET IdProdusPreferat = @IdProdusFavorit
    WHERE ID = @IdClient
END;
EXEC CalculProdusPreferat @IdClient = 1;
SELECT ID, Nume, IdProdusPreferat
FROM Client
WHERE ID = 1;

