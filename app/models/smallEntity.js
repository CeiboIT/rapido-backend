'use strict';

module.exports = function(sequelize, DataTypes) {
  
    var SmallEntity = sequelize.define('SmallEntity', {
        name: DataTypes.STRING
    });

    return SmallEntity;
};