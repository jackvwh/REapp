# Reapp: A Social Platform for Abstinence Practitioners

## Introduction

AbstinenceConnect is a unique social platform designed for individuals who practice abstinence from alcohol, smoking, or drugs. In a society where such habits are prevalent, finding a supportive community can be challenging. This platform offers a safe and understanding environment for those committed to an abstinent lifestyle, facilitating connections with like-minded individuals.

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
- After registration, log in to access all the features of AbstinenceConnect.

### Navigation

- The user-friendly interface ensures easy navigation through various sections like chat rooms, posts, and the calendar system.

## Community Guidelines

AbstinenceConnect is committed to maintaining a respectful and supportive environment. We encourage all users to:

- Share experiences and tips in a positive and encouraging manner.
- Respect the privacy and boundaries of other members.
- Refrain from judgmental or negative comments.
- Report any inappropriate behavior to the platform moderators.

## Feedback and Support

We continuously strive to improve AbstinenceConnect. Your feedback is invaluable. Please use the in-built survey feature to share your thoughts or contact our support team for assistance.

## Conclusion

AbstinenceConnect is more than just a platform; it's a community. It's a place where abstinence is not only understood but celebrated. Join us in creating a supportive network for those choosing a lifestyle of abstinence in a modern society.

## DEVELOPERS

### TEST DATABASE ENVIRONMENT

# Docker Engine Installation and Setup Guide

This guide provides instructions for setting up a Docker environment for the `test_database` project. Please note that post-installation steps are crucial for Linux systems. Instructions for Windows or Mac are not covered in this guide.

## Prerequisites

- Docker Engine installed on your system. Refer to [Docker's official documentation](https://docs.docker.com/engine/install/) for installation instructions. Pay special attention to post-install steps if you're using Linux.

## Setting Up the Test Database

1. **Download the Test Database Directory:**

   - Obtain the `test_database` folder. This can be done either by downloading it or by creating the directory structure manually.
   - If manually creating, structure it as follows: `./test_database/test_data/mysql_db`
   - Place the `DDL_schema.sql` file inside the `test_database` directory.

2. **Prepare the Downloaded Directory:**

   - The folder will be downloaded as a zip file with an additional extension.
   - Extract the zip file and rename the folder to `test_database`.

3. **Copy to Project Root:**
   - Copy the `test_database` folder to the root directory of your project.
   - Note: This directory is already included in the `.gitignore` file.

## Managing the Docker Container

1. **Start the Container:**

   - From the root directory, use the command: `docker compose up -d`.

2. **Stop the Container:**
   - To stop the container, use: `docker compose down`.

## Connecting to MySQL

- Connect using a MySQL client as the root user:
  - **User:** `root`
  - **Password:** `root`
  - **Database:** `test_db`
  - **Connection and Port:** Standard localhost and 3306

## Resetting the Database

1. **Stop the Container:**

   - Use the command: `docker compose down`.

2. **Delete and Recreate the Directory:**

   - Delete the `test_data` folder.
   - Create a new `test_data` folder and a subfolder named `mysql_db`.

3. **Update Schema (Optional):**

   - Optionally, update the `DDL_schema.sql` file as needed.

4. **Start a New Instance:**
   - Start a new container instance with: `docker compose up`.
