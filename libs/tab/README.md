# Angular Tab

This is under construction - alpha stage

<!-- This angular npm library package contains a couple of Angular Input box components that allow to add an icon inside a text input, which helps better identify common input fields like for example email, etc.

This small module contains only the HTML and CSS necessary to implement this very common HTML pattern. 

The default theme of the input is designed to look just like a plain HTML input, including the focus blue border (tab and shift-tab are supported) -->

# Demo

Here is what the inputs with the icons look like on screen:
![Demo of ng-ar-tab]()

# Installation

This is how to install the components:

```bash
npm install @ng-ar/tab
```

or 

```bash
yarn add @ng-ar/tab
```

> Minimum angular version needed for this library is v14.0.2.

And on your application module:

```ts
import { TabModule } from '@ng-ar/tab';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
    TabModule
],
})
export class AppModule { }