import Telegraf from 'telegraf';
import BasicsAndTutorial from '../BasicsAndTutorial';

const { Markup } = Telegraf;
const { BasicsAndTutorial_1, BasicsAndTutorial_n, BasicsAndTutorial_16 } = BasicsAndTutorial;

const about = (bot) => {
  bot.action('Basics_and_Tutorial_1', (ctx, next) => {
    return BasicsAndTutorial_1(ctx)
  });
  bot.action('Basics_and_Tutorial_2', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 2)
  });
  bot.action('Basics_and_Tutorial_3', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 3)
  });
  bot.action('Basics_and_Tutorial_4', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 4)
  });
  bot.action('Basics_and_Tutorial_5', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 5)
  });
  bot.action('Basics_and_Tutorial_6', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 6)
  });
  bot.action('Basics_and_Tutorial_7', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 7)
  });
  bot.action('Basics_and_Tutorial_8', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 8)
  });
  bot.action('Basics_and_Tutorial_9', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 9)
  });
  bot.action('Basics_and_Tutorial_10', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 10)
  });
  bot.action('Basics_and_Tutorial_11', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 11)
  });
  bot.action('Basics_and_Tutorial_12', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 12)
  });
  bot.action('Basics_and_Tutorial_13', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 13)
  });
  bot.action('Basics_and_Tutorial_14', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 14)
  });
  bot.action('Basics_and_Tutorial_15', (ctx, next) => {
    return BasicsAndTutorial_n(ctx, 15)
  });
  bot.action('Basics_and_Tutorial_16', (ctx, next) => {
    return BasicsAndTutorial_16(ctx, 16)
  });
};

export default about;