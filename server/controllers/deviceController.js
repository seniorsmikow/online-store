const uuid = require('uuid'); // генерирует рандомные неповторяющиеся ID 
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/apiError');

class DeviceController {
    async createDevice(req, res, next) {

        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName)); // перемещаем файл в папку static

            const device = await Device.create({name, price, brandId, typeId, img: fileName}); // rating не передаём, по умолчанию 0

            if(info) {
                info = JSON.parse(info);
                info.forEach(i => 
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: device.id
                        })
                    );
            }

            // при отправке запроса тип form-data! т.к. нужно прикрепить img

            return res.json(device);

        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    } 

    async getAllDevices(req, res) {

        let {brandId, typeId, limit, page} = req.query; // limit & page для пагинации 
        page = page || 1;
        limit = limit || 8;
        let offset = page * limit - limit;

        let devices;

        if(!brandId && !typeId) {
            //devices = await Device.findAll({limit, offset}); 
            // для работы на Front части приложения лучше использовать функцию findAndCountAll. Она создана специально для пагинации
            devices = await Device.findAndCountAll({limit, offset});
        }

        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }

        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }

        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }

        return res.json(devices);
    }

    async getOneDevice(req, res) {

        const {id} = req.params; // параметр указывали в router
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        });

        return res.json(device);
    }
}

module.exports = new DeviceController();