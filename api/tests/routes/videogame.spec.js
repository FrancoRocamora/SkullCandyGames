/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);

describe('Tests for /videogames route', () => {
    it('Should response with status 200', async () => {
        const response = await agent.get('/videogames')
        expect(response.statusCode).toEqual(200)
    })
    it('Should response with status 400', async() => {
      const response = await agent.get('/test_route')
      expect(response.statusCode).toEqual(404)
    })
    it('should response with status 200', async() => {
      const response = await agent.get('/videogames/3498')
      expect(response.statusCode).toEqual(200)
    })
    it('should response with one game', async() => {
      const response = await agent.get('/videogames/3498')
      expect(response._body.name).toEqual('Grand Theft Auto V')
      expect(typeof response).toBe('object')
    })
    it('Should get a game by name', async() => {
      const response = await agent.get('/videogames/game?name=grand theft auto')
      expect(response.text).toContain('Grand Theft Auto')
    })
    it('Should respond with status 200', async() => {
      const response = await agent.get('/videogames/game?name=mario')
      expect(response.statusCode).toEqual(200)
    })
})


describe('Tests for /Genres', () => {
  it('Should respond with status 200', async () => {
    const response = await agent.get('/Genres')
    expect(response.statusCode).toEqual(200)
  })
  it('Should respond with status 400', async () => {
    const response = await agent.get('/Genress')
    expect(response.statusCode).toEqual(404)
  })
})
