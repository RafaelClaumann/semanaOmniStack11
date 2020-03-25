const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);  // lista de ongs
    },

    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');  // gerar ID unico p/ ong
        const { name, email, whatsapp, city, uf } = req.body;  // desestruturaçao
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return res.json({ id });  // retorna o id da ong
    }
};
