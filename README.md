# Teams

Teams is a platform to manage events and theis teams!

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7e95bd1064c8458d94eabfa137c79c70)](https://app.codacy.com/manual/Wendlereis/teams-ms?utm_source=github.com&utm_medium=referral&utm_content=Wendlereis/teams-ms&utm_campaign=Badge_Grade_Settings)

## Prerequisites

To run this app you'll need

- nodejs
- docker and docker-compose
- yarn

## Setup environment

### Variables

To run the application we need to setup some environment variables.

#### container variables

In `docker-compose.local.yaml` edit the values to create your postgre database, then add the values in `environment` parameter of `team-ms` service

#### .env file

In root folder, create a .env file

```sh
$ cp ./.env.sample ./.env 
```

then, change the values

### Run the app

```sh
$ docker-compose -f docker-compose.local.yaml up -d
```

### Database

After run the `teams-db` container, we need to create our tables and populate them.

#### install sequelize command line interface

```sh
$ yarn add sequelize-cli
```
#### run sequelize migrations

```sh
$ yarn sequelize db:migrate
```

#### run sequelize seeds

```sh
$ yarn sequelize db:seed:all
```

## Give it a try!

```sh
curl --location --request POST '{{localhost}}/auth' \
--data-raw '{
	"usernameOrEmail": "johndoe",
	"password": "w42443890."
}'
```