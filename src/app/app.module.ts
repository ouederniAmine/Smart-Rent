import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyAt0NWnRg8NE1xRD6FJpvr9Ul8tf_LLr-w',
      authDomain: 'smarthome-45590.firebaseapp.com',
      databaseURL: 'https://smarthome-45590-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'smarthome-45590',
      storageBucket: 'smarthome-45590.appspot.com',
      messagingSenderId: '1028100313929'
  }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignInComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
