import Telegraf from 'telegraf';
import inline_menu from '../inline-menu/index';

const { inline } = inline_menu;

const hears = (bot) => {
  bot.hears('🚨 Сигналы', (ctx) => {
    inline(bot, ctx);
    console.log('🚨 Сигналы', ctx.from.username);
    // ctx.reply('1');
  });

  bot.hears('🎫 Подписка', (ctx) => {
    // updateCount(ctx.from.id, '-');
    // countLog(ctx);
    console.log('🎫 Подписка', ctx.from.username);
    ctx.reply('2');
  });

  bot.hears('🎣 Рефералл', (ctx) => {
    // updateCount(ctx.from.id, '-');
    // countLog(ctx);
    console.log('🎣 Рефералл', ctx.from.username);
    ctx.reply('3');
  });

  bot.hears('⚙️ Настройки', (ctx) => {
    // updateCount(ctx.from.id, '-');
    // countLog(ctx);
    console.log('⚙️  Настройки', ctx.from.username);
    ctx.reply('4');
  });

  bot.hears('📈 Торговля', (ctx) => {
    // updateCount(ctx.from.id, '-');
    // countLog(ctx);
    console.log('📈 Торговля', ctx.from.username);
    ctx.reply('5');
  });
};

export default hears;