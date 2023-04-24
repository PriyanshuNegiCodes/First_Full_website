import { Component } from '@angular/core';
import { User } from '../../assets/domain';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { MusicServiceService } from '../service/music-service.service';
@Component({
  selector: 'app-musictrack',
  templateUrl: './musictrack.component.html',
  styleUrls: ['./musictrack.component.css']
})
export class MusictrackComponent {
  track: User = {
    customerId: 0,
    customerName: "",
    customerPhoneNumber: 0,
    customerPassword: "",
    track: [
      {
        trackName: "",
        trackRating: 0,
        trackArtist: {
          artistName: "",
          artistAge: ""
        },
        trackListened: false
      }
    ]
  };

  musicForm: FormGroup;

  constructor(private musicService: MusicServiceService) {
    this.musicForm = new FormGroup({
      customerId: new FormControl(''),
      customerName: new FormControl(''),
      customerPhoneNumber: new FormControl(''),
      customerPassword: new FormControl(''),
      track: new FormArray([])
    });
  }

  // constructor(private musicForm:FormBuilder){}
  // musicTracks= this.musicForm.group({
  //   customerId:[''],
  //   customerName: [''],
  //   customerPhoneNumber: [''],
  //   customerPassword: [''],
  //   track: new FormArray([])
  // });

  addTrack() {
    (this.musicForm.get('track') as FormArray).push(new FormGroup({
      trackName: new FormControl(''),
      trackRating: new FormControl(0),
      trackArtist: new FormGroup({
        artistName: new FormControl(''),
        artistAge: new FormControl('')
      }),
      trackListened: new FormControl(false)
    }));
  }

  removeTrack(index: number) {
    const trackArray = this.musicForm.get('track') as FormArray;
    if (trackArray && trackArray.length > index) {
      trackArray.removeAt(index);
    }
  }

  onSubmit() {
    // console.log(this.musicForm.value);

    this.musicService.addTracks(this.musicForm.value).subscribe((response: User) => {
      console.log(response); // or do something else with the response
    });

  }
}
