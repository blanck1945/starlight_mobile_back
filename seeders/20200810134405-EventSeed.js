'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('events', [{
      event_name: "Taiwan Offline Event",
      event_header: "Taiwan Event",
      event_date: "05-10/2020",
      event_location: "Taisugar Hotel, Taipei Taiwan",
      event_type: "Live/Event",
      event_details: JSON.stringify([
        "Player Q&A time",
        "Vs. Revue time with the voice actresses",
        "Game time with the voice actresses"
      ]),
      event_color: "rgb(149, 115, 177)",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      event_name: "Revue Starlight movie delay",
      event_header: "Movie Information",
      event_date: "10/08/2020",
      event_location: "Bushiroad Youtube Channel",
      event_type: "Media",
      event_details: JSON.stringify([
        "Movie Delay",
        "Corona Virus affecting studio work",
        "Trailer will be release in the next month"
      ]),
      event_color: "rgb(255, 154, 75)",
      createdAt: new Date(),
      updatedAt: new Date()

    }])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
