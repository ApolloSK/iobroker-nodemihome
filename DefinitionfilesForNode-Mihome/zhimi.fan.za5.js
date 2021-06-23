const Device = require('../device-miio');
 
module.exports = class extends Device {
 
  static model = 'zhimi.fan.za5';
  static name = 'Smartmi Fan 3';
  static image = 'http://static.home.mi.com/app/image/get/file/developer_1541408255kg3xtr1j.png';
 
  constructor(opts) {
    super(opts);
 
    this._miotSpecType = 'urn:miot-spec-v2:device:fan:0000A005:zhimi-za5:2';
    this._propertiesToMonitor = [
      'fan:on',
      'fan:mode',
      'fan:fan-level',
      'fan:horizontal-swing',
      'fan:horizontal-angle',
      'fan:status',
      'indicator-light:on',
      'alarm:alarm',
      'motor-controller:motor-control',
      'physical-controls-locked:physical-controls-locked',
      'off-delay-time:off-delay-time'
      ];
  }
 
  getPower() {
    return this.properties['fan:on'];
  }
   
  setPower(v) {
    return this.miotSetProperty('fan:on', v);
  }

  setMode(v) {
    return this.miotSetProperty('fan:mode', v);
  }
 
  setFanLevel(v) {
    return this.miotSetProperty('fan:fan-level', v);
  }

  setHorizontalSwing(v) {
    return this.miotSetProperty('fan:horizontal-swing', v);
  }

  setHorizontalAngle(v) {
    return this.miotSetProperty('fan:horizontal-angle', v);
  }

  setIndicatorLight(v) {
    return this.miotSetProperty('indicator-light:on', v);
  }
  
  setAlarm(v) {
    return this.miotSetProperty('alarm:alarm', v);
  }

  setMotorController(v) {
    return this.miotSetProperty('motor-controller:motor-control', v);
  }

  setChildLock(v) {
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }

  setOffDelayTime(v) {
    return this.miotSetProperty('off-delay-time:off-delay-time', v);
  }

};
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
