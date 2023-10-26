import React, { useEffect } from 'react';
import ChangeHeaderStyle from './common/ChangeHeaderStyle';
import { useDispatch } from 'react-redux';
import { changeHeaderStyle } from '../redux/reducers/headerReducer';
import Button from './common/Button';
import { East } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      dispatch(changeHeaderStyle('header'));
    } else {
      dispatch(changeHeaderStyle('header before-scroll'));
    }
  };

  useEffect(() => {
    dispatch(changeHeaderStyle('header before-scroll'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <ChangeHeaderStyle>
      <div className="home">
        <div>
          <h1>Better choices, better prices!</h1>
          <Button
            label={'View Products'}
            onClick={() => navigate('/products')}
            className="btn contained"
          >
            <East />
          </Button>
        </div>
      </div>
      <div className="something">Coming soon !</div>
    </ChangeHeaderStyle>
  );
};

export default Home;
