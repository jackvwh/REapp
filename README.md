# REapp: Et socialt netværk for afholdenhedspraktikere

## Introduktion

REapp er et helt unikt socialt netværk skabt til folk, der lever uden alkohol, rygning eller stoffer. Det kan være svært at finde et fællesskab, der støtter en, når man lever afholdende – men det er lige præcis, hvad REapp tilbyder.

## Funktioner

- **Personlig vejledning:** Få skræddersyet rådgivning og støtte til din afholdenhedsrejse.
- **Kalendersystem:** Hold styr på vigtige datoer og personlige mål.
- **Chat og opslag:** Snak med andre brugere, del dine oplevelser og giv hinanden støtte.
- **Brugerundersøgelser:** Dine meninger hjælper os med at gøre REapp endnu bedre.

## Kom godt i gang

### Forudsætninger

- En stabil internetforbindelse.
- Virker på alle moderne webbrowsere.

### Registrering og Login

- Nem tilmelding via vores formular.
- Log ind og udforsk alle REapps funktioner.

### Navigation

- Nem og intuitiv brugerflade, der gør det let at finde rundt.

## Fællesskabsregler

Vi går meget op i at holde REapp venligt og støttende. Husk derfor at:

- Være positiv og opmuntrende i din kommunikation.
- Respektere andres privatliv og grænser.
- Undgå negative kommentarer.
- Rapportere alt upassende til vores moderatorer.

## Feedback og Support

Dine tanker og idéer er guld værd for os. Brug vores indbyggede undersøgelsesfunktion til at give feedback eller kontakt vores supportteam for hjælp.

## Konklusion

REapp er mere end bare en app – det er et fællesskab, hvor afholdenhed er i centrum. Vær med til at skabe et netværk, der støtter et afholdende liv i en moderne verden.

# Developer Setup Guide for REapp

## Technology Stack

- **Node.js:** JavaScript runtime for server-side execution.
- **Express.js:** Flexible Node.js web application framework.
- **MySQL:** Database system for managing artist, album, and song data.
- **Docker:** Containerization platform for application packaging.
- **React:** JavaScript library for UI development.

## Initial Setup

### Prerequisites

Ensure the following are installed:

- Node.js (Version 14+)
- Docker (Version 20+)

## Database Setup with Docker

1. **Prepare Database Directory:**

   - Create `./test_data/data/db`.
   - Include `DDL_schema.sql` in the `test_data` directory.
     - Download from:
       https://drive.google.com/file/d/1lpCQkcZeAcf69Y12LYRyKaNqtQfpMhXx/view?usp=drive_link
   - Ensure directory structure resembles:

     ```
     ./
       -- reapp (root directory)
            -- client
            -- server
            -- package.json
            -- docker-compose.dev.yml
       -- test_data
            -- DDL_schema.sql
            -- data
                  -- db // empty directory
     ```

### Project Setup

1. **Clone Repository:**

   - Via SSH: `git clone git@github.com:jackvwh/REapp.git`
   - Via HTTPS: `git clone https://github.com/jackvwh/REapp.git`

2. **Environment Configuration:**

   - Create a `.env` file in root directory with necessary configurations.

   ```
   /.env
   MYSQL_USER=user
   MYSQL_PASSWORD=madeinchina
   MYSQL_DATABASE=test_db
   MYSQL_HOST=localhost
   MYSQL_PORT=3306

   # for development
   MYSQL_LOCAL_PORT=3306
   MYSQL_DOCKER_PORT=3306
   ```

   - Create a `.env` file in Server directory with necessary configurations.

   ```
   /Server/.env
   MYSQL_HOST: localhost
   MYSQL_PORT: 3306
   MYSQL_USER: user
   MYSQL_PASSWORD: madeinchina
   MYSQL_DATABASE: test_db
   PORT : 3001
   ```

## Initialise database with Docker

3. **Manage Docker Container:**

   - Start: In the root directory, run `docker compose -f docker-compose.dev.yml up -d`.

   - Stop: Execute `docker compose -f docker-compose.dev.yml down`.

4. **MySQL Connection:**
   - Connect via MySQL client using:
     - User: `user`
     - Password: `madeinchina`
     - Database: `test_db`
     - Port: `3306`

## Running the Application

1. **Install Dependencies:**

   - In the project root directory, run:
     ```
     npm install
     ```

2. **Start the Frontend Server:**

   - In the project root directory, run:
     ```
     npm run client
     ```
   - The client will be available at `http://localhost:3000`.

3. **Start the Backend Server:**

   - In the project root directory, run:
     ```
     npm run server
     ```
   - The server will be available at `http://localhost:3001`.
