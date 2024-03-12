import React from "react"

import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import App from "@/App"
import ReduxProvider from "@/components/ReduxProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
)
