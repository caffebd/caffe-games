import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

import banner from "./assets/caffe_games_banner.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Game from "./pages/Game";
import Originals from "./pages/Originals";
import Jams from "./pages/Jams";
import VS from "./pages/Vs";
import TenMinutes from "./pages/TenMinutes";
import Stealth from "./pages/Stealth";
import All from "./pages/All";
function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        {/* <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span> */}
{/* 
        <A href="/">
          <h1 class="m-3 px-3 py-2 rounded bg-red-500 text-white text-2xl">
            CAFFE Games
          </h1>
        </A> */}
        {/* <A href="/cart">Cart</A> */}
      </header>
      <A href="/">
      <img
        class="rounded-md"
        src="/images/caffe_games_banner.png"
        alt="CAFFE Games Banner"
      />
      </A>
      <A href="/all">
        <div class="border-double border-2 border-red-800 bg-red-500 py-1 px-2  mt-3 w-1/6 text-center rounded-sm shadow-md text-white">
          See all games
        </div>
      </A>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/originals" component={Originals} />
        <Route path="/jams" component={Jams} />
        <Route path="/vs" component={VS} />
        <Route path="/cart" component={Cart} />
        <Route path="/ten-minute" component={TenMinutes} />
        <Route path="/stealth" component={Stealth} />
        <Route path="/all" component={All} />
        <Route path="/game/:short" component={Game} />
      </Routes>
    </div>
  );
}

export default App;
