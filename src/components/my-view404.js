import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

class MyView404 extends LitElement {
  render(props) {
    return html`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 auto;
          padding: 40px;
        }
        a:link, a:visited {
          color: var(--app-header-selected-color);
          text-decoration: none;
          font-weight: bold;
        }
      </style>
      <h2>Oops! You hit a 404!</h2>
      <p>This page is not a thing.
        Head back <a href="http://localhost:8000/">to safety</a>.
      </p>
    `
  }

  static get is() {
    return 'my-view404';
  }
}

window.customElements.define(MyView404.is, MyView404);
