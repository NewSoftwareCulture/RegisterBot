import { AsyncRouter } from 'express-async-router';
import { User } from '../models';
import { Logger } from '../utils';

const router = AsyncRouter();

router.post('/step', async(req, res) => {
    Logger.POST('/step');
    const { deeplink, stepStatus } = req.body;
    const user = await User.findOne({deeplink: deeplink});
    if(!user) {
        const newUser = new User({
            deeplink,
            stepStatus: stepStatus,
        });
        await newUser.save();
        return res.send('Status created!');
    };
    await User.findOneAndUpdate({deeplink: deeplink}, {
        stepStatus: stepStatus,
    });
    return res.send('Status update!');
});

// router.get('/example/:name', async(req, res) => {
//     const name = req.params.name;
//     Logger.GET(`/example/${name}`);
//     const user = await User.findOne({name: name});
//     if(!user) return res.send('User not found!');
//     return res.json(user);
// });

export default router;