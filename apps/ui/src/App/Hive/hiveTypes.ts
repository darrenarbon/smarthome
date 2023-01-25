export enum DeviceType {
  Heating = 'heating',
  HotWater = 'hotwater',
  Light = 'warmwhitelight',
  Motion = 'motionsensor',
  Plug = 'activeplug',
}
export enum PowerType {
  Mains = 'mains',
  Battery = 'battery',
}

export enum ActionEventsGroup {
  When = 'when',
  Then = 'then',
  While = 'while',
}

export enum DeviceMode {
  Manual = 'MANUAL',
  Schedule = 'SCHEDULE',
  On = 'ON',
  Boost = 'BOOST',
}

export type DeviceProps = {
  battery: number;
  online: boolean;
  power: PowerType;
  presenceLastChanged: number;
  reset?: boolean;
  signal: number;
  temperature?: number;
  upgrade: {
    available: boolean;
    progress?: number;
    status: string;
    upgrading: boolean;
    version: string;
  };
  version: string;
};

export type DeviceScheduleDayData = {
  start: number;
  value: {
    actionType: string;
    status: string;
  };
};

export type DeviceSchedule = {
  friday: DeviceScheduleDayData[];
  monday: DeviceScheduleDayData[];
  saturday: DeviceScheduleDayData[];
  sunday: DeviceScheduleDayData[];
  thursday: DeviceScheduleDayData[];
  tuesday: DeviceScheduleDayData[];
  wednesday: DeviceScheduleDayData[];
};

export type DeviceState = {
  name: string;
  deviceClass?: string;
  zoneName?: string;
  discovery?: false;
  homeKitEnabled?: boolean;
  homeKitPaired?: boolean;
  brightness?: number;
  mode?: DeviceMode;
  schedule?: DeviceSchedule;
  status?: string;
  target?: number;
  boost?: number;
};

export type Device = {
  created: number;
  id: string;
  lastSeen: number;
  parent: string;
  props: DeviceProps;
  sortOrder: number;
  state: DeviceState;
  type: DeviceType;
};

export type Product = {
  created: number;
  id: string;
  lastSeen: number;
  parent: string;
  props: DeviceProps;
  sortOrder: number;
  state: DeviceState;
  type: DeviceType;
};

export type ActionEvents = {
  duration?: number;
  group: ActionEventsGroup;
  type: string;
  id?: string;
  settings?: {
    brightness?: number;
    email?: boolean;
    push?: boolean;
    sms?: boolean;
    status?: boolean;
    event?: string;
    offset?: number;
    fromOffset?: number;
    period?: string;
    untilOffset?: number;
  };
};

export type Action = {
  created: number;
  enabled: boolean;
  entitled: boolean;
  entitlements: [];
  events: ActionEvents[];
  id: string;
  name: string;
  template: string;
};

export type Products = {
  lights: Product[];
  plugs: Product[];
  heating: Product[];
  hotwater: Product[];
  motion: Product[];
};

export type BrightnessPayload = {
  brightness: number;
  status?: string;
};
