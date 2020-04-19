// This file will be used for mocking the data base response
exports.employees = [{
    id: 1,
    firstName: 'Abhishek',
    lastName: 'KC',
    email: 'kcabhish@gmail.com',
    title: 'Developer Supreme',
    phone: '217-345-2975',
    year: '2017',
    active: true
},{
    id: 2,
    firstName: 'Clark',
    lastName: 'Kent',
    email: 'kent.Clark@dailyplanet.com',
    title: 'superman',
    phone: '217-325-7627',
    year: '1975',
    active: true
},{
    id: 3,
    firstName: 'Barry',
    lastName: 'Allen',
    email: 'ballen@centralcity.com',
    title: 'Flash',
    phone: '298-098-1234',
    year: '1983',
    active: true
}
];

/**
 * Role Data
 */
exports.roles = [{
    id: 1,
    role: 'Tech Lead',
    active: true
},{
    id: 2,
    role: 'Consultant',
    active: true
}];

/**
 * Employee Role Data
 */
exports.employeeRoles = [{
    empId: 1,
    roleId: 1
},{
    empId: 2,
    roleId: 1
},{
    empId: 2,
    roleId: 2
},
{
    empId: 3,
    roleId: 2
}];