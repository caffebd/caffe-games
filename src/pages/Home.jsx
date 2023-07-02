import { Show, createResource, createSignal } from "solid-js";
import Card from "../components/card";
import { games } from "../../data/db.json";
import { A } from "@solidjs/router";

// const fetchGames = async () => {
//   const res = await fetch("https://amarkotha.org/db.json");
//   return res.json();
// };

export default function Home(params) {
  //const [games] = createResource(fetchGames);

  const [searchTerm, setSearchTerm] = createSignal("");

  return (
    <Show when={games.length > 1} fallback={<p>Loading...</p>}>
      <div class="my-4 p-2 text-xl flex items-center gap-4">
        <h2 class="rounded-sm bg-orange-500 px-2 shadow-md text-white">
          Search...
        </h2>
        <input
          class="my-5 rounded-md shadow-md px-2"
          type="text"
          name=""
          id=""
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div class="grid grid-cols-3 gap-10 my-4">
        <For each={games}>
          {(game) => (
            <Show
              when={
                game.title.toLowerCase().includes(searchTerm().toLowerCase()) ||
                game.description
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase()) ||
                game.searchtags
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase())
              }
            >
              <Card rounded={true} flat={false}>
                <img src={game.img} alt={game.title}></img>
                <h2 class="my-3 font-bold text-center text-xl">{game.title}</h2>
                <div class="flex">
                  <For each={game.tags}>
                    {(tag) => (
                      <p class="m-3 px-1 rounded bg-pink-400 text-white">
                        {tag}
                      </p>
                    )}
                  </For>
                </div>
                <p>{game.description}</p>
                <A class="btn" href={"/game/" + game.short}>
                  More info
                </A>
              </Card>
            </Show>
          )}
        </For>

        {/* <Card title="Run & Jump" /> */}
        <p>{console.log(games[0].url)}</p>
      </div>
    </Show>
  );
}
