#!/bin/bash

## Generate global auth key between cluster nodes
##openssl rand -base64 756 > mongodb.key
##chmod 600 mongodb.key

openssl rand -base64 756 > mongodb.key
chmod 400 mongodb.key
sudo chown 999:999 mongodb.key

docker-compose up -d

sleep 20

docker exec mongoconfig1 sh -c "mongo < /scripts/initConfigServers.js"
docker exec mongoshardan1 sh -c "mongo < /scripts/initShardA.js"
docker exec mongoshardbn1 sh -c "mongo < /scripts/initShardB.js"
sleep 20
docker exec mongos sh -c "mongo < /scripts/initRouter.js"