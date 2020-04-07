import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service'

@Component({
  selector: 'customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers = [];
  messages = [];
  activeMessage = this.messages[0];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getMessage();
  }

  getCustomers() {
    this.restService.getCustomers()
    .subscribe((data: any[])=>{
      this.customers = data;
    })  
  }
  
  getMessage() {
    this.restService.getMessages()
    .subscribe((data: any[])=>{
      // this.customers = data;
  
      this.messages = data;
      console.log(this.messages)
    })  
  }

  sendText(phoneNumber) {
    this.restService.sendText(phoneNumber, this.activeMessage)
    .subscribe((data: any[])=>{
      console.log(data);
    })  
  }

  messageSelect(message) {
    this.activeMessage = message;
  }


}

