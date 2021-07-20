const {Basket} = require('../models/models');
const ApiError = require('../error/apiError');

class BasketController {
    async createBasket(req, res) {
        const {name} = req.body;
        const basket = await Basket.create({name});
        return res.json(basket);
    }

    async getBasketDevices(req, res) {
        const basket = await Basket.findAll();
        return res.json(basket);
    }
}

module.exports = new BasketController();