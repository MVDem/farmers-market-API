# Backend Server for Market

## Description

This project aims to create a backend server for managing users, farmers, and market deals in an agriculture market application. The server is built using various technologies for efficient development and scalability.

## Technologies Used

- **Framework:** Nest.js with TypeScript
- **Database:** PostgreSQL with Sequelize
- **Authentication:** JWT token, Google Passport
- **Documentation:** Swagger
- **Testing:** Jest

## Endpoints

### User

- **SignIn**
  - Request: `{login: string, password: string}`
  - Response: `{token: string}`
- **SignUp**
  - Request: `{login: string, password: string, role: string}`
    - If `role` is 'FARMER', a new Farmer is created using farmer’s method
  - Response: `{token: string}`
- **getAll**
  - Response: Array of User objects
- **Delete**
  - Request Header: Bearer token
  - Request Body: `{id: string}`
  - Deletes user information and dependencies
  - Response: Deleted user object

### Farmer

- **GetOne**
  - Request Header: Bearer token
  - Request Body: `{id: string}`
  - Response: Farmer object
- **Update**
  - Request Header: Bearer token
  - Request Body: `{name?: string, description?: string, city?: string, address?: string, email?: string, phone?: number, coordinateLat?: number, coordinateLong?: number}`
  - Response: Updated user object

### Market

- **Add a deal to the market**
  - Request Header: Bearer token
  - Request Body: `{farmerId: string, productId: string, unit: string, price: number, photo?: File, description_EN?: string, description_HE?: string}`
  - Response: Deal object
- **Update a deal on the market**
  - Request Header: Bearer token
  - Request Body: `{id: string, unit?: string, price?: number, photo?: File, description_EN?: string, description_HE?: string}`
  - Response: Updated deal object
- **Delete a deal from the market**
  - Request Header: Bearer token
  - Request Body: `{id: string}`
  - Response: Deleted deal object
- **get all offers**
  - Response: Array of offer objects
- **get one offer by id**
  - Request Body: `{id: string}`
  - Response: Deal object

## Additional Features

- \*get a page out of the offer list
- \*get a sorted list of the offers

(\* denotes features to be implemented)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
