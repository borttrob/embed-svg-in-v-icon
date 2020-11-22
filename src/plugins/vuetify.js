import Vue from "vue";
import Vuetify from "vuetify/lib";
import MySvgIcon from "@/components/MySvgIcon";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
    values: {
      mySvgIcon: { component: MySvgIcon }
    }
  }
});
