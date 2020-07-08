import Telegraf from 'telegraf';
import main from './index';

const { Markup } = Telegraf;

const lang = (bot) => {
  bot.start((ctx) => {
    console.log('Пользователь:', ctx.from.id, ctx.from.first_name, ctx.from.last_name, ctx.from.username);
    ctx.reply("📈 Registration - Trading Group 📉\n\nPlease choose your language:", Markup.inlineKeyboard([
      [Markup.callbackButton("English", "English_lang")],
      [Markup.callbackButton("Deutsch", "Deutsch_lang")],
    ]).extra());

    bot.action('English_lang', (ctx, next) => {
      return main.main_eng(this, ctx)
      // return ctx.reply('English lang active!').then(() => next())
    });
    bot.action('Deutsch_lang', (ctx, next) => {
      return ctx.reply('Deutsch lang active!').then(() => next())
    });
  });
};

export default lang;