'use strict'
module.exports = (sequelize, DataTypes) => {
  const UsersFriends = sequelize.define(
    'UsersFriends',
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
    UsersFriends.belongsTo(models.Users, {
      as: 'user_1',
      foreignKey: 'user_id1',
      targetKey: 'id',
    })
    models.Users.hasMany(UsersFriends, {
      as: 'user_1',
      foreignKey: 'user_id1',
      sourceKey: 'id',
    })
    UsersFriends.belongsTo(models.Users, {
      as: 'user_2',
      foreignKey: 'user_id2',
      targetKey: 'id',
    })
    models.Users.hasMany(UsersFriends, {
      as: 'user_2',
      foreignKey: 'user_id2',
      sourceKey: 'id',
    })
  }
  return UsersFriends
}
