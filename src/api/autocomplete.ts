import { AxiosError } from 'axios';
import apiRequest from './index';

const RESOURCE = '/search';

export const getAutocompleteList = async (
  InputText: string,
  page = 1,
  limit = 10,
) => {
  const params = {
    q: InputText,
    page,
    limit,
  };

  try {
    const response = await apiRequest.get(`${RESOURCE}`, { params });

    return response;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};
