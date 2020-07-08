import Telegraf from 'telegraf';
import fs from 'fs';

const { Markup } = Telegraf;

const text = [];
text[1] = `🎓 1/16\nTrading Grundlagen & Erklärung\n- Inhaltsverzeichnis:`;
text[2] = `🎓 2/16\nWas ist CFD-Trading?\n\nCFD bedeutet "Contract for Difference". CFDs sind also Handelsverträge auf Grund von Kursdifferenz. Sie sind eine Möglichkeit mit geringem Einsatz höhere Gewinne zu erzielen, indem auf Kursschwankungen gesetzt wird. Der Gewinn hängt somit von der Differenz zum Kurspreis zum Zeitpunkt des Trades ab. Auf diese Weise können Währungspaare, Aktien, Waren oder Indizes gehandelt werden. Selbstverständlich bietet unser empfohlener und geprüfter, regulierter Broker auch den Handel von Kryptowährungen an.`;
text[3] = `🎓 3/16\nWas ist CFD-Trading?\n\nBei der Eröffnung eines CFD-Trades wird somit lediglich auf einen steigenden oder fallenden Kurs gesetzt. Ein entscheidendes Merkmal des CFD-Trades ist der Hebel. Dieser fungiert als ein Multiplikator. Das bedeutet beispielsweise: Wird das Währungspaar EUR/USD mit einem Einsatz von 100 Euro gekauft, würde ein Kursanstieg von 10% einen Gewinn von 10 Euro bedeuten. Wurde ein Hebel von 10 gewählt, so würde der Gewinn 100% betragen und wäre also mit 100 Euro verzehnfacht. Mit dem Hebel von 10 hätte man also bereits sein eingesetztes Kapital verdoppelt. Entsprechend wäre der Gewinn bei einem Hebel von 100 sogar bei 1000 Euro.`;
text[4] = `🎓 4/16\nWas ist CFD-Trading?\n\nVon der Hebelwirkung lässt sich bereits der entscheidende Vorteil von CFDs ableiten: Mit CFDs erhält jeder Trader die Möglichkeit, mit geringen Einsätzen eine größere Geldmenge zu handeln und somit den potentiellen Gewinn zu vervielfachen. Trading ist dadurch auch bereits mit kleineren Budgets lukrativ. Zudem entfallen die Provisionen, wie sie beim Offline-Handel von Maklern und Banken typisch sind. Die Broker im CFD-Handel erhalten meist eine minimale Kommission zur Eröffnung des Trades (den sog. Spread). Zudem bieten einige Broker auch eine direkt berechnete prozentuale Kommission auf Basis des Volumens des Trades an, was die Transparenz des Handels noch weiter erhöht. Die Trades werden zudem in Echtzeit ausgeführt, wodurch maximale Sicherheit und Genauigkeit gewährleistet wird.`;
text[5] = `🎓 5/16\nDie Grundlagen \n- Grundprinizpien des Tradings:\n\n❗️ Wir traden immer mit dem Trend.\n\n❗️ Investiere nie mehr als 20% deines Kapitals in einen Trade.\n\n❗️ Qualität geht vor Quantität.\n\n❗️ Verluste gehören zum Traden dazu. Bewahre Ruhe und handle nicht überstürzt.\n\n❗️ Trade mit Disziplin, Geduld und Ausdauer. Reich über Nacht zu werden, sollte nicht dein Ziel sein!`;
text[6] = `🎓 6/16\nDie Grundlagen \n- Der Trend:\n\nObwohl der Kurs regelmäßigen Schwankungen unterliegt, lässt der Trend eindeutig erkennen, in welche Richtung der weitere Kursverlauf gehen wird. Es gibt hierbei einen Aufwärts- oder einen Abwärtstrend. In der Chartanalyse gibt es dafür das Hilfsmittel des sog. Trendkanals. Der Trendkanal (siehe Bild) zeigt eindeutig die Trendrichtung an und ermöglicht es, anhand der Berührungen des Kanals kleine Ping-Pong-Trends innerhalb des Kanals gewinnbringend mitzutraden. Zudem können Durchbrüche in die entgegengesetzte Richtung des Trends eine Trendwende andeuten. Zur Erhöhung der Sicherheit eines Trades gilt es, stets mit dem Trend - also in Trendrichtung - zu traden.`;
text[7] = `🎓 7/16\nDie Grundlagen \n- Kaufen und Verkaufen:\n\nDie essentiellen Aktionen beim Traden sind der Kauf und Verkauf eines Handelsinstruments, welches neben u.a. Währungen, Aktien, Indizes auch Kryptowährungen sein können. Oftmals wird Verkaufen durch Rot dargestellt und Kaufen durch Grün. Mit der Aktion "Verkaufen" wird auf einen fallenden Kurs gesetzt und mit der Aktion "Kaufen" auf einen steigenden Kurs. Unter Tradern wird Verkaufen zudem als SHORT und Kaufen als LONG bezeichnet. In den nachfolgenden Kapiteln zu den Trading-Strategien verwende ich diese beiden Bezeichnungen. Für jeden Trade ist es wichtig, darauf zu achten, welche der beiden Aktionen anhand der Prognose für den Kursverlauf ausgeführt wird.`;
text[8] = `🎓 8/16\nDie Grundlagen \n- SL / TP:\n\nSL bedeutet "Stop Loss" und dient der Begrenzung von Verlusten. Der Trader kann mit dem SL festlegen, bis zu welchem Kurspreis oder auch bis zu welcher prozentualen Differenz sich der Kurs in die entgegensetzte der von ihm prognostizierten Richtung bewegen darf. Sobald der festgelegte SL erreicht wurde, wird der Trade automatisch geschlossen. Es besteht somit kein Risiko, die gesamte Einlage zu verlieren. Der SL wird bei unserer Trading Group, sofern erforderlich, auch angegeben und kann einfach übernommen werden. TP stellt das Gegenteil zu SL dar und bedeutet "Take Profit". Damit wird also die Grenze im Gewinn bestimmt, bei der ein Trade automatisch geschlossen wird und der erreichte Gewinn mitgenommen wird. Der Trader kann damit verhindern, einen erreichten Gewinn zu verlieren, falls er den perfekten Zeitpunkt zur Schließung des Trades verpasst. Den perfekten Zeitpunkt zu erwischen, kann einerseits durch Kursschwankungen erschwert werden, jedoch auch, wenn man nicht laufend den Kurs verfolgen kann.`;
text[9] = `🎓 9/16\nDie Grundlagen \n- Die Signale in der Gruppe:\n\nIn der Trading Group traden wir alle gemeinsam und ich teile ich meine Trading-Aktionen mit allen - also wann ich einen Trade eröffne, wie ich ihn über einen SL absichere und wann ich ihn schließe. Diese Signale kannst du direkt übernehmen oder auch als Teil deiner eigenen Strategie bewerten. Sie sind somit nur Empfehlungen für einen möglichst effektiven Trade.\nEin solches Signal sieht beispielsweise folgendermaßen aus:`;
text[10] = `🎓 10/16\nDie Grundlagen \n- Der Broker:\n\nBei dem von uns empfohlenen und geprüften Broker ist ein Handel sehr einfach und sicher. Nach der Anmeldung siehst du in deinem Brokerkonto einige Handelsinstrumente auf der linken Seite und daneben einen geöffneten Chart. Das jeweilige Handelsinstrument gebe ich in meinen Signalen stets an. Wenn du also eines erhältst, siehst du dort, dass beispielsweise "EUR/USD" gekauft oder verkauft wird. Sodann könnt ihr in eurem Brokerkonto dieses Handelsinstrument entweder direkt aus der Liste oder über die Suche anklicken und danach durch einen Klick auf "Handelsposition öffnen" (oder in der App werden direkt "VERKAUFEN" und "KAUFEN" angezeigt) die Übersicht zur Erstellung eines Trades öffnen. Dort gibst du dann einfach den einzusetzenden Handelsbetrag sowie den Multiplikator an und wählst die Trading-Aktion (Kaufen/LONG oder Verkaufen/SHORT) gemäß Signal und deiner eigenen Einschätzung.\n\nNachdem du einen Trade geöffnet hast, ist es wichtig, diesen im Auge zu behalten und bei Erreichen eines gewünschten Kurspreises auch wieder zu schließen, sofern kein TP gesetzt wurde.\nGleichermaßen gilt das natürlich auch im Falle eines Verlustes, wenn kein SL gesetzt wurde.`;
text[11] = `🎓 11/16\nTrading-Strategien\n\nÜber die Jahre habe ich sehr lukrative Strategien entwickelt, die es mit der entsprechenden Erfahrung und Disziplin ermöglichen, mit Profit zu traden und so eine finanzielle Unabhängigkeit aufzubauen. Diese Strategien, die aus komplexen mathematischen Algorithmen, technischen Analysen, verschiedenen Indikatoren und Regeln bestehen, im Detail zu erläutern, ist aufgrund der Komplexität und der notwendigen jahrelangen Erfahrung hier leider nicht möglich. Jedoch ist es möglich, die Ergebnisse meiner Strategien im Rahmen von Signalen, Analysen und Empfehlungen mit der Gruppe zu teilen. Im Folgenden möchte ich dir einige grundlegende Indikatoren und Strategien vorstellen, die dich bei deinen Trades unterstützen können.`;
text[12] = `🎓 12/16\nTrading-Strategien \n- Bollinger-Streifen:\n\nDer Bollinger-Streifen ist einer der verbreitetsten Indikatoren der technischen Chartanalyse. Dieser Indikator ist gleichermaßen simpel und dennoch effektiv im CFD-Trading. Er besteht aus drei Linien. Einer Mittellinie und zwei Begrenzungslinien. Bewegt sich der Kurs nach unten zu unteren Linie, so gilt es auf steigende Kurse zu setzen (LONG) und bewegt sich der Kurs zu oberen Linie, gilt es auf fallende Kurse zu setzen (SHORT). Durchbrüche sind ein sehr starkes Anzeichen für Trendwenden.`;
text[13] = `🎓 13/16\nTrading-Strategien \n- Index der Relativkraft:\n\nUnter erfahrenen Tradern ist dieser Indikator unter der Abkürzung RSI bekannt. Mit dem RSI-Wert lässt sich bestimmen, wo das Finanzaktiv über- oder unterschätzt bzw. über- oder unterkauft ist. Allgemein gilt bei diesem Indikator daher: Wenn der RSI-Wert über 70 steigt, gilt es auf SHORT zu gehen sowie bei einer Unterschreitung des RSI-Wertes von 30 auf LONG zu gehen.`;
text[14] = `🎓 14/16\nTrading-Strategien \n- PARABOLIC SAR:\n\nDieser Indikator ist sehr wenig verbreitet, jedoch durchaus  effizient im Rahmen des CFD-Tradings. Er sucht und markiert jene Punkte, nach denen die Veränderungen in der Preisbewegung stattfinden. Dazu stellt er die Punkte über und unter dem Kurspreis dar. Liegen die Punkte über dem Kurspreis, so deutet dies auf fallende Kurse hin und liegen die Punkte unter dem Kurspreis, deutet dies auf steigende Kurse hin. Eine darauf basierende Strategie sieht nun entsprechend vor, dass der Trade zum Zeitpunkt der Entstehung neuer Punkte gesetzt wird. Das bedeutet, wenn der Kurs zuvor gefallen ist (Punkte wurden über dem Kurspreis gesetzt) und der Punkt nun UNTER dem Kurspreis gesetzt wird, gilt es auf LONG zu gehen. Im Gegensatz dazu gilt es, auf SHORT zu gehen, wenn der Punkt nach einem steigenden Kurs nun ÜBER dem Kurspreis gesetzt wird. In Strategien wird dieser Indikator sehr oft mit dem nachfolgend beschriebenen MACD-Indikator verwendet.`;
text[15] = `🎓 15/16\nTrading-Strategien \n- MACD:\n\nMit Hilfe dieses Indikators wird die Annäherung und die Differenzierung des Kurspreises bestimmt. Dieser Indikator liefert viele Signale, kann relativ einfach interpretiert werden und ist daher Teil vieler Strategien. Eine grundsätzliche Interpretation lässt sich aus dem Übergang über der Nulllinie ableiten. Sobald der Balken des Balkendiagramms die Nulllinie von oben nach unten durchschreitet, gilt es auf SHORT zu setzen. Durchschreitet das Balkendiagramm die Nulllinie hingegen von unten nach oben, so gilt es auf LONG zu setzen.`;
text[16] = `🎓 16/16\n\nUnd denke stets daran:\n\n❗️ Wir traden immer mit dem Trend!\n\nNun aber viel Erfolg und Spass beim Traden! 💰👍`;

const BasicsAndTutorial_1 = (ctx) =>  {
  ctx.reply(text[1], Markup.inlineKeyboard([
    [Markup.callbackButton("1. Was ist CFD-Trading?", "Basics_and_Tutorial_2")],
    [Markup.callbackButton("2. Die Grundlagen", "Basics_and_Tutorial_5")],
    [Markup.callbackButton("3. Trading-Strategien", "Basics_and_Tutorial_11")],
    [Markup.callbackButton("↩️ Zurück zur Anmeldung", "Deutsch_lang")],
  ])
  .extra());
};

const BasicsAndTutorial_n = (ctx, numb) =>  {
  if ([6, 9, 12, 13, 14, 15].includes(numb)){
    ctx.reply(text[numb]);
    ctx.replyWithPhoto({ source: fs.readFileSync(`./src/media/BasicsAndTutorial_${numb}.jpg`) }, Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Zurück", `Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton("Weiter ➡️", `Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton("🎓 Inhaltsverzeichnis", "Basics_and_Tutorial_1")],
    ])
    .extra()); 
  } else {
    ctx.reply(text[numb], Markup.inlineKeyboard([
      [Markup.callbackButton("⬅️ Zurück", `Basics_and_Tutorial_${numb - 1}`), Markup.callbackButton("Weiter ➡️", `Basics_and_Tutorial_${numb + 1}`)],
      [Markup.callbackButton("🎓 Inhaltsverzeichnis", "Basics_and_Tutorial_1")],
    ])
    .extra());
  };
};

const BasicsAndTutorial_16 = (ctx) =>  {
  ctx.reply(text[16], Markup.inlineKeyboard([
    [Markup.callbackButton("⬅️ Zurück", `Basics_and_Tutorial_15`)],
    [Markup.callbackButton("🎓 Inhaltsverzeichnis", "Basics_and_Tutorial_1")],
    [Markup.callbackButton("↩️ Zurück zur Anmeldungn", "Deutsch_lang")],
  ])
  .extra());
};

export default {
  BasicsAndTutorial_1: BasicsAndTutorial_1,
  BasicsAndTutorial_n: BasicsAndTutorial_n,
  BasicsAndTutorial_16: BasicsAndTutorial_16,
};