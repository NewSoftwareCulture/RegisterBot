import Telegraf from 'telegraf';

const { Markup } = Telegraf;

const inline = (bot, ctx) => {
  ctx.reply("Выберите действие.", Markup.inlineKeyboard([
    [Markup.callbackButton("🚨 Активные сигналы", "activeSign")],
    [Markup.callbackButton("🗓 Статистика", "stat")]
  ]).extra());
};

export default inline;