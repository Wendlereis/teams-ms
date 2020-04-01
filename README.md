# Teams

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7e95bd1064c8458d94eabfa137c79c70)](https://app.codacy.com/manual/Wendlereis/teams-ms?utm_source=github.com&utm_medium=referral&utm_content=Wendlereis/teams-ms&utm_campaign=Badge_Grade_Settings)

## Database

### Connect to database

#### create postgres instance

`docker run --name teams-db -e POSTGRES_PASSWORD=teams -p 5432:5432 -d postgress`

#### start teams-db container

`docker start teams-db`

#### stop teams-db container

`docker stop teams-db`

#### setup dotenv file

add values in `.env` file to connect to your database

### Create database structure

#### create migration

`yarn sequelize migration:create --name=[migration-name]`

#### run migrations

`yarn sequelize db:migrate`