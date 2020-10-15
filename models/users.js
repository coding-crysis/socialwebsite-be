'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: 'users',
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
  Users.associate = function (models) {
    // associations can be defined here
  }
  return Users
}
