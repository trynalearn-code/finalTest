# Explanation

## Why I chose MongoDB

I chose MongoDB because it creates an id for me automatically. This is helpful for my database, and I don't need to go through the hastle of creating an id. Also, Mongo is a reliable tool that can help me manage information quickly and systematically- which was part of the instructions. Furthermore, Mongo supports searching and filtering.

## HTTP Status codes

The general HTTP status codes we used were 200 for a successful request, and a 201 for a created resource. For failures, a 500 is the internal server error. Additionally, a 404 can be used for when a resource is not found, and a 400 is when there is a bad request/client error. 401 is for missing/invalid information. A 404 is unauthorized, when authentication has failed, and a 408 is a request timeout.

### Validation

I ensured that invalid requests can't be sent, by only allowing certain fields in the services. If there is any information that is sent that doesn't comply with the fields, a new Error will be thrown, and a fitting message will be sent to the console.

### State

Using useState on the client-end is the most efficient, as it updates in real-time and gets the results we need. This enabled the forms and UI to update and work well, with little to no lag.
