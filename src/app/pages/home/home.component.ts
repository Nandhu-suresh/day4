import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private api:ApiService){}


  todos:any;
  ngOnInit() {
    this.api.getTodo().subscribe((data:any)=>{
      this.todos=data
    })
  }

}
