import { Component} from '@angular/core';
// import {AlertController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor(private alertController:AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AppInfo',
      subHeader: 'Create Page',
      message: 'Hey user this is the create page. User can add their pet record here',
      buttons: ['Close'],
    });

    await alert.present();
  }

}
