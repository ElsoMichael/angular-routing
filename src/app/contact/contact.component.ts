import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactId: number;
  optionalParameter: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.contactId = +params['id'];
    });

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter = queryParams['foo'];
    });
  }
}