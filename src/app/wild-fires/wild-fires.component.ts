import { Component, OnInit } from '@angular/core';
import { FireModel } from 'src/models/fire.model';
import { FireService } from 'src/services/fire.service';

@Component({
  selector: 'app-wild-fires',
  templateUrl: './wild-fires.component.html',
  styleUrls: ['./wild-fires.component.scss']
})
export class WildFiresComponent implements OnInit {

  public fires : Array<FireModel> = new Array<FireModel>();
  constructor(private service : FireService)
  {

  }
  ngOnInit(){
    this.GetFires();
  }
  GetFires()
  {
    this.service.GetFires().subscribe(data => {
      this.fires = data;
    });
  }
}
