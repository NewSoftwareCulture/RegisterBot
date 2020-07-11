import Telegraf from 'telegraf';
import config from '../../../config';
import DB from '../../DB';
const { Markup } = Telegraf;
const { saveOrUpd, find } = DB;

const { REGISTRATION_URL } = config;
const { text, buttons } = config.CONSTS.main.eng;

const main = async(bot, ctx) => {
  const user = await find({ userId: ctx.from.id });
  if(!user.stepStatus) await saveOrUpd({ userId: ctx.from.id, stepStatus: 'start' });
  ctx.replyWithHTML(text, Markup.inlineKeyboard([
    [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
    [Markup.callbackButton(buttons.basicsAndTutorial, "Basics_and_Tutorial_1")],
    [Markup.callbackButton(buttons.registrationStatus, "Registration_Status"), Markup.callbackButton(buttons.randomResult, "RandomResult")],
    [Markup.callbackButton(buttons.contactOrHelp, "Contact_or_Help"), Markup.callbackButton(buttons.about, "About_1")],
  ]).extra());
};

export default main;