import { categories } from '../../../constants';
import fetchNews from '../../../utils/fetchNews';
import NewsList from '../../NewsList';

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params }: Props) => {
  const news = await fetchNews(params.category);
  return (
    <div>
      <h1 className="headerTitle">{params.category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategoryPage;

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}
