import {API, DynamicPlatformPlugin, Logger, PlatformAccessory, PlatformConfig} from 'homebridge';

export class Session {

  public constructor(
    public readonly log: Logger,
    public readonly username: String,
    public readonly password: String) {
    this._login(username, password);
  }

  private _login = (username: String, password: String) => {

  }
}