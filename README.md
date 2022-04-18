# Ambiente NodeJS no Docker

Este é um simples exemplo de como executar o NodeJS em um container Docker.


## Pré-requisitos

Instale [Docker](https://www.docker.com/) no seu sistema.

Instale [Docker Compose](http://docs.docker.com/compose/) no seu sistema.



## Configure o .env
```
LOCALPORT=3535 #Porta exposta para acesso
DOCKERPORT=3000 #Porta da máquina docker que irá executar
```

## Execute
```bash
docker-compose build
```
isso irá:
* cirar a imagem Docker definida no Dockerfile.
* instalar todas as dependências do package.json.
* expor a porta denifina no .env.
* exeutar `npm start` e iniciar a aplicação.
