import Telegraf from 'telegraf';
import DB from '../DB';
import main from './index';

const { Markup } = Telegraf;
const { find, saveOrUpd } = DB;
 
const textFirstPush = `Hello dude!!!!!! hEllOoOoOoO`;

const lang = (bot) => {
  bot.start(async (ctx) => {
    const deeplink = ctx.startPayload;
    const userId = ctx.from.id;
    await saveOrUpd({ deeplink: deeplink, userId: userId});
    
    setTimeout(async () => {
      const user = await find({deeplink: deeplink});
      if (!user.stepStatus) ctx.reply(textFirstPush);
    }, 1000 * 60);
    
    // Убрать консольлог перед продой!
    console.log('Пользователь:', ctx.from.id, ctx.from.first_name, ctx.from.last_name, ctx.from.username);
    ctx.reply("📈 Registration - Trading Group 📉\n\nPlease choose your language:", Markup.inlineKeyboard([
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