import { AsyncRouter } from 'express-async-router';
import Telegraf from 'telegraf';
import Promise from 'bluebird';
import { Logger } from '../utils';
import config from '../../config';
import DB from '../DB';

const router = AsyncRouter();
const { findAll } = DB;

router.get('/admin', async(req, res) => {
    Logger.GET('/admin');
    const content = await Promise.map(await findAll(), async(user) => {
      const isActive = user.stepStatus ? true : false;
      return `<tr><td>${user.userId}</td><td>${isActive}</td><td>${user.deeplink}</td><td>${user.stepStatus}</td></tr>`;
    });
    // const classTable = `table table-striped`;
    // const classTable = `table table-striped table-dark`;
    const classTable = `table table-bordered table-dark`;
    const headTable = `<thead><tr><th scope="col">User Id</th><th scope="col">Active</th><th scope="col">Deeplink</th><th scope="col">Status</th></tr></thead>`;
    const table = `<table class="${classTable}">${headTable}<tbody>${content.join('')}</tbody></table>`;
    const page = `<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link><title>Admin</title></head><body>${table}</body></html>`;
    return res.format({
      'text/html': () => {
        res.send(page)
      }
    });
});

export default router;