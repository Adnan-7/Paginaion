import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = (page) => {
  const getProducts = async (page) => {
    const { data } = await axios.get(url);

    return paginate(data);
  };

  const { data, isLoading } = useQuery(
    ['products', page],
    () => getProducts(page),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return { data, isLoading };
};
