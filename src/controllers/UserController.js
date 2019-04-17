const User = require('../models/User');

const list = async(req, res) => {
    const users = await User.find();
    return res.json(users);
};

const show = async(req, res) => {
    const user = await User.findById(req.params.id);
    return res.json(user);
};

const insert = async(req, res) => {
    const user = await User.create(req.body);
    return res.json(user);
};

const remove = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json('User removed');
};

const update = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    return res.json(user);
};

module.exports = {
    list,
    insert,
    show,
    remove,
    update
};