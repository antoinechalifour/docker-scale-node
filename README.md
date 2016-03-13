# Docker Scale Node

**Heavely inspired by https://github.com/eyenx/docker-compose-example**

## Quickstart

* `docker-compose build`
* `docker-compose scale api=(your_number)`
* `docker-compose up -d`

## What is included

* `http://your_docker_machine_ip/` -> 'Hello from ${hostname}' (to check that requests are balanced)
* `http://your_docker_machine_ip/env` -> to check env variable for each node server
* `http://your_docker_machine_ip/count` -> to get and increase the counter stored in a redis container