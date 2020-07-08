import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import bodyParser from 'body-parser';
import Telegraf from 'telegraf';
import { Logger } from './utils'

import inline from './inline-menu/index';
import routes from './routes';
import admin from './admin/index';
import config from '../config';

const uri = process.env.MONGO_URI || config.MONGO_URI;
const port = process.env.PORT || config.PORT;
const bot = new Telegraf(process.env.BOT_TOKEN || config.TOKEN);

mongoose.Promise = Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => { Logger.db('Connected!') })
  .catch(e => { Logger.ERROR(e) })

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes.deeplink);

app.get('/', async (req, res) => {
  Logger.GET('/');
  res.send('Hello World');
});

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('hipster', Telegraf.reply('λ'))

const { start, actions_eng, actions_deut } = inline;

start(bot);
actions_eng(bot);
actions_deut(bot);


admin(bot);

bot.launch(console.log('\nMagic bot has started!\n'));

app.listen(port, () => {
  Logger(`Example app listening on port ${port}!\n ________________________\n|                        |\n| http://localhost:${port}/ |\n|________________________|\n`);
});