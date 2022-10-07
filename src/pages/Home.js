import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  return (
    <section className='homepage'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>
              <FormattedMessage id='homePageTitle' />
            </h1>
            {/* <h1>
              <FormattedMessage id='name' />
            </h1> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
