import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // customers = [];
  // phoneNumber = '';
  // messageName = '';
  // messagBody = '';
  // name = '';
  // messages = [];
  // activeMessage = this.messages[0];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    // this.getCustomers();
    // this.getMessage();
  }


  // getCustomers() {
  //   this.restService.getCustomers()
  //   .subscribe((data: any[])=>{
  //     this.customers = data;
  //   })  
  // }

  // getMessage() {
  //   this.restService.getMessages()
  //   .subscribe((data: any[])=>{
  //     // this.customers = data;

  //     this.messages = data;
  //     console.log(this.messages)
  //   })  
  // }

  // createCustomer(customerData) {
  //   this.restService.createCustomer(customerData.value)
  //   .subscribe((data: any[])=>{
  //     console.log(data);
  //   })  
  // }

  // sendText(phoneNumber) {
  //   this.restService.sendText(phoneNumber, this.activeMessage)
  //   .subscribe((data: any[])=>{
  //     console.log(data);
  //   })  
  // }

  // messageSelect(message) {
  //   this.activeMessage = message;
  // }

  // createMessages(data) {
  //   let userMessages = {
  //     name: data.value.name,
  //     body: data.value.body,
  //     user: `1`
  //   }
  //   this.restService.createMessages(userMessages)
  //   .subscribe((data: any[])=>{
  //     console.log(data, "message created");
  //   }) 
  // }
}
