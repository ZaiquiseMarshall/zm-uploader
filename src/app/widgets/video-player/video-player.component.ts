import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;

  constructor() { }

  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

}
