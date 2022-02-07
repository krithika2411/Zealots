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
<<<<<<< HEAD


=======
import { ForumComponent } from './forum/forum.component';
>>>>>>> 82442f0d2f96b142807c33a7f3ffd76de2a3bb53
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootComponent,
    BlogComponent,
    MoodtrackerComponent,
    ProductComponent,
<<<<<<< HEAD

=======
    ForumComponent
>>>>>>> 82442f0d2f96b142807c33a7f3ffd76de2a3bb53
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> 82442f0d2f96b142807c33a7f3ffd76de2a3bb53
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
