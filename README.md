# Challenge 05

## ERD

https://dbdiagram.io/d/Challenge5-654bc7c07d8bbd6465c7ea0a

# GET

# 1. Mendapatkan Semua Data

Endpoint URL:
http://localhost:3000/

## Response

```json
"status": 200,
"data": [
    {
        "id": "3564387767947264",
        "name": "Rush",
        "type": "SUV",
        "year": 2019,
        "size": "medium",
        "price": 500000,
        "image_url": "/uploads/image_url-1699632598704-154844057.png"
    },
    {
        "id": "3564387767947264",
        "name": "Velloz",
        "type": "MPV",
        "year": 2019,
        "size": "large",
        "price": 750000,
        "image_url": "/uploads/image_url-1699633015598-75406729.png"
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
        "id": "3564387767947264",
        "name": "Rush",
        "type": "SUV",
        "year": 2019,
        "size": "medium",
        "price": 500000,
        "image_url": "/uploads/image_url-1699632598704-154844057.png"
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
  "name": "Hyundai",
  "type": "SUV",
  "year": 2023,
  "size": "small",
  "price": 4250000,
  "image_url": "car_image.png"
}
```

## Response

```json
"status": 201,
"data": [
    {
        "id": "3564387767947264",
        "name": "Hyundai",
        "type": "SUV",
        "year": 2023,
        "size": "small",
        "price": 425000,
        "image_url": "/uploads/image_url-1699633068523-965657580.png"
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
  "name": "Pajero",
  "type": "MPV",
  "year": 2022,
  "size": "large",
  "price": 1000000,
  "image_url": "car_image.png"
}
```

## Response

```json
"status": 201,
"data": [
    {
        "id": "3564386847297536",
        "name": "Pajero",
        "type": "MPV",
        "year": 2022,
        "size": "large",
        "price": 1000000,
        "image_url": "/uploads/image_url-1699633212233-759197651.png"
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
2. http://localhost:3000/3564386847297536
3. http://localhost:3000/create
4. http://localhost:3000/update/3564386847297536
5. http://localhost:3000/delete/3564386847297536
