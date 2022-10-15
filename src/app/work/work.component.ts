
import { AfterViewInit, Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {

  code:any=""
  @ViewChild('code_ref') code_ref:any= ElementRef;
 

  constructor() { }

  ngAfterViewInit(): void {
    this.code_ref.focus();
  }


  test(event: any) {

    if (event.key == "Enter") {
      let msgcode = this.code
      this.code=""
     Swal.fire({
      title: '3500'+" DT",
      text: 'Code : '+msgcode+' Tomate SICAM',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 600,
      imageHeight: 400,
      
     })
    }
  }
}
