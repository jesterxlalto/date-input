import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { format, parse } from 'date-fns'

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('date-input')
export class DatePicker extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({type: String})
  selectedDate = new Date().toISOString()

  @state()
    private _userText = "";

    @state()
    private _isParseable = true

    @state()
    private _parsedDate:Date = new Date()

  override render() {
    console.log(format(new Date(), "M/d/y"))

    return html`<input value=${format(this._parsedDate, "M/d/y")} @input=${this.parseUserTypedDate}>
    <p>Is Parseable: ${this._isParseable}</p>
    <p>Selected Date: ${format(this._parsedDate, 'MM/dd/yyyy')}
    `;
  }

  parseUserTypedDate(e) {
    this._userText = e.target.value
    const dateStrList:Array<string> = this._userText.split('/')
    const [m, d, y] = dateStrList
    if(typeof y !== 'undefined' && y.length > 3) {
        const wat = parse(e.target.value, 'M/d/y', new Date())
        if(wat.toString() === 'Invalid Date') {
            this._isParseable = false
        } else {
            this._isParseable = true
            this._parsedDate = wat
            this.selectedDate = format(wat, "M/d/y")
            this.dispatchEvent(
              new CustomEvent('ondateparsed', {
                detail: { 
                  selectedDate: this.selectedDate, 
                  userText: this._userText 
                },
                bubbles: true,
                composed: true,
              })
            )
        }
    } else {
        this._isParseable = false
    }
  }
//   <h1>${this.sayHello(this.name)}!</h1>
//   <button @click=${this._onClick} part="button">
//         Click Count: ${this.count}
//       </button>
//       <slot></slot>

//   private _onClick() {
//     this.count++;
//     this.dispatchEvent(new CustomEvent('count-changed'));
//   }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
//   sayHello(name: string): string {
//     return `Hello, ${name}`;
//   }
}

declare global {
  interface HTMLElementTagNameMap {
    'date-input': DatePicker;
  }
}
