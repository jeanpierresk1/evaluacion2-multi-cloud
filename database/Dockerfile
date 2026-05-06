FROM postgres:15

# Variables de entorno
ENV POSTGRES_DB=simi_db
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# El script se ejecuta automáticamente al iniciar el volumen
COPY init.sql /docker-entrypoint-initdb.d/