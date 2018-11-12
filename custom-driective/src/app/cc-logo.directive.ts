/*
Directory : For Music Play using id
Created on: 08/11/18
Created by: Ramya Kannan
**/

import {Directive, Input, OnChanges, HostBinding} from '@angular/core';

enum MusicName { Ting = 'Ting-Popup_Pixels-349896185', notification = 'notification', notification_sound = 'notification_sound', UNKNOWN = 'unknown'}

@Directive({
  selector: '[MusicPlayList]'
})
export class CcLogoDirective implements OnChanges {


  @HostBinding('src')
  AudioSource;

  @Input()
  MusicListNo: string

  ngOnChanges() {
    this.AudioSource = 'assets/' + this.getCardTypeFromNumber() + '.mp3';
  }

  getCardTypeFromNumber(): MusicName {
    if (this.MusicListNo) {
      if (this.MusicListNo=='1') {
        return MusicName.Ting;
      } else if (this.MusicListNo==('2')) {
        return MusicName.notification_sound;
      } else if (this.MusicListNo==('3')) {
        return MusicName.notification;
      }
    }
    return MusicName.UNKNOWN;
  }

}