import { User } from '../models';
import { Logger } from '../utils';

const find = async(args) => {
  // console.log(args);
  const userId = args.userId || 0;
  const deeplink = args.deeplink || '';
  // console.log(!!'')
  // console.log(!!0)
  // console.log(deeplink, stepStatus, userId)
  
  const user = userId ? await User.findOne({userId: userId}) : await User.findOne({deeplink: deeplink});
  return user ? user : false;



  // if(!user) 
  //     return false;
  // };
  // return user;
};

export default find;