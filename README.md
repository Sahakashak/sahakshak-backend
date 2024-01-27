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

<!-- | `/api/cases/:id` | PUT    | Update an existing case by its unique identifier | See below    |
| `/api/cases/:id` | DELETE | Delete an existing case by its unique identifier | N/A          | -->

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
