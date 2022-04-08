import styled from 'styled-components';
import { isLoggedInVar } from '../apollo';

const Container = styled.div``;

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;

const Login = () => {
  return (
    <Container>
      <Title onClick={() => isLoggedInVar(true)}>Login</Title>
    </Container>
  );
};

export default Login;
