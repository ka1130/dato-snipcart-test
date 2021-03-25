import rootWrapper, { rootProvider } from './root-wrapper';

export const wrapPageElement = rootWrapper;
export const wrapRootElement = rootProvider;

document.addEventListener('snipcart.ready', function () {
  // console.dir(window.Snipcart);
  window.Snipcart.api.session.setLanguage('pl', {
    cart: {
      subtotal: 'Razem',
    },
    cart_summary: {
      subtotal: 'Suma',
    },
  });
});
