import axios from 'axios';
import { useQuery } from 'react-query';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
  const getProducts = async () => {
    const { data } = await axios.get(url);
    return data;
  };

  const { data, isLoading } = useQuery('products', getProducts, {
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
