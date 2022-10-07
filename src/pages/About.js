import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <section className='homepage'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>
              <FormattedMessage id='aboutPageTitle' />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
