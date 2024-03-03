export interface Log {
  date: Date;

  port1flags?: LogFlags;
  port2flags?: LogFlags;
  port3flags?: LogFlags;
  port4flags?: LogFlags;
  port5flags?: LogFlags;
  port6flags?: LogFlags;
  timingAdv?: number;
  ectRaw?: number;
  isc0?: number;
  iscY0?: number;
  isc1?: number;
  iscY1?: number;
  ftrim_low?: number;
  ftrim_mid?: number;
  ftrim_hi?: number;
  o2Fbk?: number;

  ectFiltered?: number;
  iatChecked?: number;
  egrtRaw?: number;
  o2Raw?: number;
  battRaw?: number;
  baroRaw?: number;
  iscStepCurr?: number;
  tpsRaw?: number;
  closedLpFlags?: LogFlags;
  ftrimFlags?: LogFlags;
  mafRaw?: number;
  ftrim_low_0x1B?: number;
  airVol?: number;
  accEnr?: number;
  state1?: number;
  ftrim_low_0x1F?: number;

  rpm8?: number;
  rpm31?: number;
  port3Snap1?: LogFlags;
  iscLrnFlags?: LogFlags;
  idleSpdTarg?: number;
  iscStepTarg?: number;
  knockSum?: number;
  port3Snap0?: LogFlags;
  port4Snap?: LogFlags;
  injPw?: number;
  injPw1?: number;
  enerLen?: number;
  airCnt0?: number;
  airCnt1?: number;
  injFactor?: number;
  injFactor1?: number;

  iscFlags0?: LogFlags;
  temp1?: number;
  temp2?: number;
  temp3?: number;
  temp4?: number;
  temp5?: number;
  o2BadCnt?: number;
  egrtBadCnt?: number;
  faultHi?: LogFlags;
  faultLo?: LogFlags;
  iatRaw?: number;
  stFaultHi?: LogFlags;
  stFaultLo?: LogFlags;
  ftrim_low_0x3D?: number;

  ecuVersion?: number;
}

export interface LogFlags {
  bit0: boolean;
  bit1: boolean;
  bit2: boolean;
  bit3: boolean;
  bit4: boolean;
  bit5: boolean;
  bit6: boolean;
  bit7: boolean;
}
