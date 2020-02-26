import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    raceData: []
  },
  mutations: {
    setData(state, payload) {
      state.raceData = payload.raceData;
    }
  },
  actions: {
    readJson({ commit }) {
      // storageの情報を取得
      const firebaseStorage = firebase.storage();
      // ファイル名を指定して情報を取得
      // これはあくまでファイルに関する情報でありファイルの中身ではない
      const fileRef = firebaseStorage.ref("cors.json");
      // getDownloadURLでファイルにアクセスするためのURLを取得できる
      fileRef
        .getDownloadURL()
        .then(url => {
          // 取得したURLにGETリクエストを投げる
          return axios.get(url);
        })
        .then(response => {
          // 返ってきたresponseのdataプロパティにjsonファイルの中身が格納されている
          const data = response.data;
          console.log(data);
          commit("setData", { raceData: data });
        });
    }
  },
  modules: {}
});
