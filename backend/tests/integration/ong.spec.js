const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('Should be abble to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        "name": "qualquer uma",
        "email": "ficticio@fa.com",
        "whatsapp": "86986158615",
        "city": "Timon City",
        "uf": "MA"
      })
    
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(16)
  })
})