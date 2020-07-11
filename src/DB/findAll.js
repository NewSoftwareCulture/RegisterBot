import { User } from '../models';
import { Logger } from '../utils';

const findAll = async(page, limit = 5) => {
  const users = page ? await User.find().skip(limit * (page - 1)).limit(limit) : await User.find();
  return users ? users : false;
};

export default findAll;