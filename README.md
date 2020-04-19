This is just a simple demo project for graphQL.

Project Description:
The initial data do not connect with any database. This is build under the assumption that we are modifying an exsting restAPI and adding GraphQl
client layer on top of it with client resolver. As for now the data i mocked in staticData.js file as json objects.

INITIAL GOAL:
- create all the necesssary schemas on the GraphQL client and have all the necessary join function resolved on the client.
- replace the static json file to read/write for persisting the data using node fs.
- add mutation query for the GraphQL

MID GOAL:
- create an app that will utilize the graphql functionality with CRUD operation. 

Steps to launch:
1. Clone the repo.
2. run "npm i" from the root of the project.
3. run "npm run graphqlserver
4. You can access the available queries on https://localhost:5000/graphql
