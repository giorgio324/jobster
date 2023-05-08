import customFetch from '../../utils/axios';
import authHeader from '../../utils/authHeader';
import { checkForAuthorizedResponse } from '../../utils/axios';
export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url += `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    toast.error('Failed to get jobs');
    return checkForAuthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/jobs/stats', authHeader(thunkAPI));

    return resp.data;
  } catch (error) {
    return checkForAuthorizedResponse(error, thunkAPI);
  }
};
