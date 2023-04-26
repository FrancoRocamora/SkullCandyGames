const session = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn, Genre } = require('../../src/db.js');
const agent = session(app);




 describe('Create Game', () => {
  beforeEach(() => Videogame.sync({force:true}))
    it('Should create a new game in DB', async () => {
      const newGame = await Videogame.create(
        {name : "Jest",
        description: "Lorem Ipsum",
        background_image: "image",
        rating: 0,
        developer: "JestTester",
        platforms: ["PC", "Xbox"],
        playtime: 232,
        released: "12-12-2020",
        tags: ["multiplayer", "MMO"]}
      )
        expect(newGame.name).toEqual('Jest')
        expect(newGame.description).toEqual('Lorem Ipsum')
        expect(newGame.developer).toEqual('JestTester')
    })
    it('Should throw error for null name', async () => {
      await Videogame.create(
        {name : null,
        description: "Lorem Ipsum",
        background_image: "image",
        rating: 0,
        developer: "JestTester",
        platforms: ["PC", "Xbox"],
        playtime: 232,
        released: "12-12-2020",
        tags: ["multiplayer", "MMO"]}
      ).catch(error => {
        expect(error.message).toBe('notNull Violation: videogame.name cannot be null')
      })
    })
    it('Should not allow two games with same name', async () => {
      const newGame =  await Videogame.create(
        {name : 'Jest',
        description: "Lorem Ipsum",
        background_image: "image",
        rating: 0,
        developer: "JestTester",
        platforms: ["PC", "Xbox"],
        playtime: 232,
        released: "12-12-2020",
        tags: ["multiplayer", "MMO"]})
        await Videogame.create(
          {name : 'Jest',
          description: "Lorem Ipsum2",
          background_image: "image2",
          rating: 0,
          developer: "JestTester2",
          platforms: ["PC", "PlayStation"],
          playtime: 232,
          released: "12-12-2020",
          tags: ["SinglePlayer", "Rol"]})
          .catch((error) => {

            expect(error.message).toEqual('llave duplicada viola restricción de unicidad «videogames_name_key»')
          })
    })
  })


  