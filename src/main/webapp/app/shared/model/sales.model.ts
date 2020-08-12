import { Moment } from 'moment';
import { State } from 'app/shared/model/enumerations/state.model';

export interface ISales {
  id?: number;
  state?: State;
  date?: string;
}

export const defaultValue: Readonly<ISales> = {};
