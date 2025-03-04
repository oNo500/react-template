import { Helmet, HelmetData } from "@dr.pogodin/react-helmet";
type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | React 19` : undefined}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
