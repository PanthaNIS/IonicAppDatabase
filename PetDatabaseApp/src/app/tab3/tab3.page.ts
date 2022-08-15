import { Component } from '@angular/core';
// import {AlertController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PetRecord } from '../PetRecord';
import{PetRecordService} from '../pet.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController:AlertController, private petrecord:PetRecordService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AppInfo',
      subHeader: 'Create Page',
      message: 'Hey user this is the create page. User can add their pet record here',
      buttons: ['Close'],
    });

    await alert.present();
  }

  petname:string;
  petspecies:string;
  petage:number;
  petsex:string;
  phone:string;
  errorMessage : string = "";

  // Reference: University source sample angular rest app.
  addRecord(){
	 this.petrecord.doCreate(new PetRecord(this.petname,this.petage,this.petspecies,this.petsex,this.phone)).subscribe((data:PetRecord)=>{

      this.petname = "";
      this.petspecies = "";
      this.petage = 0;
      this.petsex = "";
      this.phone = "";
      this.errorMessage = "";
    },
    error=>{
      this.errorMessage = error.message;
    }
    );

	  
  }


}
