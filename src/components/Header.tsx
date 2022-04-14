import { useReactiveVar } from '@apollo/client';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedInVar } from '../apollo/vars';
import useUser from '../hooks/useUser';
import Avatar from './Avatar';

const SHeader = styled.div`
  width: 100%auto;
  border-bottom: 1px solid rgb(219, 219, 219);
  background-color: ${({ theme }) => theme.bgColor};
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 15px;
  cursor: pointer;
`;

const Button = styled.span`
  background-color: #decdb4;
  border-radius: 4px;
  padding: 4px 15px;
  font-weight: 600;
`;

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const loggedInUser = useUser();

  return (
    <SHeader>
      <Wrapper>
        <Column>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </Column>
        <Column>
          {isLoggedIn ? (
            <IconsContainer>
              <Icon>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </Icon>
              <Icon>
                <Link to="/add">
                  <FontAwesomeIcon icon={faPlusCircle} size="lg" />
                </Link>
              </Icon>
              <Icon>
                <Avatar url={loggedInUser?.avatarURL || ''} />
              </Icon>
            </IconsContainer>
          ) : (
            <Link to="/">
              <Button>로그인</Button>
            </Link>
          )}
        </Column>
      </Wrapper>
    </SHeader>
  );
};

export default Header;
