import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  host: { 'class': 'mat-typography' }
})
export class AppComponent { 

  private readme = `*_README_*: Usage instructions for +<wm-readme>+ component.
  ● Text wrapped around \'\\*\' (asterisk) will render as +<b>+ elements (e.g. *bold*).
  ● Text wrapped around \'\\+\' (plus) will render as +<i>+ elements (e.g. +italic+).
  ● Text wrapped around \'\\_\' (underscore) will render as +<u>+ elements (e.g. _underline_).
  ● Text wrapped around \'\\~\' (tilde) will render as +<s>+ elements  (e.g. ~striketrough~).
  ● Text wrapped around square brackets will render as +<a>+ elements acting as a link (e.g. [link](url)).
  ● Navigation is handled binding to the +*navigate*+ event locally or providing a +*ReadmeNavigator*+ service globally.
  ● Non printable chars \\n, \\r and \\f will render as breaks +<br>+ elements.
  ● To render formatting chars prepend a backslash (e.g. \\*\\+\\_\\~).
  ● The component supports interpolation within double braces \\{\\{ value \\}\\} as well (e.g. {{count}}). 
  Feel *free* to *_combine_* as you ~_*like*_~ (e.g. [a +*nice*+ link that counts {{count}}](url)).`;

  public count = 0;

  constructor() {

    setInterval(() => this.count++, 1000);
  }

  private popup(to: any) {
    window.alert("Congratulation! You successfully tested navigation:\n" + to);
  }
}
