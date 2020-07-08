import Telegraf from 'telegraf';
import RegistrationStatus from '../RegistrationStatus';

const { Markup } = Telegraf;

const about = (bot) => {
    bot.action('Registration_Status', (ctx, next) => {
      return RegistrationStatus(ctx);
    });
};

export default about;