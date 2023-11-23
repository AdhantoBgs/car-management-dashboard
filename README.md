# Challenge 06

# Car Management API

# API Docs

# Users Endpoint

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
    "id": 3,
    "username": "",
    "email": "",
    "password": "",
    "role": ""
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
  "token": ""
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

```

#### Response body

```json
{
  "id": 3,
  "username": "",
  "email": "",
  "password": "",
  "role": ""
}
```

<br/><br/>

<p>Created by @AdhantoBgs </p>
