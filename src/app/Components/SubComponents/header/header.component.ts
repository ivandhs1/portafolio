import { Component, HostListener, OnInit } from '@angular/core';
import { PdfDownloadService } from 'src/app/Services/pdf-download.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pdfService: PdfDownloadService) { }

  ngOnInit(): void {
  }

  color:string='';

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event:any){

    if(window.scrollY > 300){
      this.color='#000000'    
    }else{
      this.color='transparent'
    }
  } 

  downloadPDF(){
    this.pdfService.showPdf();
  }
}
