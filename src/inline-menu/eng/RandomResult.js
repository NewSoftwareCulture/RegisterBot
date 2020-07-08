import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const URL = process.env.REGISTRATION_URL || config.REGISTRATION_URL;
const urls = config.RANDOM_URLS;

const randomInteger = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const random_result = (ctx) => {
  ctx.reply(`👍 Join here:\n${urls[randomInteger(0, urls.length - 1)]}`, Markup.inlineKeyboard([
    [Markup.urlButton("📝 To Broken Registration", URL)],
    [Markup.callbackButton("🎓 Basics & Tutorial", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("🔎 Registration Status", "Registration_Status"), Markup.callbackButton("📊 Random Result", "RandomResult")],
    [Markup.callbackButton("✉️ Contact / Help", "Contact_or_Help"), Markup.callbackButton("ℹ️ About...", "About_1")],
  ]).extra());
};

export default random_result;