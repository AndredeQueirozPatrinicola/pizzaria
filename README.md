## Projeto Piulzza

Web app de pizzaria simulando entregas, sistema de pagamentos, ofertas, etc...

Projeto para estudo.

## Setup

### Run:

#### Virtual env:
    python3 -m venv venv
#####
    source venv/bin/activate 
#####
    pip install -r requirements.txt

#### Enviroment: 
    touch .env 

##### .env-example:

    SECRET_KEY=Y0urS3cr3t3K3Y

    DEBUG=True

    DBNAME='pizzaria'
    DBUSER='postgres'
    DBPASSWORD='password'
    DBHOST='localhost'
    DBPORT='5432'

#### Migrations
    python3 manage.py migrate
#### Dev server
    python3 manage.py runserver

## React

O projeto é feito com React e se encontra no diretorio 'frontend/piulzza'

### Run

#### Install
    npm install 
#### Dev server
    npm run dev
#### Build
    npm run build





    




