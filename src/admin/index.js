import Telegraf from 'telegraf';
import config from '../../config';

const adminId = config.ADMIN_ID;

const admin = (bot) => {
    bot.command('admin', (ctx, next) => {
      if (adminId === ctx.from.id) {
        console.log('Wellcome admin mode!');
        ctx.reply('Hello admin!');
      };
    });
};

export default admin;