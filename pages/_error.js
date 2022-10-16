import NextErrorComponent from 'next/error';

const CustomErrorComponent = props => {
  return <NextErrorComponent statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async contextData => {
  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;