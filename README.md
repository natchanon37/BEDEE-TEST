# REST API example application

This is a Todo-list API with demo data.

# REST API

The REST API to the example app is described below.

## API root path

### Request

`GET /api/`

    curl -i -H 'Accept: application/json' http://localhost:3001/api/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 11
    ETag: W/"b-bT6Yp/K0DEolus3lXvS6bRWtFLQ"
    Date: Mon, 21 Nov 2022 13:36:54 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    API Started%

## Get all todo-list

### Request

`GET /alltodo/`

    curl -i -H 'Accept: application/json' http://localhost:3001/api/alltodo

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 154
    ETag: W/"9a-R4PpqF2UEyil540IN7o88z0+1ks"
    Date: Mon, 21 Nov 2022 19:43:15 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [{"id":1,"title":"Order Beer","completed":false},
    {"id":2,"title":"Order Tsunagimo","completed":false},
    {"id":3,"title":"Order Nankotsu","completed":false}]%

## Add a new todo-lst

`POST /add/`

    $ curl -X POST http://localhost:3000 -H "Accept: application/json" -H "Content-type: application/json" -d '{ "title" : "Order Order Sushi", "completed": "false" }'

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 203
    ETag: W/"cb-/sQhwS/kTF1ZoBOcYZmuPg5AHro"
    Date: Mon, 21 Nov 2022 19:44:59 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
    {
    	"id": 1,
    	"title": "Order Beer",
    	"completed": false
    },
    {
    	"id": 2,
    	"title": "Order Tsunagimo",
    	"completed": false
    },
    {
    	"id": 3,
    	"title": "Order Nankotsu",
    	"completed": false
    },
    {
    	"id": 4,
    	"title": "Order Sushi",
    	"completed": false
    }

## Delete todo-list

`DELETE /delete/id`

    curl -X "DELETE" "http://localhost:3001/api/delete/2"

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 154
    ETag: W/"9a-R4PpqF2UEyil540IN7o88z0+1ks"
    Date: Mon, 21 Nov 2022 19:46:18 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
    {
    	"id": 1,
    	"title": "Order Beer",
    	"completed": false
    },
    {
    	"id": 2,
    	"title": "Order Tsunagimo",
    	"completed": false
    },
    {
    	"id": 3,
    	"title": "Order Nankotsu",
    	"completed": false
    }

]

## Update todo-list when todo is completed

`PUT /completed/id`

    curl -X "PUT" "http://localhost:3001/api/completed/1"

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 153
    ETag: W/"99-TnKkK8tR4CtjT75ahVpmCKsQQJY"
    Date: Mon, 21 Nov 2022 19:47:33 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
    {
    	"id": 1,
    	"title": "Order Beer",
    	"completed": true
    },
    {
    	"id": 2,
    	"title": "Order Tsunagimo",
    	"completed": false
    },
    {
    	"id": 3,
    	"title": "Order Nankotsu",
    	"completed": false
    }
