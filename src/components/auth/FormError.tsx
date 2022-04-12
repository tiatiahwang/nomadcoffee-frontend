import styled from 'styled-components';

const SFormError = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: tomato;
  margin: 5px 0px 10px 0px;
`;

interface Props {
  message?: string;
}

const FormError = ({ message }: Props) =>
  message === '' || !message ? null : <SFormError>{message}</SFormError>;

export default FormError;
