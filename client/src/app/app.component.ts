import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  title = 'Angular!!!! Dating App';
  users: any;
  /**
   *dependecy injection
   */
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // now we have implemented the OnInit interface
    this.http.get('https://localhost:5001/api/users').subscribe({
      next : response => this.users = response,
      error : error => console.log(error),
      complete : () => console.log ('Request has been completed')
    })
  }
  
  
}
