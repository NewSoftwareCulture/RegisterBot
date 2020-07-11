import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { text } = config.CONSTS.disclaimer.deut;
const { backToRegistration } = config.CONSTS.buttons.deut;

const disc = (ctx) =>  {
  ctx.replyWithHTML(text, Markup.inlineKeyboard([
    [Markup.callbackButton(backToRegistration, "Deutsch_lang")],
  ])
  .extra());
};

export default disc;