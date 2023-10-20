import React from 'react';
import { Error } from '@mui/icons-material';

interface Props {
  message?: string;
}
const ErrorMessage: React.FunctionComponent<Props> = (props) => {
  const { message } = props;

  return (
    <div className="layout margin-top">
      <Error color="error" sx={{ fontSize: '5rem' }}></Error>
      <span>Something went wrong: {message}</span>
    </div>
  );
};
export default ErrorMessage;
