import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/assets/domain';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http:HttpClient ) {}
  addTracks(addData: User){
    console.log(addData);
    alert(this.apiServerUrl);
    return this.http.post<User>(`${this.apiServerUrl}/api/Track/v1/addTrack`, addData);
  }
  getTrackByName(songName: string){

    let httpHeader=new HttpHeaders({
      'Authorization': 'Bearer ' +localStorage.getItem('jwt')
    })
    console.log(typeof songName)  
    let requestOptions={headers:httpHeader}
    return this.http.get(`${this.apiServerUrl}/api/Track/v1/findTrackByName/${songName}`, requestOptions);
    // return this.http.get(`http://localhost:63300/api/Track/v1/findTrackByName/Rahulsong`, requestOptions);
  }
}