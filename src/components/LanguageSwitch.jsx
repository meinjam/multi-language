import React, { useContext, useState } from 'react';
import LanguageContext from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { defaultLanguage, changeLanguage } = useContext(LanguageContext);
  const [isChecked] = useState(false);

  const handleLanguage = (e) => {
    if (e.target.checked) {
      changeLanguage('bn');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <div>
      <span>en</span>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          onChange={handleLanguage}
          value={isChecked}
          checked={defaultLanguage === 'bn' ? 'checked' : ''}
        />
        {/* <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
          Default switch checkbox input
        </label> */}
      </div>
      <span>bn</span>
    </div>
  );
};

export default LanguageSwitch;
