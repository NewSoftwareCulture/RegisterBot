import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { text_1, text_2, text_3 } = config.CONSTS.about.eng;
const { next, back, backToRegistration } = config.CONSTS.buttons.eng;

const About_1 = (ctx) =>  {
  ctx.replyWithHTML(text_1, Markup.inlineKeyboard([
    [Markup.callbackButton(next, "About_2")],
    [Markup.callbackButton(backToRegistration, "English_lang")],
  ])
  .extra());
};

const About_2 = (ctx) =>  {
  ctx.replyWithHTML(text_2, Markup.inlineKeyboard([
    [Markup.callbackButton(back, "About_1"), Markup.callbackButton(next, "About_3")],
    [Markup.callbackButton(backToRegistration, "English_lang")],
  ])
  .extra());
}

const About_3 = (ctx) =>  {
  ctx.replyWithHTML(text_3, Markup.inlineKeyboard([
    [Markup.callbackButton(back, "About_2")],
    [Markup.callbackButton(backToRegistration, "English_lang")],
  ])
  .extra());
}

export default {
  About_1: About_1,
  About_2: About_2,
  About_3: About_3,
};