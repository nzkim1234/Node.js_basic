'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('posts', 'conetent', 'content');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
