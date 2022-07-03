# Angular mask

This angular npm library package will help us create input mask with more custom controls like preventing & allowing right click, meta keys.

# Demo preview:

Here is how the inputs with mask look like on the screen:

![Demo of ng-ar-mask](https://raw.githubusercontent.com/actionanand/ng-my-libraries/main/libs/mask/src/assets/images/ngar-mask.PNG)


# Installation

This is how to install the components:

```bash
npm install @ng-ar/mask
```

or 

```bash
yarn add @ng-ar/mask
```

> Minimum angular version needed for this library is v14.0.2.

And on your application module:

```ts
import { MaskModule } from '@ng-ar/mask';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
    MaskModule
],
})
export class AppModule { }
```

We can use them as below in `HTML` view:

```html
<div class="container">
  <h1> Input Mask Examples </h1>

  <label>Phone:</label>
  <input ng-ar-mask="(999) 999-9999" [rightClick]="true" [metaKeys]="true">

  <label>International Phone Number</label>
  <input ng-ar-mask="+99 999 99 99 99">

  <label>Credit Card</label>
  <input ng-ar-mask="9999 9999 9999 9999">


  <label>VAT Number</label>
  <input ng-ar-mask="AA-9999 9999 9999 9999">

  <label>Date</label>
  <input ng-ar-mask="39/12/9999">

  <label>Text</label>
  <input value="ABCD">
</div>
```

How to use `ng-ar-mask` in html(general view):

```html
<input ng-ar-mask="AA-aa*9 9999 9999 9999" [rightClick]="true" [metaKeys]="true">
```

- Props `rightClick` and `metaKeys` are false by default. If you're not providing, default values will be taken.
When `metaKeys` is enabled, if you select the input, single key press (except meta keys) will clear your input. You can do copy & paste with keyboard, when `metaKeys` is enabled 
- Directive `ng-ar-mask` can fed with validators like number, characters.
  - When numeric value is provided, the input will be masked for that. For example, If you give `4`, all the values below `4` are only allowed.
  - If `A` is fed, it'll allow only all upper case alphabets.
  - If `a` is fed, it'll allow only all lower case alphabets.
  - If `*` is fed, it'll allow all the characters and numbers.
- Special characters to be used to prevent taking inputs are as described: `whitespace`, `/`, `(`, `)`, `+`, `\`, `-`, `,`

`SCSS` for the above mentioned demo:

```scss
.container {
  margin: 0 auto;
  max-width: 350px;
  padding-top:65px;

  & label {
    display: block;
    margin-top: 30px;
  }

  & input {
    border-radius: 4px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
    font-family: "Courier", serif;
    width:310px;
    margin-bottom: 30px;
    border: 2px solid darkgray;
    padding: 5px 10px 5px 10px;
  } 
}
```