# Swish rollbar error handeling examples

## Payment route
Simple GET route with a counter to simulate an database connection error and sends a message to rollbar.

## Rollbar logs route
Exampels on different log types you can send to rollbar

## Type error route
Node JS type and syntax error example

In your Rollbar configuration you can set rollbar to always catch error's on:
- Uncaught exceptions
- UnhandledRejections exceptions

```
let rollbar = Rollbar.init({ 
    accessToken: process.env.ROLLBAR_SECRET,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: "production"
    }
});
```

## Docker commands
```
docker rm -f swishRollbar
docker rmi -f swishRollbar
docker build -t rp-swishserver .
docker run -p 3000:3000 -dit --name swishRollbar rp-swishserver
docker logs -f swishRollbar
```