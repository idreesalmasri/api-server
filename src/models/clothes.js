'use strict'
//Create 2 SQL data models using the Sequelize libary, make sure you export those model instances.

//define used to make table an it takes in to parameters table name and colums of the table
//clothes is a function to create table with specific colums and it always takes 2 parametere  (sequelize, DataTypes)
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    clothesType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = clothes;