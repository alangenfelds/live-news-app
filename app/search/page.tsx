import fetchNews from '../../utils/fetchNews';
import NewsList from '../NewsList';

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news = await fetchNews('general', searchParams?.term, true);
  return (
    <div>
      <h1 className="headerTitle">Search results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
