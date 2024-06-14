// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      recipeDetails: 'Recipe Details',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
    },
  },
  pt: {
    translation: {
      recipeDetails: 'Detalhes da Receita',
      ingredients: 'Ingredientes',
      instructions: 'Instruções',
    },
  },
};

i18n
  .use(initReactI18next) // inicializa o i18next para o React
  .init({
    resources,
    lng: 'pt', // idioma padrão
    keySeparator: false, // desativa o separador de chaves
    interpolation: {
      escapeValue: false, // reage ao valor escapado
    },
  });

export default i18n;
