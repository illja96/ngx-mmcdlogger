export interface QueryRequest {
  port1: boolean;
  port2: boolean;
  port3: boolean;
  port4: boolean;
  port5: boolean;
  port6: boolean;
  timingAdv: boolean;
  ectRaw: boolean;
  isc0: boolean;
  iscY0: boolean;
  isc1: boolean;
  iscY1: boolean;
  ftrim_low: boolean;
  ftrim_mid: boolean;
  ftrim_hi: boolean;
  o2Fbk: boolean;

  ectFiltered: boolean;
  iatChecked: boolean;
  egrtRaw: boolean;
  o2Raw: boolean;
  battRaw: boolean;
  baroRaw: boolean;
  iscStepCurr: boolean;
  tpsRaw: boolean;
  closedLpFlags: boolean;
  ftrimFlags: boolean;
  mafRaw: boolean;
  ftrim_low_0x1B: boolean;
  airVol: boolean;
  accEnr: boolean;
  state1: boolean;
  ftrim_low_0x1F: boolean;

  rpm8: boolean;
  rpm31: boolean;
  port3Snap1: boolean;
  iscLrnFlags: boolean;
  idleSpdTarg: boolean;
  iscStepTarg: boolean;
  knockSum: boolean;
  port3Snap0: boolean;
  port4Snap: boolean;
  injPw: boolean;
  injPw1: boolean;
  enerLen: boolean;
  airCnt0: boolean;
  airCnt1: boolean;
  injFactor: boolean;
  injFactor1: boolean;

  iscFlags0: boolean;
  temp1: boolean;
  temp2: boolean;
  temp3: boolean;
  temp4: boolean;
  temp5: boolean;
  o2BadCnt: boolean;
  egrtBadCnt: boolean;
  faultHi: boolean;
  faultLo: boolean;
  iatRaw: boolean;
  stFaultHi: boolean;
  stFaultLo: boolean;
  ftrim_low_0x3D: boolean;

  ecuVersion: boolean;
}