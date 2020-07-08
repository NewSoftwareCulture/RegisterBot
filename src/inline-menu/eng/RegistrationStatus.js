import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const URL = process.env.REGISTRATION_URL || config.REGISTRATION_URL;

const text = `🔎 Registration Status\n\n` + 
`Unfortunately, your registration is not finished yet. ⛔️\n\n` + 
`The following steps need to be completed for joining the group:\n\n` + 
`1. Sign up with your custom link at our verified and EU regulated broker:\n${URL} 📝\n\n` + 
`❗️Please note: The registration works only with this link. Do you already have an account with this broker? Feel free to contact us! (see below "Contact"👇)\n\n` + 
`2. Deposit any amount starting from 100€ to your new broker account. In order for you to start perfectly, we recommend a starting amount of 500€. Your deposit is safe with the verified and regulated broker and can be withdrawn free of charge. ✅\n\n` + 
`3. Wait for your activation ⏱ (within 1h after registration of your new broker account). In the exceptional case that it takes longer, you are welcome to contact us and we will take care of it (see below). 🤝\n\n` + 
`➡️ That's it! After these steps you are part of our group and can begin trading with us. Just wait for our trading signals! 📢\n\n` + 
`Please note and read the mandatory risk warning for financial products at:\n` + 
`/disclaimer`;

const regStatus = (ctx) => {
  ctx.reply(text, Markup.inlineKeyboard([
    [Markup.urlButton("📝 To Broken Registration", URL)],
    [Markup.callbackButton("🎓 Basics & Tutorial", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("🔎 Registration Status", "Registration_Status"), Markup.callbackButton("📊 Random Result", "RandomResult")],
    [Markup.callbackButton("✉️ Contact / Help", "Contact_or_Help"), Markup.callbackButton("ℹ️ About...", "About_1")],
  ]).extra());
};

export default regStatus;