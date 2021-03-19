const jwt = require('jsonwebtoken');

const generateGWT = (id, email, role) => {

    return jwt.sign(
        {id, email, role},
        'some_string', // TODO Change secret key !
        {expiresIn: "24h"}
    );

};

module.exports = generateGWT;