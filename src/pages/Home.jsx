import { Show, createResource, createSignal } from "solid-js";
import PageCard from "../components/page_card";
import { mainPages } from "../../data/main_pages.json";
import { A } from "@solidjs/router";

// const fetchGames = async () => {
//   const res = await fetch("https://amarkotha.org/db.json");
//   return res.json();
// };

export default function Home(params) {
  //const [games] = createResource(fetchGames);


  return (
    <Show when={mainPages.length > 0} fallback={<p>Loading...</p>}>
      {/* <div class="my-4 p-2 text-xl flex items-center gap-4">
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
      </div> */}
      <div class="grid grid-cols-1 gap-10 my-4">
        <For each={mainPages}>
          {(page) => (

                <PageCard rounded={true} flat={false}>
                <div class="grid grid-cols-3 gap-10 my-4">
                  <div class="col-span-2 md:col-span-1">
                  <img src={page.img} alt={page.title}></img>
                  </div>
                  <div class="col-span-1 md:col-span-2">
                  <h2 class=" font-bold text-center text-m md:text-xl">
                    {page.title}
                  </h2>
               
                  <div class="my-6 text-sm md:text-l lg:text-xl   ">{page.description}</div>
                 <div class=" mt-6 md:mt-36">
                  <A class="btn" href={"/" + page.short}>
                    More
                  </A>
                  </div>
                  </div>
                  </div>
                </PageCard>
              
         
          )}
        </For>

      </div>
    </Show>
  );
}
