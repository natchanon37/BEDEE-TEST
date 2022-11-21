# REST API example application

This is a Todo-list API with demo data and mock POST,DELETE,UPDATE method.

In this demo todo-list can create,update and delete using the following method

### Add Todo

```javascript
MockPostMethod();
```

### Delete Todo

Delete todo at id = 1

```javascript
MockDeleteMethod(1);
```

### UpdateTodo

Update todo at id = 1

```javascript
MockIsCompleted(1);
```

# REST API

The REST API to the example app is described below.

## API Page greeting

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

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 154
    ETag: W/"9a-R4PpqF2UEyil540IN7o88z0+1ks"
    Date: Mon, 21 Nov 2022 13:40:32 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [{"id":1,"title":"Order Beer","completed":false},
    {"id":2,"title":"Order Tsunagimo","completed":false},
    {"id":3,"title":"Order Nankotsu","completed":false}]%

## Add a new todo-lst

`GET /add/`

    curl -i -H 'Accept: application/json' http://localhost:3001/api/addtodo

### Response

    Request URL: http://localhost:3001/api/addtodo
    Request Method: GET
    Status Code: 200 OK
    Remote Address: [::1]:3001
    Referrer Policy: strict-origin-when-cross-origin

    [{"id":1,"title":"Order Beer","completed":false},
    {"id":2,"title":"Order Tsunagimo","completed":false},
    {"id":3,"title":"Order Nankotsu","completed":false},
    {"id":4,"title":"add test","completed":false}]%

## Delete todo-list

`GET /delete/`

    curl -i -H 'Accept: application/json' http://localhost:3001/api/delete

### Response

    Request URL: http://localhost:3001/api/delete
    Request Method: GET
    Status Code: 200 OK
    Remote Address: [::1]:3001
    Referrer Policy: strict-origin-when-cross-origin

    [{"id":2,"title":"Order Tsunagimo","completed":false},
    {"id":3,"title":"Order Nankotsu","completed":false}]

## Update todo-list when todo is completed

`GET /completed/`

    curl -i -H 'Accept: application/json' http://localhost:3001/api/completed

### Response

    Request URL: http://localhost:3001/api/completed
    Request Method: GET
    Status Code: 200 OK
    Remote Address: [::1]:3001
    Referrer Policy: strict-origin-when-cross-origin

    [{"id":1,"title":"Order Beer","completed":true},
    {"id":2,"title":"Order Tsunagimo","completed":false},
    {"id":3,"title":"Order Nankotsu","completed":false}]
