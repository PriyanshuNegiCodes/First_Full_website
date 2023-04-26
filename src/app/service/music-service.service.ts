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
    alert(songName)
    let httpHeader=new HttpHeaders({
      'Authorization': 'Bearer' +localStorage.getItem('jwt')
    })  
    let requestOptions={headers:httpHeader}
    return this.http.get<User>(`${this.apiServerUrl}/api/Track/v1/findTrackByName/${songName}`, requestOptions);
  }
}