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
    npm start
#### Build
    npm run build

## Django

A aplicação roda com Django no back-end renderizando a SPA do react e fornecendo APIs para o front.

#### Build

Ao rodar o script de build, o React compila arquivos estaticos com o nome 'main' + {numeroAleatoriogerado} + '.js'. 
Para contornar a adição deste número aleatório criei um script em Python que renomeia os arquivos para se 
compatibilizarem com as configurações de renderização do django.

##### Run
    python3 build.py


## API

### Endpoints:

    {
        "sabores": "http://127.0.0.1:8000/api/sabores/",
        "pizza": "http://127.0.0.1:8000/api/pizza/",
        "pedidos": "http://127.0.0.1:8000/api/pedidos/"
    }


    




