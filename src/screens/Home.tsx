import Shop from '../components/feed/Shop';
import PageTitle from '../components/PageTitle';
import { useSeeCoffeeShopsQuery } from '../graphql/generated';

const Home = () => {
  const { data = {} } = useSeeCoffeeShopsQuery();
  return (
    <>
      <PageTitle title="홈" />
      {data?.seeCoffeeShops?.map((shop) => (
        <Shop key={shop?.id} shop={shop} />
      ))}
    </>
  );
};

export default Home;
