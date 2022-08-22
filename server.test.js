const request = require('supertest')
const routes = require('./app')

describe('Test My routes',() => {
    test('should get main route', async () => {
        const res = await request(routes).get('/quotation')

        expect(res.statusCode).toEqual(200)
    })
})