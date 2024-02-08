import { User } from '../models';

export const FindUser = async (id: string | undefined, email?: string) => {
  if (email) {
    return await User.findOne({ email });
  } else {
    return await User.findById(id);
  }
}