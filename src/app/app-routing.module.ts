import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootComponent } from './foot/foot.component';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MoodtrackerComponent } from './moodtracker/moodtracker.component';
import { ProductComponent } from './product/product.component';
import { YoutubeComponent } from './youtube/youtube.component';



const routes: Routes = [ 
{
  path: 'home',
  component: HomeComponent,  
},
{
  path: 'blog',
  component: BlogComponent,  
},
{
  path: 'mood',
  component: MoodtrackerComponent,  
},
{
  path: 'foot',
  component: FootComponent,
},
{
  path: 'product',
  component: ProductComponent,
},
{
  path: 'youtube',
  component: YoutubeComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
