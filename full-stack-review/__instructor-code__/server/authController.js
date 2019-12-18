const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;

        let user = await db.user.check_customer(email);
        user = user[0];
        if(user){
            return res.status(400).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register_customer(email, hash)
        newUser = newUser[0];
        //delete newUser.password
        let userCart = await db.orders.create_order(newUser.customer_id)
        userCart = userCart[0];
        let sessionUser = {...newUser, ...userCart};
        session.user = sessionUser;
        res.status(201).send(session.user);
    },
    login: async(req, res) => {
        
    },
    logout: (req, res) => {

    }
};