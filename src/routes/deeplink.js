import { AsyncRouter } from 'express-async-router';
import Telegraf from 'telegraf';
import DB from '../DB';
import { Logger } from '../utils';
import config from '../../config';

const router = AsyncRouter();
const { saveOrUpd, find } = DB;
const { second, third } = config.CONSTS.push;
const bot = new Telegraf(process.env.BOT_TOKEN || config.TOKEN);

router.post('/step', async(req, res) => {
    Logger.POST('/step');
    const { deeplink, stepStatus } = req.body;
    await saveOrUpd({ deeplink: deeplink, stepStatus: stepStatus});

    const { userId } = await find({ deeplink: deeplink });

    if (stepStatus !== 'reg' || !deeplink) return res.send();
    bot.telegram.sendMessage(userId, second);
    
    setTimeout(async() => {
        const { stepStatus } = await find({ deeplink: deeplink });
        if (stepStatus !== 'final') bot.telegram.sendMessage(userId, third);
    }, 1000 * 60 * 60);
    return res.send();
});

export default router;