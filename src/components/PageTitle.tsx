import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title} | NomadCoffee</title>
    </Helmet>
  );
};

export default PageTitle;
