import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/6803e7997f5f42190ba75b55/1ip7k1cjf';
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Add basic styling
    const style = document.createElement('style');
    style.textContent = `
      .tawk-min-container {
        position: fixed !important;
        z-index: 1000 !important;
      }
      .tawk-max-container {
        position: fixed !important;
        z-index: 1000 !important;
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default TawkToWidget;
