import { Component, OnInit } from '@angular/core';
import { PollutionService } from '../pollution.service';
import { PollutionData } from '../PollutionData';
@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit {
pollutionData: PollutionData[]=[];
currentPage=1;
itemsPerPage=5;
totalItems=0;
  constructor(private pollutionService:PollutionService){}

  ngOnInit(): void {
    this.fetchPollutionData();
    
  }
  fetchPollutionData():void{
    this.pollutionService.viewPollutionData().subscribe(pollutionData=>{this.pollutionData=pollutionData;
      this.totalItems=this.pollutionData.length;});
  }

  onPageChange(pageNumber: number):void{
    this.currentPage=pageNumber;
  }

  getPaginatedData():PollutionData[]{
   const startIndex=(this.currentPage-1)*this.itemsPerPage;
   return this.pollutionData.slice(startIndex,startIndex+this.itemsPerPage); 
  }


  get totalPages():number{
return Math.ceil(this.totalItems/this.itemsPerPage)
  }
}
