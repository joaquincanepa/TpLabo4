import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
//import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [/*provideZoneChangeDetection({ eventCoalescing: true }),*/ provideRouter(routes), provideFirebaseApp(() => initializeApp({
    "projectId":"tplaboratorio4",
      "appId":"1:257580297543:web:445ed1eb2fcb1ec6753062",
      "storageBucket":"tplaboratorio4.appspot.com","apiKey":"AIzaSyBE1I9n0y5u-RWlnpAEcjhsHaO-T69nFL4",
      "authDomain":"tplaboratorio4.firebaseapp.com","messagingSenderId":"257580297543"})),
       provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),importProvidersFrom(HttpClientModule)]
};
