import mongoose from 'mongoose';
import _ from 'lodash';

const { Schema } = mongoose;

const UserSchema = new Schema({
  // userId: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
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
  return _.pick(this, ['userId', 'deeplink', 'stepStatus']);
};

export default mongoose.model('User', UserSchema);