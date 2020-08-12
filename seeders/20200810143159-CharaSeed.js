'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("charas", [{
      chara_name: "Aijou Karen",
      chara_school: "Seisho Music Academy 99th Class",
      chara_student_id: 1,
      chara_voice: "Koyama Momoyo",
      chara_description: JSON.stringify([
        "An enthusiastic Stage Girl who was captivated by",
        "the revue 'Starlight' she saw as a young child.",
        "Although she's always in a good mood",
        "she's not so good at early morning lessons.",
        "She participates in mysterious revues with Hikari,",
        "whom she's been friends with since a young age."
      ]),
      chara_color: "#fb5458",
      chara_revue_img: "assets/karen_revue.png",
      chara_student_img: "assets/karen_uniform.png",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      chara_name: "Hikari Kagura",
      chara_school: "Seisho Music Academy 99th Class",
      chara_student_id: 29,
      chara_voice: "Mimori Suzuko",
      chara_description: JSON.stringify([
        "Friends with Karen since childhood,",
        "she studied abroad at an English performance school.",
        "She is a natural performer.",
        "She was moved by the revue 'Starlight', ",
        "which she saw as a child with Karen.",
        "Since meeting with Karen again, ",
        "she is driven by something to participate in the mysterious revues."
      ]),
      chara_color: "#6292e9",
      chara_revue_img: "assets/hikari_revue.png",
      chara_student_img: "assets/hikari_uniform.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      chara_name: "Mahiru Tsuyuzaki",
      chara_school: "Seisho Music Academy 99th Class",
      chara_student_id: 17,
      chara_voice: "Haruki Iwata",
      chara_description: JSON.stringify([
        "A Stage Girl who performs with great energy on the stage,",
        "but is somewhat withdrawn otherwise.",
        "Mahiru is roommates with Karen",
        "and admires her positivity and energy, ",
        "but ever since Karen's friend Hikari returned, she's felt torn..."
      ]),
      chara_color: "#61bf99",
      chara_revue_img: "assets/mahiru_revue.png",
      chara_student_img: "assets/mahiru_uniform.png",
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
