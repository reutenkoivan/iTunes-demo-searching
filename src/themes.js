import { createMuiTheme } from "@material-ui/core/styles";

export const themes = {
  main: createMuiTheme({
    palette: {
      primary: {
        main: "#3F5866",
        contrastText: "#F0F0DF"
      },
      secondary: {
        main: "#BDD3DE",
        contrastText: "#F2F2F2"
      },
      error: {
        main: "#FF9000",
        contrastText: "#F0F0DF"
      },
      background: {
        paper: "#F0F0DF",
        default: "#fff"
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
        icon: "rgba(0, 0, 0, 0.12)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.1,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)"
      }
    },
    typography: {
      useNextVariants: true
    }
  })
};
