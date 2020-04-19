const express = require('express');
const expressGraphQL= require('express-graphql');
const {EmployeeQueryType} = require('./schema/query');
const {
    GraphQLSchema
} = require('graphql');
const appGraph = express();


const schemaEmployee = new GraphQLSchema({
    query: EmployeeQueryType
});

appGraph.use('/graphql', expressGraphQL({
    schema: schemaEmployee,
    graphiql: true
}));
console.log("https://localhost:5000");
appGraph.listen(5000.,() => "test");
