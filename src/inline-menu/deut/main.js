import Telegraf from 'telegraf';
import config from '../../../config';
import DB from '../../DB';
const { Markup } = Telegraf;
const { saveOrUpd } = DB;

const URL = process.env.REGISTRATION_URL || config.REGISTRATION_URL;

const text = `📈 Anmeldung - Trading Group 📉\n\n` + 
`Mit den folgenden einfachen Schritten, wirst du Teil unserer erfolgreichen Trading-Community:\n\n` + 
`1. Melde dich mit deinem individuellen Link bei unserem geprüften Broker an: \n${URL} 📝\n\n` + 
`❗️Bitte beachte: Die Anmeldung funktioniert nur mit diesem Link! Bist du bereits bei diesem Broker angemeldet, dann kontaktiere uns! (siehe unten "Kontakt"👇)\n\n` + 
`2. Zahle einen beliebigen Geldbetrag ab 100€ auf dein neues Brokerkonto ein. Damit du ideal starten kannst, empfehlen wir einen Anfangsbetrag von 500€. Deine Einzahlung ist beim geprüften und seit über 20 Jahren im Geschäft befindlichen Broker sicher und kann kostenfrei wieder ausgezahlt werden. ✅\n\n` + 
`3. Warte auf deine Freischaltung ⏱ (innerhalb 1h ab Registrierung beim Broker). Sollte es wider Erwarten länger dauern, kannst du uns gern kontaktieren und wir kümmern uns darum (siehe unten). 🤝\n\n` + 
`➡️ Das war's! Nach diesen Schritten bist du Teil unserer Gruppe und kannst nun mittraden. Warte einfach auf unsere Trading-Signale! 📢\n\n` + 
`Bei Fragen stehen dir Florian und sein Team jederzeit gern zur Verfügung. 👥 👍\n\n` + 
`Bitte beachte und lese den obligatorischen Risikohinweis für Finanzprodukte unter:\n` + 
`/disclaimer`;

const main = async(bot, ctx) => {
  await saveOrUpd({userId: ctx.from.id, stepStatus: 'start'});
  ctx.reply(text, Markup.inlineKeyboard([
    [Markup.urlButton("📝 Zur Brokeranmeldung", URL)],
    [Markup.callbackButton("🎓 Grundlagen & Erklärung", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("🔎 Anmeldestatus", "Registration_Status"), Markup.callbackButton("📊 Zuf. Ergebnis", "RandomResult")],
    [Markup.callbackButton("✉️ Kontakt / Hilfe", "Contact_or_Help"), Markup.callbackButton("ℹ️ Über...", "About_1")],
  ]).extra());
};

export default main;