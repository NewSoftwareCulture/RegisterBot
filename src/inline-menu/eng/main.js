import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const text = `📈 Registration - Trading Group 📉\n\n` + 
`With the following simple steps, you can become part of our successful trading community:\n\n` +
`1. Sign up with your custom link at our verified and EU regulated broker: \nhttps://tcd.me/cfdstrade?payload=c4faz 📝\n\n` +
`❗️Please note: The registration works only with this link. Do you already have an account with this broker? Feel free to contact us! (see below "Contact"👇)\n\n` + 
`2. Deposit any amount starting from 100€ to your new broker account. In order for you to start perfectly, we recommend a starting amount of 500€. Your deposit is safe with the verified and regulated broker and can be withdrawn free of charge. ✅\n\n` + 
`3. Wait for your activation ⏱ (within 1h after registration of your new broker account). In the exceptional case that it takes longer, you are welcome to contact us and we will take care of it (see below). 🤝\n\n` + 
`➡️ That's it! After these steps you are part of our group and can begin trading with us. Just wait for our trading signals! 📢\n\n` + 
`If you have any questions, Florian and his team are always at your disposal. 👥 👍` +
`Please note and read the mandatory risk warning for financial products at:\n\n` +
`/disclaimer`;
const URL = process.env.REGISTRATION_URL || config.REGISTRATION_URL;

const main = (bot, ctx) => {
  ctx.reply(text, Markup.inlineKeyboard([
    [Markup.urlButton("📝 To Broken Registration", URL)],
    [Markup.callbackButton("🎓 Basics & Tutorial", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("🔎 Registration Status", "Registration_Status"), Markup.callbackButton("📊 Random Result", "RandomResult")],
    [Markup.callbackButton("✉️ Contact / Help", "Contact_or_Help"), Markup.callbackButton("ℹ️ About...", "About_1")],
  ]).extra());
};

export default main;