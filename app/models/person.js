'use strict';

module.exports = function(sequelize, DataTypes) {
  
    var Person = sequelize.define('Person', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        phone: DataTypes.STRING,
    });
    
    return Person;
};