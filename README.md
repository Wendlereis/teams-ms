# Teams

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