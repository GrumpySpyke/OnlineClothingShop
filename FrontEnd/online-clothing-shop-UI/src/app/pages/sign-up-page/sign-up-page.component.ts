import { Component, OnInit} from '@angular/core';
import { User } from '../entity/User.dtos'; 

@Component({
    selector: 'app-root',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.css']
  })

  export class SignUpComponent implements OnInit{

    user:User ={
        id: 0,
        name: "",
        surname: ""
    };

    ngOnInit(){
        
    }
    onUserAdd(event:any){
        event.PreventDefault();
        console.log(event);
    }

  };