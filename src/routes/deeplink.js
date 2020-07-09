import { AsyncRouter } from 'express-async-router';
import DB from '../DB';
import { Logger } from '../utils';

const router = AsyncRouter();
const { saveOrUpd } = DB;

router.post('/step', async(req, res) => {
    Logger.POST('/step');
    const { deeplink, stepStatus } = req.body;
    await saveOrUpd({ deeplink: deeplink, stepStatus: stepStatus});
    // ctx.reply('New status', stepStatus);
    return res.send('Status update!');
});

export default router;