import styled from 'styled-components';
import { isLoggedInVar } from '../apollo';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;

const Home = () => {
  return (
    <Container>
      <Title onClick={() => isLoggedInVar(false)}>HOME</Title>
    </Container>
  );
};

export default Home;
