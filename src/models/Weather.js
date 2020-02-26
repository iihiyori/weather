export class Weather {
  constructor(weather) {
    this.place = weather.data.name || null; //都市名
    this.weather = weather.data.weather[0].description; //天気
    // this.humidity = weather.data.humidity.main; //湿度
  }

  /**
   * インスタンス化
   * @param weather
   * @returns {Weather}
   */
  static create(weather) {
    return new Weather(weather);
  }

  /**
   * 場所
   * @returns {*|null}
   */
  get displayPlace() {
    return this.place;
  }
}
