import {DatePicker} from '../date-input.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('date-input', () => {
  test('is defined', () => {
    const el = document.createElement('date-input');
    assert.instanceOf(el, DatePicker);
  });

//   test('renders with default values', async () => {
//     const el = await fixture(html`<date-input selectedDate="2022-12-16T15:16:44.778Z"></date-input>`);
//     assert.shadowDom.equal(
//       el,
//       `<p>12/16/2022</p>`
//     );
//   });

//   test('renders with a set name', async () => {
//     const el = await fixture(html`<date-input name="Test"></date-input>`);
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, Test!</h1>
//       <button part="button">Click Count: 0</button>
//       <slot></slot>
//     `
//     );
//   });

//   test('handles a click', async () => {
//     const el = (await fixture(html`<date-input></date-input>`)) as MyElement;
//     const button = el.shadowRoot!.querySelector('button')!;
//     button.click();
//     await el.updateComplete;
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, World!</h1>
//       <button part="button">Click Count: 1</button>
//       <slot></slot>
//     `
//     );
//   });

//   test('styling applied', async () => {
//     const el = (await fixture(html`<date-input></date-input>`)) as MyElement;
//     await el.updateComplete;
//     assert.equal(getComputedStyle(el).paddingTop, '16px');
//   });
});
