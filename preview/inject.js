// DevTools snippet for trying a skin on the live page, without Stylus.
//
// 1. Open the target site in the browser.
// 2. Open DevTools and switch to the Console.
// 3. Paste the rules from the skin into the css constant below. Skip the
//    @-moz-document guard, because only Stylus applies it.
// 4. Run the snippet.
// 5. Remove the styles again with:
//    document.querySelector('#css-skin-preview')?.remove();

const css = `
/* paste skin rules here */
`;

let style = document.querySelector('#css-skin-preview');

if (!style) {
  style = document.createElement('style');
  style.id = 'css-skin-preview';
  document.head.append(style);
}

style.textContent = css;
