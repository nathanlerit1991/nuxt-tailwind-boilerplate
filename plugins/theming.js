// customStyles.js
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

  const customStyles = generateStyles(customTheme);

  // Apply custom styles
  if (process.client) {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
  }
};
