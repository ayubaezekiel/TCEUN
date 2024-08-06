import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Button, MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const mantinetheme = createTheme({
  primaryColor: "cyan",
  primaryShade: 7,
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "lg",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={mantinetheme}>
        <Theme>
          <App />
        </Theme>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
