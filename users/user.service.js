﻿// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'admin', password: 'Cheyenne7971', firstName: 'Ram Vinoth', lastName: 'Ponnarasu' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    console.log("username : " +username+"\npassword : "+ password);
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}