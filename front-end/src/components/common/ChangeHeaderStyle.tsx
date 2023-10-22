import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeHeaderStyle } from '../../redux/reducers/headerReducer';

interface Props {}
const ChangeHeaderStyle: React.FunctionComponent<PropsWithChildren<Props>> = (
  props,
) => {
  const { children } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderStyle('header'));
  }, []);

  return <>{children}</>;
};

export default ChangeHeaderStyle;
