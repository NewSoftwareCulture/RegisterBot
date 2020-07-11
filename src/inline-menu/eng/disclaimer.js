import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { text } = config.CONSTS.disclaimer.eng;
const { backToRegistration } = config.CONSTS.buttons.eng;

const disc = (ctx) =>  {
  ctx.replyWithHTML(text, Markup.inlineKeyboard([
    [Markup.callbackButton(backToRegistration, "English_lang")],
  ])
  .extra());
};

export default disc;