import { WindowScrollService, ConfigService } from './../../services';

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy, Output, EventEmitter, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import * as $ from 'jquery';
import {PlayerConfig} from './../../interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() playerConfig: PlayerConfig;
  @Output() contentProgressEvent = new EventEmitter<any>();
  @ViewChild('contentIframe') contentIframe: ElementRef;
  @Output() playerOnDestroyEvent = new EventEmitter<any>();
  @Output() sceneChangeEvent = new EventEmitter<any>();
  buildNumber: string;
  constructor(public configService: ConfigService) {
    try {
      this.buildNumber = (<HTMLInputElement>document.getElementById('buildNumber')).value;
    } catch (error) {
      this.buildNumber = '1.0';
    }
  }
  /**
   * showPlayer method will be called
   */
  ngOnInit() {
    this.showPlayer();
  }

  ngOnChanges() {
    this.showPlayer();
  }
  /**
   * Initializes player with given config and emits player telemetry events
   * Emits event when content starts playing and end event when content was played/read completely
   */
  showPlayer () {
    const iFrameSrc = this.configService.appConfig.PLAYER_CONFIG.baseURL + '&build_number=' + this.buildNumber;
    setTimeout(() => {
      this.contentIframe.nativeElement.src = iFrameSrc;
      this.contentIframe.nativeElement.onload = () => {
        this.adjustPlayerHeight();
        this.contentIframe.nativeElement.contentWindow.initializePreview(this.playerConfig);
      };
    }, 0);
    this.contentIframe.nativeElement.addEventListener('renderer:telemetry:event', (event: any) => {
        this.generateContentReadEvent(event);
    });
  }
  /**
   * Adjust player height after load
   */
  adjustPlayerHeight () {
    const playerWidth = $('#contentPlayer').width();
    if (playerWidth) {
      const height = playerWidth * (9 / 16);
      $('#contentPlayer').css('height', height + 'px');
    }
  }
  generateContentReadEvent(event: any) {
    if (event.detail.telemetryData.eid && (event.detail.telemetryData.eid === 'START')) {
      console.log('start event from player before timeout',
      this.contentIframe.nativeElement.contentWindow.EkstepRendererAPI.getCurrentStageId());
      setTimeout(() => {
        const stageId = this.contentIframe.nativeElement.contentWindow.EkstepRendererAPI.getCurrentStageId();
        const eventData = { stageId };
        console.log('start event from player after timeout', stageId);
        this.sceneChangeEvent.emit(eventData);
      } , 1000); // waiting for player to load, then fetching stageId (if we dont wait stageId will be undefined)
      this.contentProgressEvent.emit(event);
    } else if (event.detail.telemetryData.eid &&
      event.detail.telemetryData.eid === 'END' && _.get(event.detail.telemetryData, 'edata.summary')) {
      const summary = _.find(event.detail.telemetryData.edata.summary , { progress: 100 });
      if (summary) {
        this.contentProgressEvent.emit(event);
      }
    } else if (event.detail.telemetryData.eid && (event.detail.telemetryData.eid === 'IMPRESSION')) {
      const stageId = this.contentIframe.nativeElement.contentWindow.EkstepRendererAPI.getCurrentStageId();
      const eventData = { stageId: stageId};
      this.sceneChangeEvent.emit(eventData);
    }
  }
  ngOnDestroy() {
    this.playerOnDestroyEvent.emit( {contentId: this.playerConfig.context.contentId} );
  }
}
