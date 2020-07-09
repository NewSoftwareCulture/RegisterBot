import { User } from '../models';
import { Logger } from '../utils';

const saveOrUpd = async(args) => {
  const deeplink = args.deeplink || '';
  const stepStatus = args.stepStatus || ''; 
  const userId = args.userId || 0;
  const user = userId ? await User.findOne({userId: userId}) : await User.findOne({deeplink: deeplink});
  if(!user) {
      const newUser = new User({
          userId,
          deeplink,
          stepStatus,
      });
      await newUser.save();
      Logger.db('Status created!');
  };
  userId ? 
  await User.findOneAndUpdate({userId: userId}, { stepStatus }) : 
  await User.findOneAndUpdate({deeplink: deeplink}, { stepStatus });
  Logger.db('Status updated!');
};

export default saveOrUpd;