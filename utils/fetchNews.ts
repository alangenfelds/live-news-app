import { gql } from 'graphql-request';
import { sortNewsByImage } from './sort';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch function with NextJS 13 caching
  console.log(
    'Loading data from Mediastack API for category: ',
    category,
    keywords
  );
  const response = await fetch(
    'https://slutsk.stepzen.net/api/news-fetcher/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords,
        },
      }),
    }
  );

  const newsResponse = await response.json();

  // Sort by images vs not image present
  const data = sortNewsByImage(newsResponse.data.myQuery);

  // return result
  return data;
};

export default fetchNews;
