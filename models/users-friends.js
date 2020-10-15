'use strict'
module.exports = (sequelize, DataTypes) => {
  const UsersFriends = sequelize.define(
    'users-friends',
    {
      user_id1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
      },
      user_id2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'users-friends',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      defaultScope: {
        where: {
          isDeleted: false,
        },
      },
    }
  )
  UsersFriends.associate = function (models) {
    // associations can be defined here
  }
  return UsersFriends
}
