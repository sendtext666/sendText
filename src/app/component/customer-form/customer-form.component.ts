import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';

@Component({
  selector: 'customer-form',
  templateUrl: 'customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  phoneNumber = '';
  name = '';

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  createCustomer(customerData) {
    this.restService.createCustomer(customerData.value)
    .subscribe((data: any[])=>{
      console.log(data);
    })  
  }

}
