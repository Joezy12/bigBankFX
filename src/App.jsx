import Homepage from "./component/Homepage";
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
<section>
  <Routes>
    <Route index element={<Homepage />} />
  </Routes>
</section>
  )

}


export default App;
