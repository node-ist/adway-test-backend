##Install project
Copy configure env:

`cp .env.example .env`

Install dependencies:

`npm i`

Seed database:

`npm run db:seed`

Run dev server:

`npm run dev`

##API

###Validation

If request body is incorrect, route return 422 Unprocessable Entity response.

###Routes

All routes should be placed in `./api/`

**`GET /jobs` Jobs list**

    {
        "data": [
            {
                "_id": "5c781a426dfb07397f625df3",
                "title": "Front-End Developer - Comviq Join squad",
                "description": "As a Front-End developer within the Comviq Join squad you will be responsive for building great customer experiences. The squad support new customers",
                "address": "Sweden",
                "schedule": "Full-time",
                "benefits": [
                    "We invest in our people",
                    "Next gen telecom company",
                    "State of the art IT stack"
                ]
            }
        ]
    }
    
**`POST /users/profile` Create user profile**

    {
        "data": {
            "_id": "5c781ef83e7c3d3b2c85c6bf",
            "firstName": "aa",
            "lastName": "bb",
            "email": "some@mail.com",
            "phone": "111111111"
        }
    }
