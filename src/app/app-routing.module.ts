import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusictrackComponent } from './musictrack/musictrack.component';

const routes: Routes = [
{path:'musicTrack', component:MusictrackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
