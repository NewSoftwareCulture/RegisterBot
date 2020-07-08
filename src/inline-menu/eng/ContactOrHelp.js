import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const text = `✉️ Contact / Help\n\nDo you need help with the registration or do you have any questions regarding trading?\n\nWould you like to trade with a higher leverage to maximize your profits?\n\nOr would you like to share a great and successful trade (screenshot) with the group?\n\n➡️ Then do not hesitate and feel welcome to contact Florian and his team here on Telegram:`;
const username = config.CONTACT_USERNAME;

const contact = (ctx) =>  {
  ctx.reply(text, Markup.inlineKeyboard([
    [Markup.urlButton("📩 Contact us", `https://t.me/${username}`)],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
};

export default contact;