import Telegraf from 'telegraf';
import fs from 'fs';

const { Markup } = Telegraf;

const text = [];
text[1] = `🎓 1/16\nTrading Basics & Tutorial\n- List of Contents:`;
text[2] = `🎓 2/16\nWhat is CFD Trading?\n\nCFD means "Contract for Difference". So CFDs are trading contracts based on price difference. They are a way to gain higher profits by making small investments on price fluctuations. The profit thus depends on the difference between the price at the time of opening and the price at the time of closing the trade. Currency pairs (Forex), stocks, commodities and indices can be traded this way. Of course, our recommended, verified and regulated broker also offers the trading of cryptocurrencies.`;
text[3] = `🎓 3/16\nWhat is CFD Trading?\n\nWhen opening a CFD trade you just bet on a rising or falling price. A key feature of CFD trades is the leverage that acts like a multiplier. This means for example: If the currency pair EUR/USD was traded as BUY with an investment of 100 Euros, then a price increase of 10% would result in a profit of 10 Euros. Hence, was there a leverage of 10 chosen, the profit would be 100% and would therefore be increased tenfold to 100 Euros. So with a leverage of 10 you would have already doubled your investment. Accordingly, the profit would be even 1000 Euros with a leverage of 100.`;
text[4] = `🎓 4/16\nWhat is CFD Trading?\n\nThe effect of the leverage already demonstrates the biggest advantage of CFDs: With CFDs, each trader is given the opportunity to trade a larger amount of capital with small investments and can so multiply the potential profit. This makes trading even interesting and lucrative with smaller budgets. It also eliminates the high and standard commissions that are typically charged by brokers and banks for conservative stock market trading. The brokers offering CFD trading usually charge a small commission for opening the trade (also called Spread). Additionally, some brokers also offer a directly charged percentual commission according to the trade volume increasing the transparency even further. The trades are also executed in real time, ensuring maximum security and accuracy.`;
text[5] = `🎓 5/16\nThe Basics\n- The Rules of Trading:\n\n❗️ We always trade with the trend.\n\n❗️ Never invest more than 20% of your capital into one trade.\n\n❗️ Quality before quantity.\n\n❗️ Losses are part of trading. Keep calm and do not act impulsively.\n\n❗️ Trade with discipline, patience and endurance. Getting rich overnight should not be your goal!`;
text[6] = `🎓 6/16\nThe Basics\n- The Trend:\n\nAlthough the price is subject to regular fluctuations, the trend clearly shows in which direction the price will go. There is an uptrend or downtrend. In the chart analysis, there is the so-called Trend Channel. The Trend Channel (see picture) clearly indicates the trend direction and enables us to profitably trade short ping-pong-trends within the channel whenever the price touches the borders of the trend channel. In addition, breakthroughs in the opposite direction of the trend may indicate a reversal. To increase the winning chance of a trade, it is important to always trade with the trend (what means in trend direction).`;
text[7] = `🎓 7/16\nThe Basics\n- Buy and Sell:\n\nThe essential actions in trading are buying and selling of an asset which can be among others, currencies, stocks, indices and also cryptocurrencies. Often selling is represented by a red colour and buying by a green one. In CFD trading, with the action "SELL" you will gain profit when the price of the asset is falling and, vice versa, with "BUY" when the price is rising. Traders also refer to selling as SHORT and buying as LONG. In the following chapters about trading strategies I use these two terms. For each trade it is important to pay attention to which of the two actions is to be executed, according to the prediction for the price development.`;
text[8] = `🎓 8/16\nThe Basics\n- SL / TP:\n\nSL means "Stop Loss" and is used to limit losses. With the SL the trader can determine up to which price or even up to which percentual difference it might move in the opposite direction as it was initially intended. Once the specified SL has been reached, the trade is automatically closed. There is thus no risk of losing the entire capital. The SL is, if necessary, also specified in the Trading Group and can be simply copied. TP is the opposite to SL and means "Take Profit". With the TP the threshold in profit is determined at which a trade is automatically closed and the profit is taken. So the trader will not have to worry about missing the perfect moment to close the trade and so does not lose any profit. Catching the perfect moment can have a higher difficulty because of price fluctuations (also called volatility) as well as if you can not keep an eye on the price all the time and hence giving automatic features like the TP a big plus.`;
text[9] = `🎓 9/16\nThe Basics\n- The signals in the group:\n\nIn the Trading Group we all trade together and I share my trading actions with everyone - when I open a trade, how I secure it via SL (Stop Loss) and when I close it. You can directly copy these signals or evaluate them as part of your own strategy. They are therefore only recommendations for the most effective trade possible.\nFor example, such a signal looks like this:`;
text[10] = `🎓 10/16\nThe Basics\n- The Broker:\n\nTrading with our recommended, verified and EU regulated broker is simple and safe. After the registration and login to your new broker account you will be presented with a list of trading instruments/assets on the left side and next to it an opened chart. The respective trading instrument/asset is always indicated in my signals. So if you receive a signal, you will see that i.e. "EUR/USD" is bought or sold. So you can either directly click on the trading instrument/asset in your broker account or use the search to quickly jump to it and then with a click on "Open trade position" (or in the app "SELL" and "BUY" are directly shown) an overview for the creation of the trade will appear. There you specify your investment for that trade, the leverage (multiplier) and the trading action (buy/LONG or sell/SHORT) according to the signal and your own evaluation.\n\nIt is important to keep an eye on your trade after you have opened it and to close it once it reaches the desired profit, in case you did not set a TP. Of course, this also applies to prevent losses if no SL is set.`;
text[11] = `🎓 11/16\nTrading Strategies\n\nOver the years, I have developed very lucrative strategies that enable with appropriate experience and discipline to trade with profit and build financial independence. These strategies consist of complex mathematical algorithms, technical analyzes, various indicators and rules. To explain them in detail is, due to the complexity and the necessary years of experience, unfortunately not possible. However, it is possible to share the results of my strategies in the form of signals, analyzes and recommendations with the group. In the following, I want to show and explain to you some of the basic indicators and strategies that can help you with your trades.`;
text[12] = `🎓 12/16\nTrading Strategies\n- Bollinger Bands:\n\nThe Bollinger Bands is one of the most common indicators in the technical chart analysis. This indicator is fairly simple and yet effective in CFD trading. It consists of three lines: a middle and two boundary lines. If the price moves down to the lower line, a reversal upwards to be next is expected, which is an opportunity for opening a LONG trade. With a price movement to the upper line, a falling price is expected, so that it is advised to go for SHORT. Breakthroughs are a very strong indication of reversals.`;
text[13] = `🎓 13/16\nTrading Strategies\n- Relative Strength Index:\n\nThe Relative Strength Index (also RSI) value can be used to determine whether a financial asset is either over- or underestimated and hence overbought or oversold. So in general the following rule applies for this indicator: If the RSI value rises above 70 it is advised to go SHORT and accordingly if the RSI value falls below 30 to go LONG.`;
text[14] = `🎓 14/16\nTrading Strategies\n- PARABOLIC SAR:\n\nThis indicator is not widely used, but it is quite efficient in CFD trading. It seeks and marks those points at which the changes in the price movement take place. For this purpose, it displays points in the chart above and below the candles. Points that are set above the candle indicate a possible DOWN trend with falling prices and, vice-versa, points below the candle indicate a possible UP trend with rising prices. A strategy based on this would now intend to open new trades once new points are set. This means that if the price was falling before (DOWN trend and the points had been set above the candle) and the point is now set BELOW the candle, we have a signal for a possible UP trend and going LONG. Accordingly, a signal for opening a SHORT trade would result when the point is set ABOVE the candle while we had an UP trend before. This indicator is often used in strategies together with the MACD indicator that is described next chapter.`;
text[15] = `🎓 15/16\nTrading Strategies\n- MACD:\n\nWith the help of this indicator, the approximation and differentiation of the price is determined. This indicator provides many signals, can be easily interpreted and is therefore part of many strategies. A basic interpretation can be derived from the transition over the zero line. As soon as the bar of the bar chart traverses the zero line from top to bottom, we have an opportunity for going SHORT. Conversely, if the bar crosses the zero line from bottom to top, we have an opportunity for opening a LONG trade.`;
text[16] = `🎓 16/16\n\nAnd remember:\n\n❗️ We always trade with the trend!\n\nAnd now we wish you fun and success with trading! 💰👍`;

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
  if ([6, 9, 12, 13, 14, 15].includes(numb)){
    ctx.reply(text[numb]);
    ctx.replyWithPhoto({ source: fs.readFileSync(`./src/media/BasicsAndTutorial_${numb}.jpg`) }, Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Back", `Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton("Next ➡️", `Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton("🎓 List of Contents", "Basics_and_Tutorial_1")],
    ])
    .extra()); 
  } else {
    ctx.reply(text[numb], Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Back", `Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton("Next ➡️", `Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton("🎓 List of Contents", "Basics_and_Tutorial_1")],
    ])
    .extra());
  };
};

const BasicsAndTutorial_16 = (ctx) =>  {
  ctx.reply(text[16], Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", `Basics_and_Tutorial_15`)],
    [Markup.callbackButton("🎓 List of Contents", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
};

export default {
  BasicsAndTutorial_1: BasicsAndTutorial_1,
  BasicsAndTutorial_n: BasicsAndTutorial_n,
  BasicsAndTutorial_16: BasicsAndTutorial_16,
};