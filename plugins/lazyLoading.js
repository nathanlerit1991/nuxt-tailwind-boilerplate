// plugins/lazyLoading.js
export default function ({ app }) {
    if (process.client) {
      console.log("PLUGIN")
      const lazyLoadImage = (image) => {
        if (image.getAttribute('data-src')) {
          image.src = image.getAttribute('data-src');
          image.removeAttribute('data-src');
        }
      };
  
      const lazyLoadingHandler = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            lazyLoadImage(image);
            observer.unobserve(image); // Stop observing once image is loaded
          }
        });
      };
  
      const lazyLoadingPlugin = () => {
        const images = document.querySelectorAll('img[data-src]');
        const options = {
          root: null, // Use viewport as root
          rootMargin: '0px', // No margin
          threshold: 0 // Trigger callback when even a single pixel is visible
        };
  
        const observer = new IntersectionObserver(lazyLoadingHandler, options);
        
        images.forEach(image => {
          observer.observe(image);
        });
      };
  
      // Execute the lazy loading plugin
      lazyLoadingPlugin();
    }
  };
  