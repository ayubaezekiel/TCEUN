import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Button, MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import "@mantine/dates/styles.css";

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
        <App />

        <Notifications position="top-right" zIndex={1001} />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
