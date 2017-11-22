# Swish för handel @getswish

## Docker commands
```
docker rm -f swishRollbar
docker rmi -f swishRollbar
docker build -t rp-swishserver .
docker run -p 3000:3000 -dit --name swishRollbar rp-swishserver
docker logs -f swishRollbar
```