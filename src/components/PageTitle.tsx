import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return <Helmet>{title} | Instaclone</Helmet>;
};

export default PageTitle;
