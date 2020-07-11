import Telegraf from 'telegraf';
import DB from '../DB';
import main from './index';
import config from '../../config';

const { Markup } = Telegraf;
const { find, saveOrUpd } = DB;
const { first } = config.CONSTS.push; 
const { text } = config.CONSTS.chooseLang;

const lang = (bot) => {
  bot.start(async (ctx) => {
    const deeplink = ctx.startPayload;
    const userId = ctx.from.id;
    if (!await find({ userId: userId })) {
      await saveOrUpd({ deeplink: deeplink, userId: userId});
      setTimeout(async () => {
        const user = await find({userId: userId});
        if (!user.stepStatus) ctx.reply(first);
      }, 1000 * 60);
    }
    ctx.replyWithHTML(text, Markup.inlineKeyboard([
      [Markup.callbackButton("English", "English_lang")],
      [Markup.callbackButton("Deutsch", "Deutsch_lang")],
    ]).extra());

    bot.action('English_lang', (ctx, next) => {
      return main.main_eng(this, ctx);
    });
    bot.action('Deutsch_lang', (ctx, next) => {
      return main.main_deut(this, ctx);
    });
  });
};

export default lang;