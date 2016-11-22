'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        var flag = true;
        flag = flag && queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(256),
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });

        flag = flag && queryInterface.addIndex(
            'user',
            ['username'],
            {
                indexName: 'username_uniq',
                indicesType: 'UNIQUE'
            }
        );

        flag = flag && queryInterface.addIndex(
            'user',
            ['email'],
            {
                indexName: 'email_uniq',
                indicesType: 'UNIQUE'
            }
        );
        return flag;
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('user');
    }
};
