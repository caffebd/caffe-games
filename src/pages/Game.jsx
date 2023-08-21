import { A, useParams } from "@solidjs/router";
import { games } from "../../data/db.json";

function name(params) {}

export default function Game() {
  const params = useParams();
  let myGame = games.find((game) => {
    return game.short === params.short;
  });
  //   let myGame = {};
  //   games.forEach((element) => {
  //     if (element.short == params.short) {
  //       myGame = element;
  //     }
  // });
  return (
    <div class="my-7">
      <Show when={myGame != {}} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-28 md:gap-22 grid-rows-6 md:grid-rows-4  ">
          <div class="col-span-2 row-span-full md:col-span-3">
            <Show
              when={myGame.tags.includes("MakeCode")}
              fallback={
                <Show
                  when={myGame.tags.includes("JavaScript")}
                  fallback={<img src={myGame.img} alt="product image" />}
                >
                  <iframe
                    frameborder="0"
                    src={myGame.embedurl}
                    allowfullscreen=""
                    width="800"
                    height="620"
                  ></iframe>
                </Show>
              }
            >
              <iframe
                style="width:100%;height:100%;"
                src={myGame.embedurl}
                allowfullscreen="allowfullscreen"
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
                frameborder="0"
              ></iframe>
            </Show>
          </div>

          <div class="col-span-2 px-12">
            <h2 class="text-3xl font-bold mb-7">{myGame.title}</h2>
            <p class="text-xl mb-7">{myGame.description}</p>
            <a class="btn" href={myGame.url} target="blank">
              {myGame.tags.includes("MakeCode")
                ? "Play at MakeCode"
                : "Play Game at itch.io"}
            </a>
            <h2 class="text-xl mt-8 mb-4">Created by...</h2>
            <div class="flex">
              <For each={myGame.authors}>
                {(name) => (
                  <p class="px-2 mr-4 mt-3 rounded bg-purple-600 text-white text-lg">
                    {name}
                  </p>
                )}
              </For>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}
