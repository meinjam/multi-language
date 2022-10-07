import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <section className='homepage'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Homepage</h1>
            <div>
              <button type='primary' onClick={() => changeLanguage('en')}>
                Change Language to ENGLISH
              </button>
            </div>
            <div>
              <button type='danger' onClick={() => changeLanguage('bn')}>
                Change Language to BANGLA
              </button>
            </div>
            <h1>
              <FormattedMessage id='name' />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
