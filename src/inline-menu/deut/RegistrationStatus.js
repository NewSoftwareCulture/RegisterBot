import Telegraf from 'telegraf';
import config from '../../../config';
import DB from '../../DB';
const { Markup } = Telegraf;

const { textFin, textNotFin } = config.CONSTS.registrationStatus.deut;
const { buttons } = config.CONSTS.main.deut;
const { REGISTRATION_URL, TRADING_GROUP_URL } = config;
const { find } = DB;

const regStatus = async(ctx) => {
  const user = await find({ userId: ctx.from.id });
  if (user.stepStatus === 'final') {
    ctx.replyWithHTML(textFin, Markup.inlineKeyboard([
      [Markup.urlButton(buttons.joinTradingGroup, TRADING_GROUP_URL)],
      [Markup.callbackButton(buttons.basicsAndTutorial, "DEUT_Basics_and_Tutorial_1")],
      [Markup.callbackButton(buttons.contactOrHelp, "DEUT_Contact_or_Help")],
    ]).extra());
  } else {
    ctx.replyWithHTML(textNotFin, Markup.inlineKeyboard([
      [Markup.urlButton(buttons.toBrokenRegistration, REGISTRATION_URL)],
      [Markup.callbackButton(buttons.basicsAndTutorial, "DEUT_Basics_and_Tutorial_1")],
      [Markup.callbackButton(buttons.registrationStatus, "DEUT_Registration_Status"), Markup.callbackButton(buttons.randomResult, "DEUT_RandomResult")],
      [Markup.callbackButton(buttons.contactOrHelp, "DEUT_Contact_or_Help"), Markup.callbackButton(buttons.about, "DEUT_About_1")],
    ]).extra());
  };
};

export default regStatus;