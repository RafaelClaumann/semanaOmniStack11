const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();  // reset tables on DB
        await connection.migrate.latest();  // create tables on DB
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG.', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'ongId')
            .send({
                name: 'APAD 10',
                email: 'apad10@email.com',
                whatsapp: '48000000000',
                city: 'Florianópolis',
                uf: 'sc'
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
});
