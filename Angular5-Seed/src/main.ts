import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/*
  Module========>  All Declarations
  Component=====> All html, css & logical
  Pipe/Filter===> Manupulate on run time
  Service=======> Connect to third party
  Router=======> Help to route application
  RouterGaurds====> Auth the route



  main module
  main component


  main
*/
