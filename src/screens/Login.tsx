import styled from 'styled-components';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Seperator';
import BottomBox from '../components/auth/BottomBox';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';
import { LoginMutation, useLoginMutation } from '../graphql/generated';
import FormError from '../components/auth/FormError';
import { isDarkModeVar, logUserIn } from '../apollo/vars';
import { useLocation } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

const GithubLogin = styled.div<{ dark: boolean }>`
  color: ${(props) => (props.dark ? props.theme.fontColor : '#0e1117')};
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Notification = styled.div`
  color: #2ecc71;
`;

interface IForm {
  username: string;
  password: string;
  result?: boolean;
}

interface ILocation {
  state: {
    username: string;
    password: string;
    message: string;
  };
}

const Login = () => {
  const dark = useReactiveVar(isDarkModeVar);
  const { state } = useLocation() as ILocation;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      username: state?.username || '',
      password: state?.password || '',
    },
  });
  const onCompleted = (data: LoginMutation) => {
    const {
      login: { ok, token, error },
    } = data;
    if (!ok) {
      return setError('result', { message: error! });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useLoginMutation({ onCompleted });

  const onSubmitValid = ({ username, password }: IForm) => {
    if (loading) return;
    login({
      variables: {
        username,
        password,
      },
    });
  };

  const clearLoginError = () => {
    clearErrors('result');
  };

  return (
    <AuthLayout>
      <PageTitle title="로그인" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <Notification>{state?.message}</Notification>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('username', {
              required: 'username is required',
              minLength: {
                value: 3,
                message: 'Your username is too short',
              },
            })}
            onChange={clearLoginError}
            name="username"
            type="text"
            placeholder="사용자 이름"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            {...register('password', {
              required: 'password is required',
            })}
            onChange={clearLoginError}
            name="password"
            type="password"
            placeholder="비밀번호"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button type="submit" value={loading ? '로딩중' : '로그인'} />
          <FormError message={errors?.result?.message} />
        </form>
        <Separator />
        <GithubLogin dark={dark}>
          <FontAwesomeIcon icon={faGithub} />
          <span>깃헙 로그인</span>
        </GithubLogin>
      </FormBox>
      <BottomBox cta="계정이 없으신가요?" linkText="가입하기" link="/sign-up" />
    </AuthLayout>
  );
};

export default Login;
