'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users-friends',
      [
        {
          user_id1: 1,
          user_id2: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id1: 2,
          user_id2: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users-friends', null, {})
  },
}
