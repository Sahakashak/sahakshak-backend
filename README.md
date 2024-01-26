# sahakshak-backend

This is the backend of our project sahakshak

# Routes

## Routes

### Create Case

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
