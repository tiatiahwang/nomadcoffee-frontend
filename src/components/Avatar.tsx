import styled from 'styled-components';

const SAvatar = styled.div<{ size: Size }>`
  width: ${({ size }) => (size === 'lg' ? '30px' : '25px')};
  height: ${({ size }) => (size === 'lg' ? '30px' : '25px')};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fontColor};
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 100%;
`;

type Size = 'sm' | 'lg';

interface Props {
  url: string | null | undefined;
  size?: Size;
}

const Avatar = ({ url, size = 'sm' }: Props) => {
  return (
    <SAvatar size={size}>
      {Boolean(url) ? <Img src={url || ''} alt="프로필사진" /> : null}
    </SAvatar>
  );
};

export default Avatar;
