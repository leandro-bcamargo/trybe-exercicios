# Dockerfile
FROM mysql:8.0.32

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE marketplace_database

COPY marketplace/database/01_create_database.sql /docker-entrypoint-initdb.d/data.sql01