import Telegraf from 'telegraf';
import disclaimer from '../disclaimer';

const { Markup } = Telegraf;

const disc = (bot) => {
    bot.command('Disclaimer', (ctx, next) => {
      return disclaimer(ctx);
    });
};

export default disc;