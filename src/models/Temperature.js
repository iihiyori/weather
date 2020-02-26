export class Temperature {
  constructor(temperature) {
    this.temperature = temperature.data.currently.temperature; //気温
    this.temperature_high = temperature.data.daily.data[0].temperatureMax; //最高気温
    this.temperature_min = temperature.data.daily.data[0].temperatureMin; //最低気温
    this.temperature_percent = temperature.data.daily.data[0].precipProbability; //最低気温
    this.temperature_date = temperature.data.hourly.data;
    this.temperature_week = temperature.data.daily.data;
  }

  /**
   * インスタンス化
   * @param temperature
   * @returns {Temperature}
   */
  static create(temperature) {
    return new Temperature(temperature);
  }

  /**
   * 気温
   * @returns {string}
   */
  get displayTemperature() {
    return Math.round(this.temperature) + "°";
  }

  /**
   * 最高気温
   * @returns {string}
   */
  get displayTemperatureHigh() {
    return Math.round(this.temperature_high) + "°";
  }

  get displayTemperatureMin() {
    return Math.round(this.temperature_min) + "°";
  }

  get todayTemperature() {
    return this.temperature_date;
  }

  get weekTemperature() {
    return this.temperature_week;
  }
}
