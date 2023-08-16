import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AreasComponent } from './components/area/areas/areas.component';
import { AreaFormComponent } from './components/area/area-form/area-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DashboardComponent,
    UserListComponent,
    AreasComponent,
    AreaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    DashboardLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
