import Telegraf from 'telegraf';
import ContactOrHelp from '../ContactOrHelp';

const { Markup } = Telegraf;

const contact = (bot) => {
    bot.action('Contact_or_Help', (ctx, next) => {
      return ContactOrHelp(ctx);
    });
};

export default contact;