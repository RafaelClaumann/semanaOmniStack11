const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENTS', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();  // reset tables on DB
        await connection.migrate.latest();  // create tables on DB

        this.ong_id = await connection('ongs').insert(
            {
                id: '11111111',
                name: 'dummyONG',
                email: 'dummyONG@email.com.br',
                whatsapp: "48900000000",
                city: "Florianópolis",
                uf: "SC"
            }).returning('id');
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create an incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set('Authorization', `${this.ong_id}`)
            .send({
                title: 'dummyIncident',
                description: 'dummyIncident description',
                value: 50,
                ong_id: `${this.ong_id}`
            });
        expect(200);
        expect(response.body).toBe(1);  // https://jestjs.io/docs/en/expect#tobevalue

    });

    it('Should be able to delete an incident', async () => {
        await request(app)
            .delete(`/incidents/${1}`)
            .set('Authorization', `${this.ong_id}`)
            .send();
        expect(204);
        expect(await connection('incidents')
            .select('*')
            .where('ong_id', `${this.ong_id}`))
            .toEqual([]);  // https://jestjs.io/docs/en/expect#toequalvalue
    });
});
