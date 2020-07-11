import mongoose from 'mongoose';
import { pick } from 'lodash';

const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: {
    type: Number,
  },
  deeplink: {
    type: String,
  },
  stepStatus: {
    type: String,
  },
}, {
  timestamps: true,
});

UserSchema.methods.toJSON = function () {
  return pick(this, ['userId', 'deeplink', 'stepStatus']);
};

export default mongoose.model('User', UserSchema);