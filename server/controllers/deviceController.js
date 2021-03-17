const uuid = require('uuid'); // генерирует рандомные неповторяющиеся ID 
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/apiError');

class DeviceController {
    async createDevice(req, res, next) {

        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName)); // перемещаем файл в папку static

            const device = await Device.create({name, price, brandId, typeId, img: fileName}); // rating не передаём, по умолчанию 0

            // при отправке запроса тип form-data! т.к. нужно прикрепить img

            return res.json(device);
        } catch(e) {

            next(ApiError.badRequest(e.message));
        }

        
    } 

    async getAllDevices(req, res) {
        
    }

    async getOneDevice(req, res) {
        
    }
}

module.exports = new DeviceController();