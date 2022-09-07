import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/home.route";
import { Navigation } from "./routes/navigation/navigation.component";
import { SignIn } from "./routes/sing-in/sign-in.component";

const App = () => {

  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<div>Hi I'm the shop</div>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
