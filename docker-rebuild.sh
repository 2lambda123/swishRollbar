#/bin/bash

docker rm -f swishServer
docker rmi -f qb-swishserver
docker build -t qb-swishserver .
docker run -p 3030:3030 -dit --name swishServer qb-swishserver
docker logs -f swishServer