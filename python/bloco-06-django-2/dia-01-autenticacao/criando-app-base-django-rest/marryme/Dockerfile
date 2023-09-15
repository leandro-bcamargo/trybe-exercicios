FROM mysql:8.0.32

ENV MYSQL_DATABASE marryme_database
ENV MYSQL_ROOT_PASSWORD password

COPY ./marryme/database/01_create_database.sql /docker-entrypoint-initdb.d/01_create_database.sql