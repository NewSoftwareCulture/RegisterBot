import Telegraf from 'telegraf';

const { Extra } = Telegraf;

const keyboard = (bot) => {
  
  bot.start((ctx) => {
    console.log('Пользователь:', ctx.from.id, ctx.from.first_name, ctx.from.last_name, ctx.from.username);
    // if (ctx.from.id === 263378642) return false;
    return ctx.reply('Добро пожаловать!', Extra.markup((markup) => {
      return markup.resize()
        .keyboard([
          ['🚨 Сигналы', '🎫 Подписка'],
          ['🎣 Рефералл', '⚙️ Настройки'],
          ['📈 Торговля'],
        ])
    }))
  });
}

export default keyboard;