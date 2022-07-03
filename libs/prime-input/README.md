# Angular PrimeInput

This angular npm library package contains a couple of Angular Input box components that allow to add an icon inside a text input, which helps better identify common input fields like for example email, etc.

This module depends on `PrimeNg` and icon will be as of primeNg icon v5.

The default theme of the input is designed to look just like a plain HTML input, including the focus blue border (tab and shift-tab are supported)

# Demo

Here is how the inputs with the icons look like on the screen:

![Demo of ng-ar-prime-input](https://raw.githubusercontent.com/actionanand/ng-my-libraries/main/libs/prime-input/src/assets/images/ngar-prime-in-green.PNG)

# Installation

This is how to install the components:

```bash
npm install @ng-ar/prime-input
```

or 

```bash
yarn add @ng-ar/prime-input
```

> Minimum angular version needed for this library is v14.0.0.

And on your application module:

```ts
import { PrimeInputModule } from '@ng-ar/prime-input';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
    PrimeInputModule
],
})
export class AppModule { }
```

Styles ConfigurationConfigure: required styles at the styles section, example below uses the Saga Blue theme.

```json
"styles": [
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  //...
],
```

- If you're using `nx` monorepo, make these changes inside `project.json`. In normal angular cli generated project
you have to make changes inside `angular.json` file.


Then we can use the Prime Ng Input in `html` view as below:

```html
<div class="container">
  <h1>Prime NG Input Icons</h1>
  <div class="form">

    <div class="form-row">
      <label>Normal Input:</label>
      <input type="text" placeholder="not from lib">
    </div>

    <div class="form-row">
      <label>Text Field:</label>
      <ng-ar-prime-input [icon]="'envelope'">
        <input type="email" placeholder="please enter your e-mail">
      </ng-ar-prime-input>
    </div>

    <div class="form-row">
      <label>Text Field:</label>
      <ng-ar-prime-input [icon]="'book'">
        <input type="text" placeholder="please enter some text">
      </ng-ar-prime-input>
    </div>

    <div class="form-row">
      <label>Default Input field:</label>
      <ng-ar-prime-input>
        <input type="text" placeholder="default field">
      </ng-ar-prime-input>
    </div>
  </div>
</div>
```

The html core components to be added

```html
  <ng-ar-prime-input [icon]="'book'">
    <input type="text" placeholder="please enter your text">
  </ng-ar-prime-input>
```
- The inputs receive a prop named `icon` that identifies which prime Ng icon we want to apply.
- You can add all the things as per your requirement inside `<input>` html element.
- If you are not providing `icon`, default icon will be applied.


Using add-on extra theme

```html
  <div class="form-row prime-input-green-theme">
    <label>WhatsApp Field:</label>
    <ng-ar-prime-input [icon]="'whatsapp'">
      <input type="number" placeholder="your WhatsApp number">
    </ng-ar-prime-input>
  </div>
```

- Add `prime-input-green-theme` to the ancestor of the selector (say `<ng-ar-prime-input></ng-ar-prime-input>`), then the particular them will be applied to the child(children).

Sample scss (you can uses css also) used for the demo.

```scss
.container {
  padding-top: 4.1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1{
    text-align: center;
  }
}

.form-row {
  width:500px;
  margin-bottom: 10px;

  & label {
    width: 157px;
    text-align: right;
    padding-right: 3px;
    display: inline-block;
  }

  & input {
    height: 25px;
  }
}
```