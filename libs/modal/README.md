# Angular modal

This is under alpha stage.

# Installation

This is how to install the components:

```bash
npm install @ng-ar/modal
```

or 

```bash
yarn add @ng-ar/modal
```

> Minimum angular version needed for this library is v14.0.2.

And on your application module:

```ts
import { ModalModule } from '@ng-ar/modal';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
    ModalModule
],
})
export class AppModule { }
```