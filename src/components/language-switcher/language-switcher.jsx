import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaTimes } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },
    { code: 'sd', name: 'سنڌي' },
    { code: 'ps', name: 'پشتو' },
  ];

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('languagePreferenceSet');
    if (!hasSelectedLanguage) {
      setShowPopup(true);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('languagePreferenceSet', 'true');
    setShowPopup(false);
  };

  return (
    <>
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

      {/* Language Preference Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{ zIndex: 99999 }}>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-[90%] sm:w-full mx-auto">
            <button 
              onClick={() => {
                setShowPopup(false);
                localStorage.setItem('languagePreferenceSet', 'true');
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Select Your Language
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Please choose your preferred language for the best experience
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors
                    ${i18n.language === lang.code
                      ? 'border-brand bg-brand/10 text-brand'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }
                  `}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher; 