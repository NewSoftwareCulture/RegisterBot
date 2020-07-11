import Telegraf from 'telegraf';
import config from '../../../config';
import DB from '../../DB';
const { Markup } = Telegraf;
const { saveOrUpd, find } = DB;

const { REGISTRATION_URL } = config;
const { text, buttons } = config.CONSTS.main.deut;

const main = async(bot, ctx) => {
  const user = await find({ userId: ctx.from.id });
  if(!user.stepStatus) await saveOrUpd({ userId: ctx.from.id, stepStatus: 'start' });
  ctx.replyWithHTML(text, Markup.inlineKeyboard([
    [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
    [Markup.callbackButton(buttons.basicsAndTutorial, "DEUT_Basics_and_Tutorial_1")],
    [Markup.callbackButton(buttons.registrationStatus, "DEUT_Registration_Status"), Markup.callbackButton(buttons.randomResult, "DEUT_RandomResult")],
    [Markup.callbackButton(buttons.contactOrHelp, "DEUT_Contact_or_Help"), Markup.callbackButton(buttons.about, "DEUT_About_1")],
  ]).extra());
};

export default main;