import { Component, OnInit } from '@angular/core';
import { User } from '../../assets/domain';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { MusicServiceService } from '../service/music-service.service';
@Component({
  selector: 'app-musictrack',
  templateUrl: './musictrack.component.html',
  styleUrls: ['./musictrack.component.css']
})
export class MusictrackComponent implements OnInit{

  musicForm:any|FormGroup;

  constructor(private musicService: MusicServiceService, private fb: FormBuilder) {
  }

  ngOnInit(){
    this.musicForm = this.fb.group({
      customerId: '',
      customerName: '',
      customerPhoneNumber:  '',
      customerPassword:  '',
      track: this.fb.array([])
    });
  }

  get trackData(){
    return this.musicForm.get('track') as FormArray;
  }

  addTrack() {
    let newTrack = this.fb.group({
      trackName:'',
      trackRating:0,
      trackArtist:this.fb.group({
        artistName:'',
        artistAge:''
      }),
      trackListened: false
    })
    this.trackData.push(newTrack);
  }

  removeTrack(index: number) {
    this.trackData.removeAt(index);
  }

  onSubmit() {
    console.log(this.musicForm.value);

    this.musicService.addTracks(this.musicForm.value).subscribe((response: User) => {
      console.log(response); // or do something else with the response
    });
    this.musicForm.reset();
  }
}