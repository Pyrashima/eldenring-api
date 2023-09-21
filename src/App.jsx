import Weapons from "./weapons/components/Weapons/Weapons";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={client}>
      <GetWeaponsInitializer />
      <Weapons />
    </QueryClientProvider>
  )
}

export default App
