const utils = require('../lib/utils');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        username: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            set: function(value) {
                this.setDataValue('password', utils.hash(value));
            }
        },
        email: DataTypes.STRING,
    }, {
            classMethods: {},
            freezeTableName: true
        });
};
