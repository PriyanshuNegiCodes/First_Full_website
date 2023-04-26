import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  myForm:any|FormGroup;

  constructor(private fb: FormBuilder, private musicservice:MusicServiceService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      inputValue: ['', Validators.required]
    });
  }

  findByUser() {
    console.log(this.myForm.get('inputValue').value);
    this.musicservice.getTrackByName(this.myForm.get('inputValue')).subscribe(response=>
      {
        console.log(response);
      },
      error=>{
        alert(error);
      }
      )
  }
}
