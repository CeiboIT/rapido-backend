'use strict';

module.exports = function (sequelize, DataTypes) {
	
	var Specialty = sequelize.define('Specialty', {
			name: DataTypes.STRING
		}, 
		{
			classMethods: {
      			associate: function (models) {
		        	Specialty.hasMany(models.SmallEntity, { through: 'SmallEntitySpecialties' });
    			}
    		}
		});

	return Specialty;
};