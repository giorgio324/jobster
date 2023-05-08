import axios from 'axios';
import { clearStore } from '../features/user/userSlice';

const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export const checkForAuthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('unauthorized or session expired');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
