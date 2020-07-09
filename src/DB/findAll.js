import { User } from '../models';
import { Logger } from '../utils';

const findAll = async(page = 1, limit = 5) => {
  const users = await User.find().skip(limit * (page - 1)).limit(limit);
  return users ? users : false;
};

export default findAll;