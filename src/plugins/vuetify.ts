import "../css/main.scss";
import { ThemeDefinition, createVuetify } from "vuetify";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#7986CB",
    "primary-darken-1": "#5C6BC0",
    secondary: "#00897B",
    "secondary-darken-1": "#00796B",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#5C6BC0",
    "primary-darken-1": "#3949AB",
    secondary: "#00796B",
    "secondary-darken-1": "#00695C",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
