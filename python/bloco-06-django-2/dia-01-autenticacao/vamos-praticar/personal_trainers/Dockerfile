FROM mysql:8.0.32

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE personal_trainers_database

COPY ./personal_trainers/database/01_create_database.sql /docker-entrypoint-initdb.d/01_create_database.sql