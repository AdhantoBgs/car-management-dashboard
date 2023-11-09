# Challenge 05

## ERD

![ERD] (https://dbdiagram.io/d/Challenge5-654bc7c07d8bbd6465c7ea0a)

# GET

# 1. Mendapatkan Semua Data

Endpoint URL:
http://localhost:3000/

## Response

```json
"status": 200,
"data": [
    {
        "id": 1,
        "name": "Fortuner",
        "type": "SUV",
        "year": 2020,
        "size": "large",
        "price": 900000,
        "image_url": "/uploads/image_url-1699551654531-679362307.png"
    },
    {
        "id": 2,
        "name": "Pajero",
        "type": "MPV",
        "year": 2022,
        "size": "large",
        "price": 1000000,
        "image_url": "/uploads/image_url-1699551788115-354251743.png"
    }
]
```

# 2. Mendapatkan Data Berdasarkan ID

Endpoint URL:
http://localhost:3000/:id

## Response

```json
"status": 200,
"data": [
    {
        "id": 1,
        "name": "Fortuner",
        "type": "SUV",
        "year": 2020,
        "size": "large",
        "price": 900000,
        "image_url": "/uploads/image_url-1699551654531-679362307.png"
    }
]
```

# POST

# Menambahkan Data

Endpoint URL:
http://localhost:3000/create

## Request

```json
{
  "name": "Fortuner",
  "type": "SUV",
  "year": 2020,
  "size": "large",
  "price": 900000,
  "image_url": "car_image.png"
}
```

## Response

```json
"status": 201,
"data": [
    {
        "id": 1,
        "name": "Fortuner",
        "type": "SUV",
        "year": 2020,
        "size": "large",
        "price": 900000,
        "image_url": "/uploads/image_url-1699551654531-679362307.png"
    }
]
```

# PUT

# Mengubah Data

Endpoint URL:
http://localhost:3000/update/:id

## Request

```json
{
  "name": "Fortuner",
  "type": "SUV",
  "year": 2020,
  "size": "large",
  "price": 900000,
  "image_url": "car_image.png"
}
```

## Response

```json
"status": 201,
"data": [
    {
        "id": 1,
        "name": "Fortuner",
        "type": "SUV",
        "year": 2020,
        "size": "large",
        "price": 900000,
        "image_url": "/uploads/image_url-1699551654531-679362307.png"
    }
]
```

# DELETE

# Menghapus Data

Endpoint URL:
http://localhost:3000/delete/:id

## Response

```json
"status": 201,
"message": "Successfully delete car data"
```

## URL

1. http://localhost:3000/
2. http://localhost:3000/2
3. http://localhost:3000/create
4. http://localhost:3000/update/:id
5. http://localhost:3000/delete/2
