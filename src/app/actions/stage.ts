import { Action } from '@ngrx/store';

export enum StageActionTypes {
  Startup = '[Stage] Startup',
  StartupSuccess = '[Stage] Startup Success'
}

export class Startup implements Action {
  readonly type = StageActionTypes.Startup;
}

export class StartupSuccess implements Action {
  readonly type = StageActionTypes.StartupSuccess;
}

export type StageActions = Startup | StartupSuccess;
