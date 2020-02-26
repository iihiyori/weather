import moment from "moment";

export const filDate = value => {
  if (value === "") {
    return "";
  }
  return moment.unix(value).format("YYYY/MM/DD HH:mm");
};

export const filDay = value => {
  if (value === "") {
    return "";
  }
  return moment.unix(value).format("MM/DD");
};

export const filTime = value => {
  if (value === "") {
    return "";
  }
  return moment.unix(value).format("HH:mm");
};

export const filMathFloor = value => {
  return Math.floor(value) + "°";
};

export const filWeekDay = value => {
  if (value === "") {
    return "";
  }
  return moment.unix(value).format("ddd");
};

export const filPercent = value => {
  return Math.floor(value * 100) + "%";
};

export const filPercentage = value => {
  return value * 100;
};

export default {
  install(vue) {
    vue.filter("filDate", filDate);
    vue.filter("filDay", filDay);
    vue.filter("filTime", filTime);
    vue.filter("filMathFloor", filMathFloor);
    vue.filter("filWeekDay", filWeekDay);
    vue.filter("filPercent", filPercent);
    vue.filter("filPercentage", filPercentage);

    vue.prototype.$customFilter = {
      filDate,
      filDay,
      filTime,
      filMathFloor,
      filWeekDay,
      filPercent,
      filPercentage
    };
  }
};
