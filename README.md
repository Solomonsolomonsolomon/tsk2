# Person Api tsk-2

This README will guide you on how to set up and run the application locally for development and testing purposes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

- **Create (POST):** [Create Endpoint](https://hngtask2-zslw.onrender.com/api/) (HTTP POST)
- **Read all (GET):** [Read Endpoint](https://hngtask2-zslw.onrender.com/api) (HTTP GET)
- **Read all (GET):** [Read Endpoint](https://hngtask2-zslw.onrender.com/api/:id) (HTTP GET)
- **Update (PUT):** [Update Endpoint](https://hngtask2-zslw.onrender.com/api/:id) (HTTP PUT)
- **Delete (DELETE):** [Delete Endpoint](https://hngtask2-zslw.onrender.com/api/:id) (HTTP DELETE)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running locally or access to a MongoDB instance.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/solomonsolomonsolomon/tsk2.git
   ```

2. Navigate to project Directory

   ```bash

   cd tsk2

   ```

3. Navigate to project Directory

   ```bash

   cd tsk2

   ```

4. Install dependencies
   `npm install`

4 create a .env file

```bash
MONGO_URI=mongodb://localhost:27017/your-database
# Add other environment variables as needed

```

## Api-Documentation

```bash
npm run docs
```

or
`http://localhost:3000`

Tests found here

```bash
endpoint /test
```

**Endpoints**
/api -to perform CRUD operations
/health -for server health
/ - index route
/${unspecified} - triggers 404 route

## Liscence

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this software as permitted by the license.

---

"# tsk2"
