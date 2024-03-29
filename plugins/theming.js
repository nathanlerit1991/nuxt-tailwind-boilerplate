import customTheme from '@/theme/theme.json';

export default ({ app }) => {
  // Generate CSS based on custom configuration
  const generateStyles = (config) => {
    let styles = '';
    Object.entries(config).forEach(([className, properties]) => {
      styles += `.${className} {`;
      Object.entries(properties).forEach(([property, value]) => {
        styles += `${property}: ${value};`;
      });
      styles += `}`;
    });
    return styles;
  };

  let customStyles = generateStyles(customTheme);
  // REMOVE THE IF STATEMENT WHEN THERES A BACKEND AVAILABLE //
  if (process.client) {
    const storedThemeCSS = localStorage.getItem('themeCSS');
    if(storedThemeCSS) {
      // Parse storedThemeCSS back into an object
      const parsedThemeCSS = JSON.parse(storedThemeCSS);

      // Generate CSS styles from parsedThemeCSS object
      let parsedCustomStyles = '';
      Object.entries(parsedThemeCSS).forEach(([className, properties]) => {
        parsedCustomStyles += `.${className} {`;
        Object.entries(properties).forEach(([property, value]) => {
          parsedCustomStyles += `${property}: ${value};`;
        });
        parsedCustomStyles += `}`;
      });

      // Set the content of the styleElement to the parsed custom styles
      const styleElement = document.createElement('style');
      styleElement.textContent = parsedCustomStyles;
      document.head.appendChild(styleElement);
    }
    // END REMOVE THE IF STATEMENT WHEN THERES A BACKEND AVAILABLE //
    else {
      const styleElement = document.createElement('style');
      styleElement.textContent = customStyles;
      document.head.appendChild(styleElement);
    }
  }
};
