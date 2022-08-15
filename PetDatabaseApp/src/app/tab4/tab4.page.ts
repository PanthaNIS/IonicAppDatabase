import { Component} from '@angular/core';
// import {AlertController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import{PetRecordService} from '../pet.service';
import { PetRecord } from '../PetRecord';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor(private alertController:AlertController, private petrecord:PetRecordService ) { }

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

  // function to delete the record from pet database.

  deleteRecord(){this.petrecord.doDelete(this.petname).subscribe((data:PetRecord)=>{
    this.petname = "";
    this.errorMessage = "Reccord is deleted";

  });

}

// function to update the record from pet database.
updateRecord(){this.petrecord.doCreate(new PetRecord(this.petname,this.petage,this.petspecies,this.petsex,this.phone)).subscribe((data:PetRecord)=>{
  this.petname = "";
  this.petspecies = "";
  this.petage = 0;
  this.petsex = "";
  this.phone = "";
  this.errorMessage = "";
});


}
}