import Telegraf from 'telegraf';
import menu from './keyboard/index';
import config from '../config';

const bot = new Telegraf(config.TOKEN || process.env.BOT_TOKEN);

const { keyboard, hears } = menu;

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('hipster', Telegraf.reply('λ'))

keyboard(bot);
hears(bot);

bot.launch(console.log('\nMagic bot has started!\n'));