import { Component } from '@angular/core';
// import { AlertController } from 'ionic-angular';
import { AlertController } from '@ionic/angular';
import{HttpClient} from '@angular/common/http';
import{PetRecordService} from '../Pet.Record';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  petRecords: string;
// Reference: https://ionicframework.com/docs/api/alert
  constructor(private alertController: AlertController, private petrecord: PetRecordService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AppInfo',
      subHeader: 'Pet Record',
      message: 'Hey user this is the existing and new pet record listing page. You can see the existing pet record and new pet record in this',
      buttons: ['Close'],
    });

    await alert.present();
  }

  getPetRecords(){
    this.petrecord.getData().subscribe((data:any)=> {
      this.petRecords = JSON.stringify(data);
    }
    );
  }
 
  

}
