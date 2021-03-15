const {Type} = require('../models/models');
const ApiError = require('../error/apiError');


class TypeController {
    async createType(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAllTypes(req, res) {

    }
}

module.exports = new TypeController();