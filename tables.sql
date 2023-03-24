CREATE TABLE `hotelmiranda`.`rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `src` VARCHAR(255) NULL,
  `type` VARCHAR(45) NULL,
  `price` INT NULL,
  `offer` INT NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hotelmiranda`.`amenities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amenitie` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hotelmiranda`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  `src` VARCHAR(255) NULL,
  `email` VARCHAR(45) NULL,
  `start` DATETIME NULL,
  `job` VARCHAR(255) NULL,
  `contact` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hotelmiranda`.`bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  `src` VARCHAR(255) NULL,
  `date` DATETIME NULL,
  `checkinDate` DATE NULL,
  `checkinTime` TIME NULL,
  `checkoutDate` DATE NULL,
  `checkoutTime` TIME NULL,
  `note` VARCHAR(255) NULL,
  `type` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hotelmiranda`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer` VARCHAR(60) NULL,
  `date` DATETIME NULL,
  `email` VARCHAR(60) NULL,
  `phone` VARCHAR(45) NULL,
  `affair` VARCHAR(45) NULL,
  `comment` VARCHAR(255) NULL,
  `archived` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hotelmiranda`.`rooms_amenities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_room` INT NULL,
  `id_amenitie` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
