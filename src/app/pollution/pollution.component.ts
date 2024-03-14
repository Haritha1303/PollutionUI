import { Component, OnInit } from '@angular/core';
import { PollutionService } from '../pollution.service';
import { PollutionData } from '../PollutionData';
import { BookMarkServiceService } from '../book-mark-service.service';
import { Router } from '@angular/router';
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
isLoggedOut:boolean=false;
  constructor(private pollutionService:PollutionService,private bookMarkService:BookMarkServiceService,private router:Router){}

  ngOnInit(): void {
    this.fetchPollutionData();
    
  }
  fetchPollutionData():void{
    this.pollutionService.viewPollutionData().subscribe(pollutionData=>{this.pollutionData=this.convertResponseToObjectArray(pollutionData);
      this.totalItems=this.pollutionData.length;});
  }

 private convertResponseToObjectArray(responseData: any[]): PollutionData[]{
  const objectsArray:PollutionData[]=[];
  for(const item of responseData){
    console.log(item);
   const myObject:PollutionData={
      id: item.id,
      year2018: item['2018'],
      year2019: item['2019'],
      year2020: item['2020'],
      year2021: item['2021'],
      year2022: item['2022'],
      year2023: item['2023'],
      city: item.city,
      country: item.country
    };
    objectsArray.push(myObject);
    console.log(objectsArray);
  }
  return objectsArray;
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

bookmarkData(data:any):void{
  console.log(JSON.stringify(data));
  this.bookMarkService.bookmarkData(JSON.stringify(data)).subscribe(
    (response)=>{console.log('Data BookMarked Succesfully:',data);});
}


logout()
{
  this.router.navigate(['/login']);
  this.isLoggedOut=true;
}

}
