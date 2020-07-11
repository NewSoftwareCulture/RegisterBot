import Telegraf from 'telegraf';
import RandomResult from '../RandomResult';

const { Markup } = Telegraf;

const about = (bot) => {
    bot.action('DEUT_RandomResult', (ctx, next) => {
      return RandomResult(ctx)
    });
};

export default about;