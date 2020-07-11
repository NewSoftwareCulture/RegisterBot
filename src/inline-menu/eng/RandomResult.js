import Telegraf from 'telegraf';
import config from '../../../config';
const { Markup } = Telegraf;

const { REGISTRATION_URL, RANDOM_URLS } = config;
const { buttons } = config.CONSTS.main.eng;

const randomInteger = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const random_result = (ctx) => {
  let path = RANDOM_URLS[randomInteger(0, RANDOM_URLS.length - 1)];
  ctx.replyWithHTML(`👍 Join here:\n${path}`, Markup.inlineKeyboard([
    [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
    [Markup.callbackButton(buttons.basicsAndTutorial, "Basics_and_Tutorial_1")],
    [Markup.callbackButton(buttons.registrationStatus, "Registration_Status"), Markup.callbackButton(buttons.randomResult, "RandomResult")],
    [Markup.callbackButton(buttons.contactOrHelp, "Contact_or_Help"), Markup.callbackButton(buttons.about, "About_1")],
  ]).extra());
  // ctx.replyWithHTML(`👍 Join here:\n${path}`);
  // ctx.replyWithPhoto({ source: fs.readFileSync(`./src/media/RandomResult/Random_${path}.jpg`) }, Markup.inlineKeyboard([
  //   [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
  //   [Markup.callbackButton(buttons.basicsAndTutorial, "Basics_and_Tutorial_1")],
  //   [Markup.callbackButton(buttons.registrationStatus, "Registration_Status"), Markup.callbackButton(buttons.randomResult, "RandomResult")],
  //   [Markup.callbackButton(buttons.contactOrHelp, "Contact_or_Help"), Markup.callbackButton(buttons.about, "About_1")],
  // ])
  // .extra()); 
};

export default random_result;