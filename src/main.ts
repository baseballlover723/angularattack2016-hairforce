import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AngularAttackAppComponent, environment} from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(AngularAttackAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://hairforceattack.firebaseio.com')
]);
