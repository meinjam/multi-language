import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Bangla from '../language/bn.json';
import English from '../language/en.json';

const LanguageContext = React.createContext();

export default LanguageContext;

export function LanguageProvider(props) {
  const [defaultLanguage, setDefaultLanguage] = useState('en');

  useEffect(() => {
    const getDefaultLanguage = localStorage.getItem('defaultLanguage');

    if (getDefaultLanguage) {
      const parseLanguage = JSON.parse(getDefaultLanguage);
      if (parseLanguage === 'en' || parseLanguage === 'bn') {
        setDefaultLanguage(parseLanguage);
      } else {
        setDefaultLanguage('en');
      }
    }
  }, []);

  const changeLanguage = (language) => {
    setDefaultLanguage(language);
    localStorage.setItem('defaultLanguage', JSON.stringify(language));
  };

  return (
    <LanguageContext.Provider
      value={{
        defaultLanguage,
        changeLanguage,
      }}
    >
      <IntlProvider
        locale={defaultLanguage}
        messages={defaultLanguage === 'en' ? English : Bangla}
      >
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
