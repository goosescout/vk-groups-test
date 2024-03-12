import { AppRoot } from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"

import GlobalStyleManager from "@/components/GlobalStyleManager"
import Main from "@/home/Main"

export default function App() {
  return (
    <AppRoot>
      <GlobalStyleManager />
      <Main />
    </AppRoot>
  )
}
