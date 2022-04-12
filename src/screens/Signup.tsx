import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import { FatLink } from '../components/shared';
import PageTitle from '../components/PageTitle';
import {
  CreateAccountMutation,
  useCreateAccountMutation,
} from '../graphql/generated';
import FormError from '../components/auth/FormError';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

interface IForm {
  email: string;
  username: string;
  password: string;
  result?: boolean;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ mode: 'onChange' });
  const onCompleted = (data: CreateAccountMutation) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError('result', { message: error! });
    }
    const { username, password } = getValues();
    navigate('/', {
      state: { username, password, message: '계정이 생성되었습니다' },
    });
  };
  const [createAccount, { loading }] = useCreateAccountMutation({
    onCompleted,
  });

  //TODO: any 바꾸기
  const onValid = ({ email, username, password }: any) => {
    if (loading) return;
    createAccount({
      variables: {
        email,
        username,
        password,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="회원가입" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register('email', {
              required: 'email is required',
            })}
            name="email"
            type="text"
            placeholder="이메일"
            hasError={Boolean(errors?.email?.message)}
          />
          <FormError message={errors?.email?.message} />
          <Input
            {...register('username', {
              required: 'username is required',
              minLength: {
                value: 3,
                message: 'Your username is too short',
              },
            })}
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
            name="password"
            type="password"
            placeholder="비밀번호"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button type="submit" value="가입" />
          <FormError message={errors?.result?.message} />
        </form>
      </FormBox>
      <BottomBox cta="계정이 있으신가요?" linkText="로그인" link="/" />
    </AuthLayout>
  );
};

export default SignUp;
