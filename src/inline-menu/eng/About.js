import Telegraf from 'telegraf';
const { Markup } = Telegraf;

const text_1 = `ℹ️ 1/3\n\nAbout me and why this group...\n\nMy name is  Florian , I am 34 years old and I have been active in the financial markets for over 10 years. During this time I have gained a lot of experience in trading. For me, the wish for financial independence was at the very beginning a priority. As a dependent employee, while gaining financial and market experience during my job as a hobby, the perspectives were simply too limited, the salary was too low and my employer's acknowledgement and commitment to me was simply not sufficient enough for me.`;
const text_2 = `ℹ️ 2/3\n\nAbout me and why this group...\n\nThus, it was important for me to develop my own path and to go purposefully in a direction to break through the blocks towards success. CFD trading is a great way to do that and has a significant potential for generating large volumes of capital with low investments. To pursue my goal, I have had to invest in addition to my job, very many days and sleepless nights. Over time, however, I have been able to develop better trading strategies and apply them more and more successfully and profitably, so that after some time it became possible for me to finally say goodbye to my former employer and to do my own thing. In the meantime, I have even recruited a team that helps me to further improve my strategies and implement them profitably on a larger scale.`;
const text_3 = `ℹ️ 3/3\n\nAbout me and why this group...\n\nSince I was not born rich, I had to work hard so I know how difficult it can be to get on to the path of success, it is my personal concern to help others with my trading strategies to do better in life and to protect them against losses. After all, trading is no secret, anyone can do it and the stock market offers a sufficient profit potential for many traders. For these reasons, I've started the Trading Group and, simultanously, can further improve my strategies based on member feedback, which ultimately benefits all members. 💰 📈`;

const About_1 = (ctx) =>  {
  ctx.reply(text_1, Markup.inlineKeyboard([
    [Markup.callbackButton("Next ➡️", "About_2")],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
};

const About_2 = (ctx) =>  {
  ctx.reply(text_2, Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", "About_1"), Markup.callbackButton("Next ➡️", "About_3")],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
}

const About_3 = (ctx) =>  {
  ctx.reply(text_3, Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Back", "About_2")],
    [Markup.callbackButton("↩️ Back to Registration", "English_lang")],
  ])
  .extra());
}

export default {
  About_1: About_1,
  About_2: About_2,
  About_3: About_3,
};