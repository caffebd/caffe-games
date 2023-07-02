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
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={myGame.img} alt="product image" />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{myGame.title}</h2>
            <p class="text-xl mb-7">{myGame.description}</p>
            <a class="btn" href={myGame.url} target="blank">
              PLAY!
            </a>
          </div>
          <Show when={myGame.tags.includes("MakeCode")}>
            <div class="col-span-5">
              <iframe
                style="width:100%;height:100%;"
                src="https://arcade.makecode.com/---run?id=_KP10WrM75gtv"
                allowfullscreen="allowfullscreen"
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
                frameborder="0"
              ></iframe>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
}
