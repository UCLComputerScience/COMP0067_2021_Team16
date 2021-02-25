CREATE TABLE slideshow_slide (
    PRIMARY KEY slide_id INT NOT NULL,
    recording_id INT NULL,
    slide_position INT NOT NULL
);

CREATE TABLE user_settings (
        PRIMARY KEY settings_id INT NOT NULL,
    slide_duration INT NOT NULL,
    animation_speed INT NOT NULL,
    shuffle BOOLEAN NOT NULL,
    audio_option CHAR(50) NOT NULL,
    default_soundtrack INT NOT NULL
);

CREATE TABLE slideshow (
    PRIMARY KEY slideshow_id INT NOT NULL,
    slideshow_name CHAR(50) NOT NULL,
    slideshow_order INT NOT NULL,
    default_flag BOOLEAN NOT NULL,
    enabled BOOLEAN NOT NULL
);

CREATE TABLE slide (
    PRIMARY KEY slide_id INT NOT NULL,
    slide_src CHAR(100) NOT NULL UNIQUE,
    slide_name CHAR(50) NULL,
    animation_type CHAR(50) NOT NULL,
    default_flag BOOLEAN NOT NULL,
    default_recording INT NOT NULL
);

CREATE TABLE recording (
    PRIMARY KEY recording_id INT NOT NULL,
    recording_src CHAR(100) NOT NULL UNIQUE,
    recording_name CHAR(50) NULL,
    default_flag BOOLEAN NOT NULL
);

CREATE TABLE soundtrack (
    PRIMARY KEY track_id INT NOT NULL,
    track_src CHAR(100) NOT NULL UNIQUE,
    track_name CHAR(50) NULL
);