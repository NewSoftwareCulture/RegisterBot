import Telegraf from 'telegraf';
import RandomResult from '../RandomResult';

const { Markup } = Telegraf;

const about = (bot) => {
    bot.action('RandomResult', (ctx, next) => {
      return RandomResult(ctx)
    });
};

export default about;