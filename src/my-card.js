import { LitElement, html, css } from 'lit';
export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Penn State";
    this.source = "https://th.bing.com/th/id/R.8f1a74d55024e51c79fbde22fcb4139e?rik=EYVSyaoZaa1hOA&pid=ImgRaw&r=0";
    this.description = "Founded in 1855, Penn State University has evolved from a small agricultural college into a major research institution and the only land-grant university in Pennsylvania.";
    this.buttonText = "More Info";
    this.link = "https://hax.psu.edu/";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block
      }
      .PennStateCard {
        background-color: green;
        width: 300px;
        height: 400px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        overflow: hidden;
       
  }
      h2 {
          color: blue;
          font-family: Helvetica;
        }
      .card-img {
       width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      border-radius: 4px;
      }
      .card-description {
        color: white;
        font-family: sans-serif;
        font-size: 13px;        
        margin-top: 2px;        
        text-align: center;       
        display: inline-block;  
        max-width: 350px;       
        overflow-wrap: break-word;
    }
      .PennButton{
        color: red;
        background-color: blue;
      }
      .PennButton:hover,
      .PennButton:focus{
        color: orange;
      }

    `;
  }

  render() {
    return html`
        <div class="PennStateCard">
          <div style="text-align: center;">
            <h2 class="card-title">${this.title}</h2>
            <img class="card-img" src="${this.source}" alt="">
            <p class="card-description">${this.description}</p>
            <a href="${this.link}" class="PennButton">${this.buttonText}</a>
          </div>
        </div>`;

  }

  static get properties() {
    return {
      title: { type: String },
      source: { type: String },
      description: { type: String },
      buttonText: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
