import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { BlogComponent } from './blog/blog.component';
import { MoodtrackerComponent } from './moodtracker/moodtracker.component';
import { ProductComponent } from './product/product.component';
import { PerioddateComponent } from './perioddate/perioddate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootComponent,
    BlogComponent,
    MoodtrackerComponent,
    ProductComponent,
    PerioddateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
 }
