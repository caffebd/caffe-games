import { Show, createResource, createSignal } from "solid-js";
import Card from "../components/card";
import { games } from "../../data/db.json";
import { A } from "@solidjs/router";

// const fetchGames = async () => {
//   const res = await fetch("https://amarkotha.org/db.json");
//   return res.json();
// };

export default function TenMinutes(params) {
  //const [games] = createResource(fetchGames);

  const [searchTerm, setSearchTerm] = createSignal("");

  return (
    <Show when={games.length > 1} fallback={<p>Loading...</p>}>
      <div class="my-4 p-2 text-xl flex items-center gap-4">
      <div class="bg-white py-1 px-2 text-left rounded-sm shadow-md text-green-800">
       Games made in ten minutes by CAFFE students.
      </div>
        <h2 class="rounded-sm bg-orange-500 py-1 px-2 shadow-md text-white">
          Search...
        </h2>
        <input
          class="my-5 rounded-md shadow-md py-1 px-2"
          type="text"
          name=""
          id=""
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
        <For each={games}>
          {(game) => (
            game.page.includes("ten-minute") ?
            <Show
              when={
                
                game.title.toLowerCase().includes(searchTerm().toLowerCase()) ||
                game.description
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase()) ||
                game.searchtags
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase())||
                  game.authorSearch
                  .toLowerCase()
                  .includes(searchTerm().toLocaleLowerCase())
              }
            >
              <A href={"/game/" + game.short}>
                <Card rounded={true} flat={false}>
                  <img src={game.img} alt={game.title}></img>
                  <h2 class="my-3 font-bold text-center text-xl">
                    {game.title}
                  </h2>
                  <div class="flex">
                    <For each={game.tags}>
                      {(tag) => (
                        <p class="m-3 px-1 rounded bg-pink-400 text-white">
                          {tag}
                        </p>
                      )}
                    </For>
                  </div>
                  <p class="my-2">{game.description}</p>
                  <A class="btn" href={"/game/" + game.short}>
                    Play Game
                  </A>
                </Card>
              </A>
              </Show>:<div class="hidden"></div>
          )}
        </For>


      </div>
    </Show>
  );
}
