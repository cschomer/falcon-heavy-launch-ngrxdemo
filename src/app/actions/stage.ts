import { Action } from '@ngrx/store';

export enum StageActionTypes {
  Startup = '[Stage] Startup',
  Liftoff = '[Stage] Liftoff',
  MaxQ = '[Stage] MaxQ',
  BoostersEngineCutOff = '[Stage] BoostersEngineCutOff',
  MainEngineCutOff = '[Stage] MainEngineCutOff',
  FairingDeploy = '[Stage] FairingDeploy',
  BoostersLand = '[Stage] BoostersLand',
  Stage2ShutDown = '[Stage] Stage2ShutDown',
  CoreLands = '[Stage] CoreLands'
}

export class Startup implements Action {
  readonly type = StageActionTypes.Startup;
}

export class Liftoff implements Action {
  readonly type = StageActionTypes.Liftoff;
}

export class MaxQ implements Action {
  readonly type = StageActionTypes.MaxQ;
}

export class BoostersEngineCutOff implements Action {
  readonly type = StageActionTypes.BoostersEngineCutOff;
}

export class MainEngineCutOff implements Action {
  readonly type = StageActionTypes.MainEngineCutOff;
}

export class FairingDeploy implements Action {
  readonly type = StageActionTypes.FairingDeploy;
}

export class BoostersLand implements Action {
  readonly type = StageActionTypes.BoostersLand;
}

export class Stage2ShutDown implements Action {
  readonly type = StageActionTypes.Stage2ShutDown;
}

export class CoreLands implements Action {
  readonly type = StageActionTypes.CoreLands;
}

export type StageActions =
  | Startup
  | Liftoff
  | MaxQ
  | BoostersEngineCutOff
  | MainEngineCutOff
  | FairingDeploy
  | BoostersLand
  | Stage2ShutDown
  | CoreLands;
