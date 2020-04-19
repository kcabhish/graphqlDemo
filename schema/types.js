const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} = require('graphql');

const { employeeRoles, roles } = require('./staticData')

/**
 * Creating Employee Type 
 */
exports.EmployeesType = new GraphQLObjectType({
    name: 'Employees',
    description: "This represents types for all the employees",
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {
            type: GraphQLString,
            // here the parent will reference the object above which is Employees
            resolve: (parent) => parent.firstName + " " +parent.lastName
        },
        title: {
            type: GraphQLNonNull(GraphQLString)
        },
        /**
         * @TODO need to find a better way to join schemas. I do not think this should be done in the
         * type defination
         */
        roleList: {
            type: new GraphQLList(RoleTypes),
            resolve: (parent) => {
                let empRoles = employeeRoles.filter(employeeRole => employeeRole.empId === parent.id);
                return empRoles.map(empRole => {
                    return roles.find(role => role.id === empRole.roleId)
                })
            }
        }
    })
});

const RoleTypes = new GraphQLObjectType({
    name: 'Role',
    description: 'This represents types for all the Roles',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        title: {
            type: GraphQLNonNull(GraphQLString),
            resolve: (parent) => parent.role
        },
        active: {
            type: GraphQLNonNull(GraphQLBoolean)
        }
    })
});

const EmployeeRoleTypes = new GraphQLObjectType({
    name: 'EmployeeRole',
    description: 'This represents types for all the Employee Roles',
    fields: () => ({
        empId: {
            type: GraphQLNonNull(GraphQLInt)
        },
        roleId: {
            type: GraphQLNonNull(GraphQLInt)
        }
    })
});

exports.EmployeeRoleTypes = EmployeeRoleTypes;
exports.RoleTypes = RoleTypes;