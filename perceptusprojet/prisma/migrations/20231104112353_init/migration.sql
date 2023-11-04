-- CreateTable
CREATE TABLE `tabletest` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Pesel` CHAR(30) NULL,
    `Imie` CHAR(30) NULL,
    `Nazwisko` CHAR(30) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
