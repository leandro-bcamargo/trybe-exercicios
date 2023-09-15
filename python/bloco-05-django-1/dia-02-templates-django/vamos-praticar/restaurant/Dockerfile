FROM mysql:8.0.32

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE restaurant_database

COPY restaurant/database/01_create_database.sql /docker-entrypoint-initdb.d/data.sql01