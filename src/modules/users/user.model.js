import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { passwordReg } from './user.validations';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  firstName: {
    type: String,
    required: [true, 'Firstname is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Password id required!'],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, 'Username id required!'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: 'Not a valid password!',
    },
  },
});

export default mongoose.model('User', UserSchema);
