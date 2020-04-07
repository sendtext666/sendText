import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';

@Component({
  selector: 'message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  messageName = '';
  messagBody = '';

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  createMessages(data) {
    let userMessages = {
      name: data.value.name,
      body: data.value.body,
      user: `1`
    }
    this.restService.createMessages(userMessages)
    .subscribe((data: any[])=>{
      console.log(data, "message created");
    }) 
  }

}
