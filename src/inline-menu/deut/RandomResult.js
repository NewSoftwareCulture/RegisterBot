import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const URL = process.env.REGISTRATION_URL || config.REGISTRATION_URL;
const urls = config.RANDOM_URLS;

const randomInteger = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const random_result = (ctx) => {
  ctx.reply(`💎 Hier kannst du mittraden:\n${urls[randomInteger(0, urls.length - 1)]}`, Markup.inlineKeyboard([
    [Markup.urlButton("📝 Zur Brokeranmeldung", URL)],
    [Markup.callbackButton("🎓 Grundlagen & Erklärung", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("🔎 Anmeldestatus", "Registration_Status"), Markup.callbackButton("📊 Zuf. Ergebnis", "RandomResult")],
    [Markup.callbackButton("✉️ Kontakt / Hilfe", "Contact_or_Help"), Markup.callbackButton("ℹ️ Über...", "About_1")],
  ]).extra());
};

export default random_result;