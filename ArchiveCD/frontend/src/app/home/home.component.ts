import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {CD} from "../model/model";
import {CRUDServices} from "../service/CRUD-Services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
cdlist: any
  cd : any
  addedCd:CD= new CD();

  public filtername: string;
  public filtergender: string;
  public filterdate: any;
  constructor(public Crudservice : CRUDServices) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.Crudservice.getCds()
      .subscribe(data => {
          this.cdlist = data ;
        } ,
        err => {
          console.log(err);
        });
  }
  updateCd(){
    const cd = {
      id: this.cd.id,
      name: this.addedCd.name,
      gender: this.addedCd.gender,
      released: this.addedCd.released
    }
     this.Crudservice.OnUpdateCd(cd).subscribe(data=>{
     console.log(data);
     this.getData()
    })
  }

addCd(){

    this.Crudservice.add(this.addedCd).subscribe(data=>{
      console.log(data);
      this.getData();
    })
}
deleteCd(c){

    this.Crudservice.delete(c).subscribe(data=>{
      console.log(data);
      this.getData();
    })
  }



  getItem(f) {
    this.cd = f;
  }

}
