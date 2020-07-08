import { AsyncRouter } from 'express-async-router';
import { User } from '../models';
import { Logger } from '../utils';

const router = AsyncRouter();

router.post('/step', async(req, res) => {
    Logger.POST('/step');
    const { deeplink, email } = req.body;
    const user = await User.findOne({name: name});
    if(!user) {
        const newUser = new User({
            name,
            email,
        });
        await newUser.save();
        return res.send('User created!');
    };
    await User.findOneAndUpdate({name: name}, {
        email: email,
    });
    return res.send('User update!');
});

router.get('/example/:name', async(req, res) => {
    const name = req.params.name;
    Logger.GET(`/example/${name}`);
    const user = await User.findOne({name: name});
    if(!user) return res.send('User not found!');
    return res.json(user);
});

module.exports = router;