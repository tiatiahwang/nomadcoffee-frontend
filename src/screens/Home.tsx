import { logUserOut } from '../apollo/vars';

const Home = () => {
  return (
    <>
      <h1>TEST</h1>
      <button onClick={() => logUserOut()}>로그아웃</button>
    </>
  );
};

export default Home;
