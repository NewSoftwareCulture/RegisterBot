import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { btn, text } = config.CONSTS.contactOrHelp.deut;
const { backToRegistration } = config.CONSTS.buttons.deut;
const { CONTACT_USERNAME } = config;

const contact = (ctx) =>  {
  ctx.replyWithHTML(text, Markup.inlineKeyboard([
    [Markup.urlButton(btn, `https://t.me/${CONTACT_USERNAME}`)],
    [Markup.callbackButton(backToRegistration, "Deutsch_lang")],
  ])
  .extra());
};

export default contact;