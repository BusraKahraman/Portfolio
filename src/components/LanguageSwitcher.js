import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='language-switcher'>
      <button onClick={handleChangeLanguage}>
        <span className='language-option'>
          {i18n.language === 'en' ? 'EN' : 'TR'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
