import axios from 'axios';
import { useQuery } from 'react-query';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const getProducts = async () => {
    const { data } = await axios.get(url);

    return paginate(data);
  };

  const { data, isLoading } = useQuery('products', () => getProducts(), {
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
