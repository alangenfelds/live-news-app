import React from 'react';
import NewsList from './NewsList';

import { categories } from '../constants';
import fetchNews from '../utils/fetchNews';

import response from '../response.json';

const HomePage = async () => {
  // const news: NewsResponse = await fetchNews(categories.join(','));
  const news: NewsResponse = response;

  return (
    <div className="text-4xl">
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
