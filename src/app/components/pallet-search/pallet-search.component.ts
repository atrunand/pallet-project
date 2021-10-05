import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export class DateF {
  from!: Date;
}
export class DateT {
  to!: Date;
}

export class DateIn {
  inp!: Date;
}
@Component({
  selector: 'app-pallet-search',
  templateUrl: './pallet-search.component.html',
  styleUrls: ['./pallet-search.component.css']
})
export class PalletSearchComponent implements OnInit {
  url ='';

  datef = new DateF();
  datet = new DateT();
  datein = new DateIn();

  _dat:any;
  defaultDate:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.setDate("#dateDefault1");
    this.setDate("#dateDefault2");
    this.setDate("#dateDefault3");
    this.getData();
  }

  //
  getData() {
    this.http.get(this.url).subscribe((response:{})=>{
      console.log(response)
    })
  }
  //


updateFromDate(source:any) {
    this.datef.from = source.target.value;
    console.log("Date From :"+this.datef.from)
  }

updateToDate(source:any) {
  this.datet.to = source.target.value;
  console.log("Date To :"+this.datet.to)
}

updateInputDate(source:any) {
  this.datein.inp = source.target.value;
  console.log("Date Input :"+this.datein.inp)
}


setDate(_id: any) {
  let d,m,y,data;

    this._dat = document.querySelector(_id);
    this.defaultDate = new Date(),
      d = this.defaultDate.getDate(),
      m = this.defaultDate.getMonth()+1,
      y = this.defaultDate.getFullYear();

  if(d < 10){
    d = "0"+d;
  }
  if(m < 10){
    m = "0"+m;
  }

  data = y+"-"+m+"-"+d;
  console.log(data);
  this._dat.value = data;
}


};


