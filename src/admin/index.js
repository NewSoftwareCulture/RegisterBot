import Telegraf from 'telegraf';
import Promise from "bluebird";
import join from 'lodash';
import config from '../../config';
import DB from '../DB';
const adminId = config.ADMIN_ID;

const { findAll } = DB;
const { Markup } = Telegraf;

const USERS_ON_PAGE = 2;

const getUsers = async(page) => {
  const users = await Promise.map(await findAll(page, USERS_ON_PAGE), async(item) => {
    return {
      deeplink: item.deeplink,
      stepStatus: item.stepStatus,
    }
  });
  return users;
}
const getPages = async() => {
  const users = await findAll();
  return Math.ceil(users.length / USERS_ON_PAGE);
}

const massToText = async(mass) => {
  let buffer = [];
  await Promise.each(mass, async(elem) => {
    buffer.push(`- Deeplink: "${elem.deeplink}" => Status: "${elem.stepStatus}"`);
  });
  return buffer.join('\n');
}

const Admin_first = async(ctx) =>  {
  const last = await getPages();
  const users = await getUsers(1);
  const text = await massToText(users);
  ctx.reply(`🤵 Page 1/${last}:\n\n` + text, Markup.inlineKeyboard([
    [Markup.callbackButton("Next ➡️", "Admin_2")],
  ])
  .extra());
};

const Admin_N = async(ctx, page) =>  {
  const last = await getPages();
  const users = await getUsers(page);
  const text = await massToText(users);
  if (page === last - 1) {
    ctx.reply(`🤵 Page ${page}/${last}:\n\n` + text, Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Back", `Admin_${page - 1}`), Markup.callbackButton("Next ➡️", `Admin_Last`)],
    ])
    .extra());
  } else if (page === 2) {
    ctx.reply(`🤵 Page ${page}/${last}:\n\n` + text, Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Back", `Admin_First`), Markup.callbackButton("Next ➡️", `Admin_${page + 1}`)],
    ])
    .extra());
  } else {
    ctx.reply(`🤵 Page ${page}/${last}:\n\n` + text, Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Back", `Admin_${page - 1}`), Markup.callbackButton("Next ➡️", `Admin_${page + 1}`)],
    ])
    .extra());
  };
};

const Admin_last = async(ctx) =>  {
  const last = await getPages();
  const users = await getUsers(last);
  const text = await massToText(users);
  ctx.reply(`🤵 Page ${last}/${last}:\n\n` + text, Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", `Admin_${last - 1}`)],
  ])
  .extra());
};

const admin = (bot) => {
    bot.command('admin', async(ctx, next) => {
      if (adminId === ctx.from.id) {
        console.log('Wellcome admin mode!');
        ctx.reply('Wellcome admin mode!');
        Admin_first(ctx);
      };
    });
    bot.action('Admin_First', (ctx, next) => {
      return Admin_first(ctx);
    });
    bot.action(/Admin_\d/, (ctx, next) => {
      const i = +ctx.match[0].substring(6,);
      return Admin_N(ctx, i);
    });
    bot.action(`Admin_Last`, (ctx, next) => {
      return Admin_last(ctx);
    });
};

export default admin;