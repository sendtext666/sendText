import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = `https://sendtext-api.herokuapp.com`;

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(`${this.url}/customers`);
  }

  getMessages() {
    return this.http.get(`${this.url}/messages`);
  }

  createCustomer(customer) {
    const data = {
      "phoneNumber": customer.phoneNumber,
      "name": customer.name
    }

    return this.http.post(`${this.url}/customers`, data);
  }

  sendText(phoneNumber, message ) { 
    const data = {
      phoneNumber: phoneNumber,
      message: message
    }

    return this.http.post(`${this.url}/sendText`, data);
  }

  createMessages(messages) {
    const data = {
      "body": messages.body,
      "name": messages.name,
      "user": messages.user 
    }
    return this.http.post(`${this.url}/messages`, data);
  }
}
