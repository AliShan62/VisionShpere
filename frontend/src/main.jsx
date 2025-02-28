import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/tailwind.output.css";
import ThemedSuspense from "./components/ThemedSuspense.jsx";
import { Windmill } from "@windmill/react-ui";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { LoadScript } from "@react-google-maps/api";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <LoadScript
            googleMapsApiKey="AIzaSyDuFmXH6wlIW4tzu7q9fyEK-_Gj_xE7nKE"
            libraries={["places"]}
          >
            <App />
          </LoadScript>
        </Windmill>
      </Suspense>
    </Provider>
  </StrictMode>
);
