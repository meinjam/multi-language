import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import Switch from 'react-switch';

const LanguageSwitch = () => {
  const { defaultLanguage, changeLanguage } = useContext(LanguageContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleLanguage = (checked) => {
    if (checked) {
      changeLanguage('bn');
    } else {
      changeLanguage('en');
    }
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (defaultLanguage === 'en') {
      setIsChecked(false);
    } else if (defaultLanguage === 'bn') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [defaultLanguage]);

  return (
    <Switch
      onChange={handleLanguage}
      checked={isChecked}
      uncheckedIcon={<div style={first}>বাং</div>}
      checkedIcon={<div style={second}>en</div>}
      uncheckedHandleIcon={<div style={third}>en</div>}
      checkedHandleIcon={<div style={fourth}>বাং</div>}
      onColor='#2693e6'
      onHandleColor='#fff'
      offColor='#2693e6'
      offHandleColor='#fff'
      className='language-checkbox'
    />
  );
};

export default LanguageSwitch;

const first = {
  position: 'absolute',
  top: 2,
  left: 5,
  color: '#fff',
};

const second = {
  position: 'absolute',
  top: 1,
  left: 6,
  color: '#fff',
};

const third = {
  position: 'absolute',
  top: 0,
  left: 3,
};

const fourth = {
  position: 'absolute',
  top: 1,
  left: 4,
};
