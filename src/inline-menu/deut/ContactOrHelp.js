import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const text = `✉️ Kontakt / Hilfe\n\nDu benötigst Hilfe bei der Anmeldung, hast Fragen zum Trading, möchtest einen lukrativen Trade oder deinen Tradingerfolg (Screenshot) mit der Gruppe teilen?\n\n➡️ Dann kontaktiere gerne Florian und sein Team hier auf Telegram:`;
const username = config.CONTACT_USERNAME;

const contact = (ctx) =>  {
  ctx.reply(text, Markup.inlineKeyboard([
    [Markup.urlButton("📩 Kontaktiere uns", `https://t.me/${username}`)],
    [Markup.callbackButton("↩️ Zurück zur Anmeldung", "Deutsch_lang")],
  ])
  .extra());
};

export default contact;