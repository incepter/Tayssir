import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setTheme } from 'ngx-bootstrap/utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'tayssir-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {


  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  phoneNumber = "^(06)[0-9]{8}";

  personalInformationsForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
    cin: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    cinRecto: new FormControl(''),
    cinVerso: new FormControl('')
  });

  get personalInformationsControl() {
    return this.personalInformationsForm.controls;
  }

  jobInformationsForm = new FormGroup({
    jobType: new FormControl('', [Validators.required]),
    jobAddress: new FormControl('', [Validators.required])
  });

  locationInformationsForm = new FormGroup({
    authoruty: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    community: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {
    setTheme('bs4');
  }

  onSubmitPI() {
    this.staticTabs.tabs[1].active = true;
  }

  onSubmitJI() {
    this.staticTabs.tabs[0].active = true;
  }

  goToPersonalInformations() {
    this.staticTabs.tabs[2].active = true;
  }

  goToJobInformations() {
    this.staticTabs.tabs[1].active = true;
  }

  onSubmitForms() {

  }
}
