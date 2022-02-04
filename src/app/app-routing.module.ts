import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootComponent } from './foot/foot.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [ {

  path: 'home',
  component: HomeComponent,
},
{
  path: 'foot',
  component: FootComponent,
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
