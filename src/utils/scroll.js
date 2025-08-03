// Fonction réutilisable pour le défilement
export const scrollToTop = (behavior = 'smooth', offset = 0) => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: offset,
      behavior: behavior
    });
  }
};



// export const scrollToElement = (element, offset = 80) => {
//   if (element && typeof window !== 'undefined') {
//     const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
//     window.scrollTo({
//       top,
//       behavior: 'smooth'
//     });
//   }
// };

// src/utils/scroll.js
export const scrollToElement = (element, offset = 80) => {
  if (element && typeof window !== 'undefined') {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};
// Correction : suppression du paramètre offset inutilisé
export const scrollAfterRender = (callback) => {
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      callback();
    }
  }, 300);
};
