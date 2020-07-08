import Telegraf from 'telegraf';
const { Markup } = Telegraf;

const text_1 = `ℹ️ 1/3\n\nÜber mich und warum diese Gruppe...\n\nMein Name ist Florian, ich bin 34 Jahre alt und seit über 10 Jahren in den Finanzmärkten aktiv. Während dieser Zeit konnte ich sehr umfangreiche Erfahrungen im Trading sammeln. Auch bei mir stand ganz am Anfang zunächst der Wunsch nach finanzieller Unabhängigkeit. Als abhängiger Arbeitnehmer habe ich zwar bereits in Beruf und Hobby Erfahrungen im Bereich der Finanzmärkte sammeln können, aber die Perspektiven waren einfach zu begrenzt, das Gehalt zu niedrig und mein Wissen sowie Engagement wurde von meinem Arbeitgeber einfach nicht ausreichend geschätzt.`;
const text_2 = `ℹ️ 2/3\n\nÜber mich und warum diese Gruppe...\n\nSomit galt es für mich, meinen eigenen Weg zu entwickeln und zielstrebig zu gehen, um damit diese Blockaden des Erfolgs zu durchbrechen. CFD-Trading eignet sich dazu hervorragend und beherbegt ein erhebliches Potential zu Generierung großer Mengen an Kapital mit geringen Einsätzen. Um mein Ziel zu verfolgen, habe ich neben dem Job sehr viele Tage und schlaflose Nächte investiert. Mit der Zeit habe ich jedoch immer bessere Trading-Strategien entwickeln und immer erfolgreicher und gewinnbringender anwenden können, sodass es mir nach einiger Zeit möglich wurde, mich von meinem damaligen Arbeitgeber endgültig zu verabschieden und mein eigenes Ding durchzuziehen. Mittlerweile habe ich sogar ein Team rekrutiert, das mich dabei unterstützt, meine Strategien weiter zu verbessern und im großen Umfang profitabel umzusetzen.`;
const text_3 = `ℹ️ 3/3\n\nÜber mich und warum diese Gruppe...\n\nDa ich nicht reich geboren wurde, mir alles hart erarbeiten musste und weiß, wie schwer es sein kann, auf den Weg des Erfolgs zu kommen, ist es mir ein persönliches Anliegen, auch Anderen mit meinen Trading-Strategien zu einem besseren Leben zu verhelfen und diese vor Verlusten zu bewahren. Schließlich ist Trading kein Geheimnis, jeder kann es machen und die Börse bietet ein ausreichendes Gewinnpotential für sehr viele Trader. Aus diesen Gründen habe ich die Trading Group ins Leben gerufen und kann ganz nebenbei auch anhand des Feedbacks der Mitglieder meine Strategien noch weiter verbessern, was am Ende allen Mitgliedern zum Vorteil erwächst. 💰 📈`;

const About_1 = (ctx) =>  {
  ctx.reply(text_1, Markup.inlineKeyboard([
    [Markup.callbackButton("Weiter ➡️", "About_2")],
    [Markup.callbackButton("↩️ Zurück zur Anmeldung", "Deutsch_lang")],
  ])
  .extra());
};

const About_2 = (ctx) =>  {
  ctx.reply(text_2, Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Zurück", "About_1"), Markup.callbackButton("Weiter ➡️", "About_3")],
    [Markup.callbackButton("↩️ Zurück zur Anmeldung", "Deutsch_lang")],
  ])
  .extra());
}

const About_3 = (ctx) =>  {
  ctx.reply(text_3, Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Zurück", "About_2")],
    [Markup.callbackButton("↩️ Zurück zur Anmeldung", "Deutsch_lang")],
  ])
  .extra());
}

export default {
  About_1: About_1,
  About_2: About_2,
  About_3: About_3,
};