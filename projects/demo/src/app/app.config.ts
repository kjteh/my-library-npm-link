import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { X_TOKEN } from 'lib-a/service-x';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    { provide: X_TOKEN, useValue: 'SOME_VALUE' },
    provideRouter(routes),
  ]
};
