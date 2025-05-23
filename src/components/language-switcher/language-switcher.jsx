import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },
    { code: 'sd', name: 'سنڌي' },
    { code: 'ps', name: 'پشتو' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('languagePreferenceSet', 'true');
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-brand dark:hover:text-brand transition-colors">
        <FaGlobe className="w-5 h-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              i18n.language === lang.code
                ? 'text-brand font-medium'
                : 'text-gray-700 dark:text-gray-200'
            } ${lang.code === languages[0].code ? 'rounded-t-lg' : ''} ${
              lang.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 