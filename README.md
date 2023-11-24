# Challenge 06

## Car Management API

## API Docs

`[ENDPOINT] /v1/api-docs`

```url
[GET] http://localhost:3000/v1/api-docs
```

## Users Endpoint

#### Super Admin Credentials:

email: superadmin@gmail.com
password: admin-super

## Register User

`[ENDPOINT] /v1/users/register`

```url
[POST] http://localhost:3000/v1/users/register
```

#### Request body

```json
{
  "username": string,
  "email": string,
  "password": string
}
```

#### Response body

```json
{
  "status": "201",
  "message": "Successful Registration!",
  "data": {
    "id": 2,
    "username": "Admin",
    "email": "admin@gmail.com",
    "password": "admin12345"
  }
}
```

## Login User

`[ENDPOINT] /v1/users/login`

```url
[POST] http://localhost:3000/v1/users/login
```

#### Request body

```json
{
  "email": string,
  "password": string
}
```

#### Response body

#### If successful

```json
{
  "status": 200,
  "message": "Successfully Logged In!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MDk5MzF9.Kvlz2Wbd4NE5lNvF154twhjeKGix7rS7lmbhquAQo1c"
}
```

#### If incorrect email

```json
{
  "status": 404,
  "message": "Email not found, please try another email!"
}
```

#### If incorrect password

```json
{
  "status": 401,
  "message": "Incorrect password, please try again!"
}
```

## Profile User

`[ENDPOINT] /v1/users/profile`

```url
[GET] http://localhost:3000/v1/users/profile
```

#### Request headers authorization

```text
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4MDk5MzF9.Kvlz2Wbd4NE5lNvF154twhjeKGix7rS7lmbhquAQo1c
```

#### Response body

```json
{
  "id": 3,
  "username": "Admin",
  "email": "admin@gmail.com",
  "password": "$2a$10$eFG.DPvL488JGbZ8eUW/5.xUvU1QhEeLHNd/pI/uV5j1axszS2zUu"
}
```

<br/><br/>

<p>Created by @AdhantoBgs </p>
