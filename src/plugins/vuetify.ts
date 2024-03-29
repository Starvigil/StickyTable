import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fr from "vuetify/src/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        score_0_dark: "#9d1414",
        score_1_dark: "#9d1414",
        score_2_dark: "#9d1414",
        score_3_dark: "#9d1414",
        score_4_dark: "#802f00",
        score_5_dark: "#804700",
        score_6_dark: "#04371e",
        score_7_dark: "#076737",
        score_8_dark: "#076737",
        score_9_dark: "#076737",
        score_10_dark: "#076737",

        score_0_regular: "#E84848",
        score_1_regular: "#E84848",
        score_2_regular: "#E84848",
        score_3_regular: "#E84848",
        score_4_regular: "#ff5e00",
        score_5_regular: "#ff8e00",
        score_6_regular: "#0FDE78",
        score_7_regular: "#0FDE78",
        score_8_regular: "#0FDE78",
        score_9_regular: "#0FDE78",
        score_10_regular: "#0FDE78",

        score_0_light: "#f7c2c2",
        score_1_light: "#fad4d4",
        score_2_light: "#fbdede",
        score_3_light: "#fbdede",
        score_4_light: "#ffcfb3",
        score_5_light: "#ffddb3",
        score_6_light: "#a6f9d0",
        score_7_light: "#a6f9d0",
        score_8_light: "#a6f9d0",
        score_9_light: "#a6f9d0",
        score_10_light: "#a6f9d0",

        score_0_lighter: "#fef4f4",
        score_1_lighter: "#fef4f4",
        score_2_lighter: "#fef4f4",
        score_3_lighter: "#fef4f4",
        score_4_lighter: "#fff9f5",
        score_5_lighter: "#fffaf5",
        score_6_lighter: "#e9fef4",
        score_7_lighter: "#eefef6",
        score_8_lighter: "#e5fdf1",
        score_9_lighter: "#e5fdf1",
        score_10_lighter: "#e5fdf1",
      },
    },
  },
  lang: {
    locales: { fr },
    current: "fr",
  },
});
