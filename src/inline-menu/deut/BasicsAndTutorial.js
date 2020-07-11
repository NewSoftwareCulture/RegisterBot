import Telegraf from 'telegraf';
import fs from 'fs';
import config from '../../../config';

const { Markup } = Telegraf;
const { text, buttons } = config.CONSTS.basicsAndTutorial.deut;
const { next, back, listOfContents, backToRegistration } = config.CONSTS.buttons.deut;

const BasicsAndTutorial_1 = (ctx) =>  {
  ctx.replyWithHTML(text[1], Markup.inlineKeyboard([
    [Markup.callbackButton(buttons.btn_1, "DEUT_Basics_and_Tutorial_2")],
    [Markup.callbackButton(buttons.btn_2, "DEUT_Basics_and_Tutorial_5")],
    [Markup.callbackButton(buttons.btn_3, "DEUT_Basics_and_Tutorial_11")],
    [Markup.callbackButton(backToRegistration, "Deutsch_lang")],
  ])
  .extra());
};

const BasicsAndTutorial_n = (ctx, numb) =>  {
  if ([6, 9, 12, 13, 14, 15].includes(numb)){
    ctx.replyWithHTML(text[numb]);
    ctx.replyWithPhoto({ source: fs.readFileSync(`./src/media/BasicsAndTutorial_${numb}.jpg`) }, Markup.inlineKeyboard([
      [Markup.callbackButton(back, `DEUT_Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton(next, `DEUT_Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton(listOfContents, "DEUT_Basics_and_Tutorial_1")],
    ])
    .extra()); 
  } else {
    ctx.replyWithHTML(text[numb], Markup.inlineKeyboard([
      [Markup.callbackButton(back, `DEUT_Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton(next, `DEUT_Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton(listOfContents, "DEUT_Basics_and_Tutorial_1")],
    ])
    .extra());
  };
};

const BasicsAndTutorial_16 = (ctx) =>  {
  ctx.replyWithHTML(text[16], Markup.inlineKeyboard([
    [Markup.callbackButton(back, `DEUT_Basics_and_Tutorial_15`)],
    [Markup.callbackButton(listOfContents, "DEUT_Basics_and_Tutorial_1")],
    [Markup.callbackButton(backToRegistration, "Deutsch_lang")],
  ])
  .extra());
};

export default {
  BasicsAndTutorial_1: BasicsAndTutorial_1,
  BasicsAndTutorial_n: BasicsAndTutorial_n,
  BasicsAndTutorial_16: BasicsAndTutorial_16,
};