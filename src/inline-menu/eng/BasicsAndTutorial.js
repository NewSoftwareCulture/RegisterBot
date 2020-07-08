import Telegraf from 'telegraf';
const { Markup } = Telegraf;

const text = [];
text[1] = `🎓 1/16\nTrading Basics & Tutorial\n- List of Contents:`;
text[2] = `🎓 2/16\nWhat is CFD Trading?\n\nCFD means "Contract for Difference". So CFDs are trading contracts based on price difference. They are a way to gain higher profits by making small investments on price fluctuations. The profit thus depends on the difference between the price at the time of opening and the price at the time of closing the trade. Currency pairs (Forex), stocks, commodities and indices can be traded this way. Of course, our recommended, verified and regulated broker also offers the trading of cryptocurrencies.`;
text[3] = `🎓 3/16\nWhat is CFD Trading?\n\nWhen opening a CFD trade you just bet on a rising or falling price. A key feature of CFD trades is the leverage that acts like a multiplier. This means for example: If the currency pair EUR/USD was traded as BUY with an investment of 100 Euros, then a price increase of 10% would result in a profit of 10 Euros. Hence, was there a leverage of 10 chosen, the profit would be 100% and would therefore be increased tenfold to 100 Euros. So with a leverage of 10 you would have already doubled your investment. Accordingly, the profit would be even 1000 Euros with a leverage of 100.`;
text[4] = `🎓 4/16\nWhat is CFD Trading?\n\nThe effect of the leverage already demonstrates the biggest advantage of CFDs: With CFDs, each trader is given the opportunity to trade a larger amount of capital with small investments and can so multiply the potential profit. This makes trading even interesting and lucrative with smaller budgets. It also eliminates the high and standard commissions that are typically charged by brokers and banks for conservative stock market trading. The brokers offering CFD trading usually charge a small commission for opening the trade (also called Spread). Additionally, some brokers also offer a directly charged percentual commission according to the trade volume increasing the transparency even further. The trades are also executed in real time, ensuring maximum security and accuracy.`;
text[5] = `🎓 5/16\nThe Basics\n- The Rules of Trading:\n\n❗️ We always trade with the trend.\n\n❗️ Never invest more than 20% of your capital into one trade.\n\n❗️ Quality before quantity.\n\n❗️ Losses are part of trading. Keep calm and do not act impulsively.\n\n❗️ Trade with discipline, patience and endurance. Getting rich overnight should not be your goal!`;
text[6] = `🎓 6/16\nThe Basics\n- The Trend:\n\nAlthough the price is subject to regular fluctuations, the trend clearly shows in which direction the price will go. There is an uptrend or downtrend. In the chart analysis, there is the so-called Trend Channel. The Trend Channel (see picture) clearly indicates the trend direction and enables us to profitably trade short ping-pong-trends within the channel whenever the price touches the borders of the trend channel. In addition, breakthroughs in the opposite direction of the trend may indicate a reversal. To increase the winning chance of a trade, it is important to always trade with the trend (what means in trend direction).`;
text[7] = ``;
text[8] = ``;
text[9] = ``;
text[10] = ``;
text[11] = ``;
text[12] = ``;
text[13] = ``;
text[14] = ``;
text[15] = ``;
text[16] = ``;

const BasicsAndTutorial_1 = (ctx) =>  {
  ctx.reply(text[1], Markup.inlineKeyboard([
    [Markup.callbackButton("1. What is CFD Trading?", "Basics_and_Tutorial_2")],
    [Markup.callbackButton("2. The Basics", "Basics_and_Tutorial_5")],
    [Markup.callbackButton("3. Trading Strategies", "Basics_and_Tutorial_11")],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
};

const BasicsAndTutorial_n = (ctx, numb) =>  {
  ctx.reply(text[numb], Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", `Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton("Next ➡️", `Basics_and_Tutorial_${numb + 1}`)],
    [Markup.callbackButton("🎓 List of Contents", "Basics_and_Tutorial_1")],
  ])
  .extra());
};

const BasicsAndTutorial_16 = (ctx) =>  {
  ctx.reply(text[16], Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", `Basics_and_Tutorial_${numb - 1}`)],
    [Markup.callbackButton("🎓 List of Contents", "Basics_and_Tutorial_1")],
  ])
  .extra());
};

export default {
  BasicsAndTutorial_1: BasicsAndTutorial_1,
  BasicsAndTutorial_n: BasicsAndTutorial_n,
  BasicsAndTutorial_16: BasicsAndTutorial_16,
};