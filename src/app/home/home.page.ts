import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {AlertController} from '@ionic/angular';
const {LocalNotifications} = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alert: AlertController) {}

  async ngOnInit() {
    await LocalNotifications.requestPermission();
  }

  async doSomeFun(){
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Just Demo',
          body: 'Wishing to you a good day',
          id:1,
          iconColor: '#0000FF'
        }
      ]
    })
  }



}
