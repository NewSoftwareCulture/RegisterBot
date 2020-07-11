import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { REGISTRATION_URL, RANDOM_URLS } = config;
const { buttons } = config.CONSTS.main.deut;

const randomInteger = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const random_result = (ctx) => {
  let path = RANDOM_URLS[randomInteger(0, RANDOM_URLS.length - 1)];
  ctx.replyWithHTML(`💎 Hier kannst du mittraden:\n${path}`, Markup.inlineKeyboard([
    [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
    [Markup.callbackButton(buttons.basicsAndTutorial, "DEUT_Basics_and_Tutorial_1")],
    [Markup.callbackButton(buttons.registrationStatus, "DEUT_Registration_Status"), Markup.callbackButton(buttons.randomResult, "DEUT_RandomResult")],
    [Markup.callbackButton(buttons.contactOrHelp, "DEUT_Contact_or_Help"), Markup.callbackButton(buttons.about, "DEUT_About_1")],
  ]).extra());
  // ctx.replyWithHTML(`💎 Hier kannst du mittraden:\n${path}`);
  // ctx.replyWithPhoto({ source: fs.readFileSync(`./src/media/RandomResult/Random_${path}.jpg`) }, Markup.inlineKeyboard([
  //   [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
  //   [Markup.callbackButton(buttons.basicsAndTutorial, "DEUT_Basics_and_Tutorial_1")],
  //   [Markup.callbackButton(buttons.registrationStatus, "DEUT_Registration_Status"), Markup.callbackButton(buttons.randomResult, "DEUT_RandomResult")],
  //   [Markup.callbackButton(buttons.contactOrHelp, "DEUT_Contact_or_Help"), Markup.callbackButton(buttons.about, "DEUT_About_1")],
  // ])
  // .extra()); 
};

export default random_result;