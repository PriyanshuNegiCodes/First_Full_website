import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusictrackComponent } from './musictrack/musictrack.component';
import { LoginComponent } from './login/login.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
{path:'musicTrack', component:MusictrackComponent},
{path:'login', component:LoginComponent},
{path: 'information', component:InformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }