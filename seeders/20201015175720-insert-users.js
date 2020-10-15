'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Ankit',
          last_name: 'Seth',
          avatar:
            'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Rishabh',
          last_name: 'Sovani',
          avatar:
            'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: 'Chandni',
          last_name: 'Garg',
          avatar:
            'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
