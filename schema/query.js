/**
 * This file contains the graph ql query types defination
 */
const {
    GraphQLObjectType,
    GraphQLList
} = require('graphql');
const { EmployeesType, RoleTypes,EmployeeRoleTypes } = require('./types');
const { employees, roles, employeeRoles } = require('./staticData');

/**
 * This is the base query type, this will be resolving all the graphql queries
 */
exports.EmployeeQueryType = new GraphQLObjectType({
    name: 'Query',
    description: "Query type for all Employee",
    fields:() => ({
        employees: {
            type: new GraphQLList(EmployeesType),
            description: "List of Employees",
            resolve: () => employees
        },
        roles: {
            type: new GraphQLList(RoleTypes),
            resolve: () => roles
        },
        employeeRoles: {
            type: new GraphQLList(EmployeeRoleTypes),
            resolve: () => employeeRoles
        }
    })
});
