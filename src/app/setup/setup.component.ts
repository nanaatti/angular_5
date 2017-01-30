import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.sass']
})
export class SetupComponent implements OnInit {

  private busstopname: string = '';

  constructor(private digitransitService: DigitransitService, private router: Router) { }

  haeReitit = () => {
    // hae ja näytä reitit
    // tallennetaan pysäkki serviceen > redirect to routes page
    this.digitransitService.setNimi(this.busstopname);
    this.router.navigate(['routes']);
  };

  ngOnInit() {
  }
}