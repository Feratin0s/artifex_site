# entrypoint.sh
#!/bin/bash

# Lê os secrets
DB_USER=$(cat /run/secrets/db_user)
DB_PASSWORD=$(cat /run/secrets/db_password)
ROOT_PASSWORD=$(cat /run/secrets/root_password)

# Exporta para o ambiente
export MYSQL_DATABASE=sitedb
export MYSQL_USER="$DB_USER"
export MYSQL_PASSWORD="$DB_PASSWORD"
export MYSQL_ROOT_PASSWORD="$ROOT_PASSWORD"

# Executa o entrypoint original do MariaDB
# Usa mariadbd em vez de mysqld para compatibilidade com versões mais recentes
exec docker-entrypoint.sh mariadbd