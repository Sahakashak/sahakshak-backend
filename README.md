# sahakshak-backend

This is the backend of our project sahakshak

## API Documentation

| Endpoint                 | Method | Description                                     | Request Body |
| ------------------------ | ------ | ----------------------------------------------- | ------------ |
| `/`                      | GET    | Dummy route to check if the API is working      | N/A          |
| `/api/cases`             | GET    | Retrieve all cases stored in the system         | N/A          |
| `/api/cases/:id`         | GET    | Retrieve a single case by its unique identifier | N/A          |
| `/api/cases`             | POST   | Create a new case                               | See below    |
| `/api/cases/phone/:phno` | GET    | Retrieve cases by phone number                  | N/A          |
| `/api/cases/:id`         | DELETE | Delete a case by its unique identifier          | N/A          |
| `/api/cases/:id`         | PUT    | Update all case data by its unique identifier   | See below    |

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

## Criminal Routes

| Endpoint             | Method | Description                                 | Request Body |
| -------------------- | ------ | ------------------------------------------- | ------------ |
| `/api/criminals`     | POST   | Create a new criminal record                | See below    |
| `/api/criminals`     | GET    | Retrieve all criminals stored in the system | N/A          |
| `/api/criminals/:id` | GET    | Retrieve a single criminal by ID            | N/A          |
| `/api/criminals/:id` | PUT    | Update a criminal by ID                     | See below    |
| `/api/criminals/:id` | DELETE | Delete a criminal by ID                     | N/A          |

### Request Body for Creating a Criminal

```json
{
  "name": "String",
  "gender": "String (Male/Female/Other)",
  "age": "Number",
  "address": "String",
  "crime": "String",
  "status": "String (Wanted/Arrested/Released)"
}
```
