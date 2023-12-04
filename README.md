# REapp: A Social Platform for Abstinence Practitioners

## Introduction

REapp is a unique social platform designed for individuals who practice abstinence from alcohol, smoking, or drugs. In a society where such habits are prevalent, finding a supportive community can be challenging. This platform offers a safe and understanding environment for those committed to an abstinent lifestyle, facilitating connections with like-minded individuals.

## Features

- **Personalized Guidance:** Tailored advice and resources to support each user's journey in abstinence.
- **Calendar System:** A tool for organizing and tracking abstinence-related events, milestones, and personal goals.
- **Chat and Post System:** A space for users to communicate, share experiences, and offer support to each other.
- **Surveys for Feedback:** Regular user surveys to understand the community's needs and enhance the platform's features.

## Getting Started

### Prerequisites

- Ensure you have a stable internet connection for uninterrupted access to the platform.
- Compatible with modern web browsers.

### Registration and Login

- Users can register using a simple sign-up form.
- After registration, log in to access all the features of REapp.

### Navigation

- The user-friendly interface ensures easy navigation through various sections like chat rooms, posts, and the calendar system.

## Community Guidelines

REapp is committed to maintaining a respectful and supportive environment. We encourage all users to:

- Share experiences and tips in a positive and encouraging manner.
- Respect the privacy and boundaries of other members.
- Refrain from judgmental or negative comments.
- Report any inappropriate behavior to the platform moderators.

## Feedback and Support

We continuously strive to improve REapp. Your feedback is invaluable. Please use the in-built survey feature to share your thoughts or contact our support team for assistance.

## Conclusion

REapp is more than just a platform; it's a community. It's a place where abstinence is not only understood but celebrated. Join us in creating a supportive network for those choosing a lifestyle of abstinence in a modern society.

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

### Installation

1. **Clone Repository:**

   - Via SSH: `git clone git@github.com:jackvwh/REapp.git`
   - Via HTTPS: `git clone https://github.com/jackvwh/REapp.git`

2. **Install Dependencies:**

   - In the project directory, execute `npm install`.

3. **Environment Configuration:**

   - Create a `.env` file in Server directory with necessary configurations.

   ```
   /Server/.env
   MYSQL_HOST: localhost
   MYSQL_PORT: 3306
   MYSQL_USER: root
   MYSQL_PASSWORD: root
   MYSQL_DATABASE: test_db
   PORT : 3001
   ```

## Database Setup with Docker

1. **Prepare Database Directory:**

   - Create `./test_database/test_data/mysql_db`.
   - Include `DDL_schema.sql` in the `test_database` directory.
   - Ensure directory structure resembles:

     ```
     /someDirectory
       -- reapp (root directory)
            -- client
            -- server
       -- test_database
            -- DDL_schema.sql
            -- test_data
                  -- mysql_db
     ```

2. **Manage Docker Container:**

   - Start: In the root directory, run `docker compose up -d`.
   - Stop: Execute `docker compose down`.

3. **MySQL Connection:**
   - Connect via MySQL client using:
     - User: `root`
     - Password: `root`
     - Database: `test_db`
     - Port: `3306`

### Database Reset Procedure

1. **Stop Container:** `docker compose down`.
2. **Recreate Directory:**

   - Delete and recreate the `test_data` folder.
   - Add a new subfolder named `mysql_db`.
   - Optionally, update the `DDL_schema.sql` file.

3. **Restart Container:**
   - Start a new instance with `docker compose up -d`.

## Running the Application

1. **Start the Backend Server:**

   - In the project directory, run:
     ```
     npm run server
     ```
   - The server will be available at `http://localhost:3001`.

2. **Start the Frontend Server:**
   - In the project directory, run:
     ```
     npm run client
     ```
   - The client will be available at `http://localhost:3000`.
