ALTER USER 'root' @'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
USE test_db;
CREATE TABLE `message_likes`(
    `message_id` BIGINT UNSIGNED NOT NULL,
    `participant_id` BIGINT UNSIGNED NOT NULL,
    `like_type` VARCHAR(255) NOT NULL,
    `liked_at` TIMESTAMP NOT NULL
);
ALTER TABLE `message_likes`
ADD INDEX `message_likes_message_id_index`(`message_id`);
CREATE TABLE `activities`(
    `activity_id` BIGINT UNSIGNED NOT NULL,
    `activity_type` VARCHAR(255) NOT NULL,
    `activity_description` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE `activities`
ADD PRIMARY KEY `activities_activity_id_primary`(`activity_id`);
alter table activities
modify activity_id bigint unsigned auto_increment;
alter table activities auto_increment = 1;
CREATE TABLE `message_status`(
    `message_id` BIGINT UNSIGNED NOT NULL,
    `participant_id` BIGINT UNSIGNED NOT NULL,
    `delivered` TINYINT(1) NOT NULL,
    `read` TINYINT(1) NOT NULL,
    `read_at` TIMESTAMP NOT NULL
);
CREATE TABLE `event_to_labels`(
    `event_id` BIGINT UNSIGNED NOT NULL,
    `label_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE `event_to_labels`
ADD INDEX `event_to_labels_event_id_index`(`event_id`);
CREATE TABLE `calender_events`(
    `calender_id` BIGINT UNSIGNED NOT NULL,
    `event_id` BIGINT UNSIGNED NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `is_public` TINYINT(1) NOT NULL,
    `created_at` TIMESTAMP NOT NULL
);
ALTER TABLE `calender_events`
ADD INDEX `calender_events_calender_id_index`(`calender_id`);
ALTER TABLE `calender_events`
ADD INDEX `calender_events_event_id_index`(`event_id`);
CREATE TABLE `surveys`(
    `survey_id` BIGINT UNSIGNED NOT NULL,
    `survey_title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE `surveys`
ADD PRIMARY KEY `surveys_survey_id_primary`(`survey_id`);
ALTER TABLE `surveys`
ADD UNIQUE `surveys_survey_title_unique`(`survey_title`);
alter table surveys
modify survey_id bigint unsigned auto_increment;
alter table surveys auto_increment = 1;
CREATE TABLE `user_profiles`(
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` BIGINT NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `birthdate` DATE NOT NULL,
    `privilege` BIGINT UNSIGNED NOT NULL,
    `signup_date` DATETIME NOT NULL
);
ALTER TABLE `user_profiles`
ADD PRIMARY KEY `user_profiles_profile_id_primary`(`profile_id`);
ALTER TABLE `user_profiles`
ADD UNIQUE `user_profiles_username_unique`(`username`);
ALTER TABLE `user_profiles`
ADD UNIQUE `user_profiles_email_unique`(`email`);
alter table user_profiles
modify profile_id bigint unsigned auto_increment;
alter table user_profiles auto_increment = 1;
CREATE TABLE `activity_clubs`(
    `club_id` BIGINT UNSIGNED NOT NULL,
    `club_name` VARCHAR(255) NOT NULL,
    `activity_id` BIGINT UNSIGNED NOT NULL,
    `location_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE `activity_clubs`
ADD PRIMARY KEY `activity_clubs_club_id_primary`(`club_id`);
alter table activity_clubs
modify club_id bigint unsigned auto_increment;
alter table activity_clubs auto_increment = 1;
CREATE TABLE `event_comments`(
    `comment_id` BIGINT UNSIGNED NOT NULL,
    `event_id` BIGINT UNSIGNED NOT NULL,
    `comment_text` TEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE `event_comments`
ADD PRIMARY KEY `event_comments_comment_id_primary`(`comment_id`);
alter table event_comments
modify comment_id bigint unsigned auto_increment;
alter table event_comments auto_increment = 1;
CREATE TABLE `locations`(
    `location_id` BIGINT UNSIGNED NOT NULL,
    `address1` VARCHAR(255) NOT NULL,
    `address2` VARCHAR(255) NOT NULL,
    `street_number` BIGINT NOT NULL,
    `zipcode` BIGINT NOT NULL,
    `city_name` VARCHAR(255) NOT NULL,
    `country_id` BIGINT UNSIGNED NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE `locations`
ADD PRIMARY KEY `locations_location_id_primary`(`location_id`);
alter table locations
modify location_id bigint unsigned auto_increment;
alter table locations auto_increment = 1;
CREATE TABLE `labels`(
    `label_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `label_type` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL
);
ALTER TABLE `labels`
ADD PRIMARY KEY `labels_label_id_primary`(`label_id`);
alter table labels
modify label_id bigint unsigned auto_increment;
alter table labels auto_increment = 1;
CREATE TABLE `calender`(
    `calender_id` BIGINT UNSIGNED NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `timezone` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL
);
ALTER TABLE `calender`
ADD PRIMARY KEY `calender_calender_id_primary`(`calender_id`);
ALTER TABLE `calender`
ADD INDEX `calender_profile_id_index`(`profile_id`);
alter table calender
modify calender_id bigint unsigned auto_increment;
alter table calender auto_increment = 1;
CREATE TABLE `post_likes`(
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `post_id` BIGINT UNSIGNED NOT NULL,
    `like_type` VARCHAR(255) NOT NULL,
    `liked_at` DATETIME NOT NULL
);
ALTER TABLE `post_likes`
ADD INDEX `post_likes_profile_id_index`(`profile_id`);
CREATE TABLE `posts`(
    `post_id` BIGINT UNSIGNED NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `post_text` TEXT NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE `posts`
ADD PRIMARY KEY `posts_post_id_primary`(`post_id`);
ALTER TABLE `posts`
ADD INDEX `posts_profile_id_index`(`profile_id`);
alter table posts
modify post_id bigint unsigned auto_increment;
alter table posts auto_increment = 1;
CREATE TABLE `friendships`(
    `profile_request` BIGINT UNSIGNED NOT NULL,
    `profile_accept` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `answers`(
    `answer_id` BIGINT UNSIGNED NOT NULL,
    `question_id` BIGINT UNSIGNED NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `answer_text` VARCHAR(255) NULL,
    `answer_value` BIGINT NULL,
    `answer_bool` TINYINT(1) NULL,
    `answered_at` TIMESTAMP NOT NULL
);
ALTER TABLE `answers`
ADD PRIMARY KEY `answers_answer_id_primary`(`answer_id`);
ALTER TABLE `answers`
ADD INDEX `answers_profile_id_index`(`profile_id`);
alter table answers
modify answer_id bigint unsigned auto_increment;
alter table answers auto_increment = 1;
CREATE TABLE `events`(
    `event_id` BIGINT UNSIGNED NOT NULL,
    `event_type` VARCHAR(255) NOT NULL,
    `event_name` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `start` TIMESTAMP NOT NULL,
    `end` TIMESTAMP NOT NULL,
    `location_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE `events`
ADD PRIMARY KEY `events_event_id_primary`(`event_id`);
alter table events
modify event_id bigint unsigned auto_increment;
alter table events auto_increment = 1;
CREATE TABLE `questions`(
    `question_id` BIGINT UNSIGNED NOT NULL,
    `question_text` VARCHAR(255) NOT NULL,
    `answer_type` BIGINT NOT NULL
);
ALTER TABLE `questions`
ADD PRIMARY KEY `questions_question_id_primary`(`question_id`);
alter table questions
modify question_id bigint unsigned auto_increment;
alter table questions auto_increment = 1;
CREATE TABLE `feedback`(
    `feedback_id` BIGINT UNSIGNED NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `survey_id` BIGINT UNSIGNED NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE `feedback`
ADD PRIMARY KEY `feedback_feedback_id_primary`(`feedback_id`);
ALTER TABLE `feedback`
ADD INDEX `feedback_profile_id_index`(`profile_id`);
alter table feedback
modify feedback_id bigint unsigned auto_increment;
alter table feedback auto_increment = 1;
CREATE TABLE `drug_treatments`(
    `treatment_id` BIGINT UNSIGNED NOT NULL,
    `treatment_description` BIGINT NOT NULL
);
ALTER TABLE `drug_treatments`
ADD PRIMARY KEY `drug_treatments_treatment_id_primary`(`treatment_id`);
alter table drug_treatments
modify treatment_id bigint unsigned auto_increment;
alter table drug_treatments auto_increment = 1;
CREATE TABLE `drug_to_treatments`(
    `drug_id` BIGINT UNSIGNED NOT NULL,
    `treatment_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `user_activities`(
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `activity_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `clinics_and_otherhelp`(
    `help_id` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `location_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE `clinics_and_otherhelp`
ADD PRIMARY KEY `clinics_and_otherhelp_help_id_primary`(`help_id`);
alter table clinics_and_otherhelp
modify help_id bigint unsigned auto_increment;
alter table clinics_and_otherhelp auto_increment = 1;
CREATE TABLE `drug_register`(
    `drug_id` BIGINT UNSIGNED NOT NULL,
    `drug_name` VARCHAR(255) NOT NULL,
    `drug_description` TEXT NOT NULL
);
ALTER TABLE `drug_register`
ADD PRIMARY KEY `drug_register_drug_id_primary`(`drug_id`);
alter table drug_register
modify drug_id bigint unsigned auto_increment;
alter table drug_register auto_increment = 1;
CREATE TABLE `conversations`(
    `conversation_id` BIGINT UNSIGNED NOT NULL,
    `conversation_name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL
);
ALTER TABLE `conversations`
ADD PRIMARY KEY `conversations_conversation_id_primary`(`conversation_id`);
alter table conversations
modify conversation_id bigint unsigned auto_increment;
alter table conversations auto_increment = 1;
CREATE TABLE `survey_to_questions`(
    `question_id` BIGINT UNSIGNED NOT NULL,
    `survey_id` BIGINT UNSIGNED NOT NULL,
    `combined_at` DATETIME NOT NULL
);
ALTER TABLE `survey_to_questions`
ADD INDEX `survey_to_questions_question_id_index`(`question_id`);
ALTER TABLE `survey_to_questions`
ADD INDEX `survey_to_questions_survey_id_index`(`survey_id`);
CREATE TABLE `priviliges`(
    `id` BIGINT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `privilige` VARCHAR(255) NOT NULL
);
ALTER TABLE `priviliges`
ADD PRIMARY KEY `priviliges_id_primary`(`id`);
alter table priviliges
modify id bigint unsigned auto_increment;
alter table priviliges auto_increment = 1;
CREATE TABLE `countries`(
    `country_id` BIGINT UNSIGNED NOT NULL,
    `country_code` VARCHAR(255) NOT NULL,
    `country_name` VARCHAR(255) NOT NULL
);
ALTER TABLE `countries`
ADD PRIMARY KEY `countries_country_id_primary`(`country_id`);
ALTER TABLE `countries`
ADD UNIQUE `countries_country_code_unique`(`country_code`);
ALTER TABLE `countries`
ADD UNIQUE `countries_country_name_unique`(`country_name`);
alter table countries
modify country_id bigint unsigned auto_increment;
alter table countries auto_increment = 1;
CREATE TABLE `messages`(
    `message_id` BIGINT UNSIGNED NOT NULL,
    `conversation_id` BIGINT UNSIGNED NOT NULL,
    `sender_id` BIGINT UNSIGNED NOT NULL,
    `message_text` TEXT NOT NULL,
    `sent_at` TIMESTAMP NOT NULL
);
ALTER TABLE `messages`
ADD PRIMARY KEY `messages_message_id_primary`(`message_id`);
ALTER TABLE `messages`
ADD INDEX `messages_conversation_id_index`(`conversation_id`);
alter table messages
modify message_id bigint unsigned auto_increment;
alter table messages auto_increment = 1;
CREATE TABLE `participants`(
    `participant_id` BIGINT UNSIGNED NOT NULL,
    `conversation_id` BIGINT UNSIGNED NOT NULL,
    `profile_id` BIGINT UNSIGNED NOT NULL,
    `joined_at` TIMESTAMP NOT NULL,
    `left_at` TIMESTAMP NULL
);
ALTER TABLE `participants`
ADD PRIMARY KEY `participants_participant_id_primary`(`participant_id`);
ALTER TABLE `participants`
ADD INDEX `participants_profile_id_index`(`profile_id`);
alter table participants
modify participant_id bigint unsigned auto_increment;
alter table participants auto_increment = 1;
ALTER TABLE `message_status`
ADD CONSTRAINT `message_status_message_id_foreign` FOREIGN KEY(`message_id`) REFERENCES `messages`(`message_id`);
ALTER TABLE `message_likes`
ADD CONSTRAINT `message_likes_participant_id_foreign` FOREIGN KEY(`participant_id`) REFERENCES `participants`(`participant_id`);
ALTER TABLE `locations`
ADD CONSTRAINT `locations_country_id_foreign` FOREIGN KEY(`country_id`) REFERENCES `countries`(`country_id`);
ALTER TABLE `user_activities`
ADD CONSTRAINT `user_activities_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `calender`
ADD CONSTRAINT `calender_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `calender_events`
ADD CONSTRAINT `calender_events_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`event_id`);
ALTER TABLE `clinics_and_otherhelp`
ADD CONSTRAINT `clinics_and_otherhelp_location_id_foreign` FOREIGN KEY(`location_id`) REFERENCES `locations`(`location_id`);
ALTER TABLE `post_likes`
ADD CONSTRAINT `post_likes_post_id_foreign` FOREIGN KEY(`post_id`) REFERENCES `posts`(`post_id`);
ALTER TABLE `answers`
ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY(`question_id`) REFERENCES `questions`(`question_id`);
ALTER TABLE `calender_events`
ADD CONSTRAINT `calender_events_calender_id_foreign` FOREIGN KEY(`calender_id`) REFERENCES `calender`(`calender_id`);
ALTER TABLE `user_profiles`
ADD CONSTRAINT `user_profiles_privilege_foreign` FOREIGN KEY(`privilege`) REFERENCES `priviliges`(`id`);
ALTER TABLE `messages`
ADD CONSTRAINT `messages_conversation_id_foreign` FOREIGN KEY(`conversation_id`) REFERENCES `conversations`(`conversation_id`);
ALTER TABLE `posts`
ADD CONSTRAINT `posts_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `drug_to_treatments`
ADD CONSTRAINT `drug_to_treatments_treatment_id_foreign` FOREIGN KEY(`treatment_id`) REFERENCES `drug_treatments`(`treatment_id`);
ALTER TABLE `messages`
ADD CONSTRAINT `messages_sender_id_foreign` FOREIGN KEY(`sender_id`) REFERENCES `participants`(`participant_id`);
ALTER TABLE `activity_clubs`
ADD CONSTRAINT `activity_clubs_activity_id_foreign` FOREIGN KEY(`activity_id`) REFERENCES `activities`(`activity_id`);
ALTER TABLE `event_comments`
ADD CONSTRAINT `event_comments_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `feedback`
ADD CONSTRAINT `feedback_survey_id_foreign` FOREIGN KEY(`survey_id`) REFERENCES `surveys`(`survey_id`);
ALTER TABLE `activity_clubs`
ADD CONSTRAINT `activity_clubs_location_id_foreign` FOREIGN KEY(`location_id`) REFERENCES `locations`(`location_id`);
ALTER TABLE `friendships`
ADD CONSTRAINT `friendships_profile_accept_foreign` FOREIGN KEY(`profile_accept`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `user_activities`
ADD CONSTRAINT `user_activities_activity_id_foreign` FOREIGN KEY(`activity_id`) REFERENCES `activities`(`activity_id`);
ALTER TABLE `friendships`
ADD CONSTRAINT `friendships_profile_request_foreign` FOREIGN KEY(`profile_request`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `message_likes`
ADD CONSTRAINT `message_likes_message_id_foreign` FOREIGN KEY(`message_id`) REFERENCES `messages`(`message_id`);
ALTER TABLE `event_to_labels`
ADD CONSTRAINT `event_to_labels_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`event_id`);
ALTER TABLE `post_likes`
ADD CONSTRAINT `post_likes_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `events`
ADD CONSTRAINT `events_location_id_foreign` FOREIGN KEY(`location_id`) REFERENCES `locations`(`location_id`);
ALTER TABLE `survey_to_questions`
ADD CONSTRAINT `survey_to_questions_question_id_foreign` FOREIGN KEY(`question_id`) REFERENCES `questions`(`question_id`);
ALTER TABLE `event_to_labels`
ADD CONSTRAINT `event_to_labels_label_id_foreign` FOREIGN KEY(`label_id`) REFERENCES `labels`(`label_id`);
ALTER TABLE `participants`
ADD CONSTRAINT `participants_conversation_id_foreign` FOREIGN KEY(`conversation_id`) REFERENCES `conversations`(`conversation_id`);
ALTER TABLE `survey_to_questions`
ADD CONSTRAINT `survey_to_questions_survey_id_foreign` FOREIGN KEY(`survey_id`) REFERENCES `surveys`(`survey_id`);
ALTER TABLE `drug_to_treatments`
ADD CONSTRAINT `drug_to_treatments_drug_id_foreign` FOREIGN KEY(`drug_id`) REFERENCES `drug_register`(`drug_id`);
ALTER TABLE `participants`
ADD CONSTRAINT `participants_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `feedback`
ADD CONSTRAINT `feedback_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);
ALTER TABLE `event_comments`
ADD CONSTRAINT `event_comments_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`event_id`);
ALTER TABLE `message_status`
ADD CONSTRAINT `message_status_participant_id_foreign` FOREIGN KEY(`participant_id`) REFERENCES `participants`(`participant_id`);
ALTER TABLE `answers`
ADD CONSTRAINT `answers_profile_id_foreign` FOREIGN KEY(`profile_id`) REFERENCES `user_profiles`(`profile_id`);