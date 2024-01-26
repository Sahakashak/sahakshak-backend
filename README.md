# sahakshak-backend

This is the backend of our project sahakshak

# Routes

## Routes

### Create Case

```javascript
// Method: POST
// Endpoint: /api/cases
// Description: Create a new case with the provided details
// Request Body:
{
"title": "String",
"description": "String",
"name": "String",
"gender": "String (Male/Female/Other)",
"age": "Number",
"location": "String",
"address": "String",
"pinCode": "String",
"phoneNumber": "String",
"email": "String",
"timeOfCrime": "Date",
"suspect": "String"
}
```

### View All Case

```javascript
// Method: GET
// Endpoint: /api/cases
// Description: You can view all the posts
```

### View One Single Case

```javascript
// Method: GET
// Endpoint: /api/cases/id
// Description: You can view any case with their id
```

## API Documentation

| Endpoint         | Method | Description                                      | Request Body |
| ---------------- | ------ | ------------------------------------------------ | ------------ |
| `/api/cases`     | GET    | Retrieve all cases stored in the system          | N/A          |
| `/api/cases/:id` | GET    | Retrieve a single case by its unique identifier  | N/A          |
| `/api/cases`     | POST   | Create a new case                                | See below    |
| `/api/cases/:id` | PUT    | Update an existing case by its unique identifier | See below    |
| `/api/cases/:id` | DELETE | Delete an existing case by its unique identifier | N/A          |

### Request Body for Creating a Case

```json
{
  "title": "String",
  "description": "String",
  "name": "String",
  "gender": "String (Male/Female/Other)",
  "age": "Number",
  "location": "String",
  "address": "String",
  "pinCode": "String",
  "phoneNumber": "String",
  "email": "String",
  "timeOfCrime": "Date",
  "suspect": "String"
}
```
