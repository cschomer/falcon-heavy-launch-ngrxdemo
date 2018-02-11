import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from './reducers';

import * as Stage from './actions/stage';

import {
  timeInterval,
  tap,
  map,
  scan,
  distinctUntilChanged,
  skipWhile,
  filter
} from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';

@Component({
  selector: 'app-root',
  template: `
    <video width="100%" height="100%" (timeupdate)="setCurrentTime($event.target.currentTime)" preload="metadata" autoplay controls>
      <source src="https://firebasestorage.googleapis.com/v0/b/filestore-10146.appspot.com/o/FalconHeavyLaunch.mov.mp4?alt=media&token=007b2874-f4df-4abf-9b73-a71e5311b625" type="video/mp4">
      Browser not supported
    </video>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  stage$: Observable<string>;
  videoCurrentTime$: Subject<number> = new Subject();
  stageSubscription: Subscription;
  videoCurrentTimeSubscription: Subscription;
  actionableTimes: any = {
    16: new Stage.Startup(),
    77: new Stage.Liftoff(),
    144: new Stage.MaxQ(),
    222: new Stage.BoostersEngineCutOff(),
    260: new Stage.MainEngineCutOff(),
    292: new Stage.FairingDeploy(),
    548: new Stage.BoostersLand(),
    582: new Stage.Stage2ShutDown(),
    587: new Stage.CoreLands()
  };
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.stage$ = this.store.pipe(select('stage'));
    this.stageSubscription = this.stage$.subscribe(e => console.log(e));
    this.videoCurrentTimeSubscription = this.videoCurrentTime$
      .pipe(
        debounceTime(100),
        map(time => Math.round(time)),
        distinctUntilChanged(),
        tap(e => console.log(e)),
        filter(time => this.actionableTimes[time]),
        tap(time => this.store.dispatch(this.actionableTimes[time]))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.stageSubscription.unsubscribe();
    this.videoCurrentTimeSubscription.unsubscribe();
  }

  setCurrentTime(time) {
    this.videoCurrentTime$.next(time);
  }
}
