import { User } from '../models';
import { Logger } from '../utils';

const find = async(args) => {
  const userId = args.userId || 0;
  const deeplink = args.deeplink || '';
  const user = userId ? await User.findOne({userId: userId}) : await User.findOne({deeplink: deeplink});
  return user ? user : false;
};

export default find;