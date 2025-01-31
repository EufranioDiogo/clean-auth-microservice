<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Node.js Authentication Microservice</h3>

  <!-- <p align="center">
   
    <br />
  </p> -->
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Endpoints](#end-points)

<!-- ABOUT THE PROJECT -->

## About The Project

A simple API built with Node.js that follows Clean Architecture + TDD + SOLID + DDD principles

### Built With

- [NodeJs](https://nodejs.org/)
- [Typescript](https://https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

to run the project you need to have npm installed on your machine and
the mongo DB

### Prerequisites

to get the npm https://www.npmjs.com/get-npm

### Installation

1. Clone the repo

```sh
git clone https://github.com/AdilsonFuxe/clean-auth-microservice.git
```

2. Server configuration

Enter into the server folder

```sh
    cd clean-auth-microservice
```

inside the server folder run the following command to install all dependencies

```sh
npm install
```

ou

```sh
yarn install
```

to generate the build of the project run

```sh
npm run build
```

ou

```sh
yarn build
```

to run the server

```sh
npm start
```

ou

```sh
yarn start
```

to run the unit tests and the integration tests

```sh
npm test
```

ou

```sh
yarn test
```

<br/>

## Endpoints

<br/>

**POST** `https:/localhost/api/v1/signup`

##### output example

```json
// POST https:/localhost/api/v1/signup

// Request Body
{
  "firstName": "any_name",
  "lastName": "any_name",
  "email": "anyemail@mail.com",
  "password": "any_password",
  "passwordConfirmation": "any_password"
}

// Response Body
{
  "accessToken": "any_access_token"
}
```

**POST** `https:/localhost/api/v1/signin`

##### output example

```json
// POST https:/localhost/api/v1/signin

// Request Body
{
  "email": "any_mail@mail.com",
  "password": "any_password"
}

// Response Body
{
  "accessToken": "any_access_token"
}
```

**GET** `https:/localhost/api/v1/me`

##### output example

#####

```json
// Get https:/localhost/api/v1/me
// HEADER x-access-token = any_jwt_token

// Response Body
{
  "id": "any_id",
  "firstName": "any_name",
  "lastName": "any_name",
  "email": "anyemail@mail.com"
}
```
