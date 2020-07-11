import Telegraf from 'telegraf';
import About from '../About';

const { Markup } = Telegraf;
const { About_1, About_2, About_3 } = About;

const about = (bot) => {
    bot.action('DEUT_About_1', (ctx, next) => {
      return About_1(ctx)
    });
    bot.action('DEUT_About_2', (ctx, next) => {
      return About_2(ctx)
    });
    bot.action('DEUT_About_3', (ctx, next) => {
      return About_3(ctx)
    });
};

export default about;