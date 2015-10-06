'use strict';

module.exports = function(sequelize, DataTypes) {
  
    var SmallEntity = sequelize.define('SmallEntity', {
        name: DataTypes.STRING
    }, { 
		classMethods: {
  			associate: function (models) {
	        	models.SmallEntity.hasMany(models.Specialty, 
	        		{ through: 'SmallEntitySpecialties' });
			}
		}
	});
    return SmallEntity;
};