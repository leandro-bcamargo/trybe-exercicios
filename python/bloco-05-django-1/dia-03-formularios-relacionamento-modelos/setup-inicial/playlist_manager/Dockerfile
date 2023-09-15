FROM mysql:8.0.32

COPY ./database/01_create_database.sql docker-entrypoint-initdb.d/data.sql01

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE playlist_manager_database