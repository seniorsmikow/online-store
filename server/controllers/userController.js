const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models');
require('dotenv').config();
const generateGWT = require('./helpers');

class UserController {
    async registration(req, res, next) {
        const {email, password, role, name} = req.body;

        if(!email || !password || !name) {
            return next(ApiError.badRequest("Отсутствуют данные для регистрации"));
        }

        const candidate = await User.findOne({where: {email}}); // проверяем, возможно под этим email уже кто-то зарегестрировался
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"));
        }

        const hashPassword = await bcrypt.hash(password, 5); // 5 кол-во кэширований пароля

        const user = await User.create({email, role, password: hashPassword, name});
        const basket = await Basket.create({userId: user.id});
        const token = generateGWT(user.id, user.email, user.role, user.name);

        return res.json({token});
    }

    async login(req, res, next) {

        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});

        if(!user) {
            return next(ApiError.internal("Пользователь не найден"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password); // сравниваем введённый пароль и пароль в базе данных

        if(!comparePassword) {
            return next(ApiError.internal("Неверный пароль"));
        }

        const token = generateGWT(user.id, user.email, user.role, user.name);
        return res.json({token});
    }

    async isLoginCheck(req, res, next) {
        
        const token = generateGWT(req.user.id, req.user.email, req.user.role, req.user.name);
        return res.json({token});
    }

}

module.exports = new UserController();