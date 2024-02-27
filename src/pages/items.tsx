import Head from "next/head";

import type {ItemType} from "@/types/items";

import items from "@/data/items.json";

import { useEffect, useState } from "react";

import { FilterButton, FilterSearch } from "@/components/filter-btn";
import { ItemSheet } from "@/components/sheets/item-sheet";

import { Command, CommandInput } from "@/components/ui/command";
import {IconClock, IconQuestionMark, IconDeviceGamepad} from "@tabler/icons-react";
import {ItemCard} from "@/components/cards/item-card";
import {useRouter} from "next/router";
import {usePlayer} from "@/contexts/mythplayer-context";

const gamemode = [
  {
    value: "all",
    label: "Todos"
  },
  {
    value: "Metrópolis",
    label: "Metrópolis"
  },
  {
    value: "Brawl",
    label: "Brawl"
  },
  {
    value: "The Towers",
    label: "The Towers"
  },
  {
    value: "MiniWalls",
    label: "MiniWalls"
  },
  {
    value: "Arcade",
    label: "Arcade"
  }
]

const rarity = [
  {
    value: "all",
    label: "Todos"
  },
  {
    value: "Común",
    label: "Común"
  },
  {
    value: "Raro",
    label: "Raro"
  }
]

const type = [
  {
    value: "all",
    label: "Todos",
  },
  {
    value: "Eventos",
    label: "Eventos",
  }
];

export default function Items() {
  const router = useRouter();
  const {username} = router?.query

  // Datos del jugador
  const { data } = usePlayer(username);

  const [open, setIsOpen] = useState(false);
  const [item, setItem] = useState<ItemType | null>(null);
  const [obtainedItems, setObtainedItems] = useState<Set<String>>(new Set());

  const [search, setSearch] = useState("");
  const [_filter, setFilter] = useState("all");

  const [_gamemodeFilter, setGamemodeFilter ] = useState("all");
  const [_rarityFilter, setRarityFilter ] = useState("all");

  const [_typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    setObtainedItems(new Set(["Objeto de Prueba"]));

    if(data?.username) {
      document.title = "mythMC | Objetos de " + data.username;
    }

    /*
    if (activePlayer) {
      setFishCaught(new Set(activePlayer?.fishing?.fishCaught ?? []));
    }

     */
  }, [data]);

  return (
    <>
      <Head>
        <title>mythMC | Objetos</title>
        <meta
            name="title"
            content="mythMC | Objetos"
        />
        <meta
            name="description"
            content="mythMC es un servidor de Minecraft hispanohablante con una gran comunidad. Puedes usar app.mythmc.ovh para consultar tus estadísticas personales y otros recursos útiles en cualquier momento. ¿A qué esperas?"
        />
        <meta
            name="og:description"
            content="mythMC es un servidor de Minecraft hispanohablante con una gran comunidad. Puedes usar app.mythmc.ovh para consultar tus estadísticas personales y otros recursos útiles en cualquier momento. ¿A qué esperas?"
        />
        <meta
            name="twitter:description"
            content="mythMC es un servidor de Minecraft hispanohablante con una gran comunidad. Puedes usar app.mythmc.ovh para consultar tus estadísticas personales y otros recursos útiles en cualquier momento. ¿A qué esperas?"
        />
        <meta
            name="keywords"
            content="minecraft, minecraft server, game server, minecraft game server, minecraft builds, minecraft java, minecraft bedrock, java, bedrock, xbox, minecraft xbox, ps4, ps5, minecraft ps4, minecraft ps5, minecraft skins, minecrafts, minecraft pc, minecraft survival, survival, mythMC, mcpe, minecraft pe, pocket edition"
        />
      </Head>
      <main
          className={`flex min-h-screen md:border-l border-neutral-200 dark:border-neutral-800 pt-2 pb-8 px-5 md:px-8`}
      >
        <div className="mx-auto w-full space-y-4 mt-4">
          <h1 className="ml-1 text-2xl font-semibold text-gray-900 dark:text-white">
            Objetos
          </h1>

          {/* Objetos */}
          <section className="space-y-3">
            <p className="ml-1 text-l text-gray-900 dark:text-white">
              Todos los objetos{data && " de " + data.username}.
            </p>

            {/* Filtros */}
            <div className="grid grid-cols-1 lg:flex justify-between gap-2">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:flex">
                <FilterButton
                  target={"0"}
                  _filter={_filter}
                  title={`Por obtener (${
                    Object.keys(items).length - obtainedItems.size
                  })`}
                  setFilter={setFilter}
                />
                <FilterButton
                  target={"2"}
                  _filter={_filter}
                  title={`Obtenidos (${obtainedItems.size})`}
                  setFilter={setFilter}
                />
              </div>
              <div className="grid grid-cols-1 sm:flex gap-2 items-stretch">
                <div className="grid grid-cols-1 gap-2 sm:gap-3  sm:flex">
                  <FilterSearch
                    target={"all"}
                    _filter={_typeFilter}
                    title={"Tipo"}
                    data={type}
                    setFilter={setTypeFilter}
                    icon={IconClock}
                   />
                  <FilterSearch
                    target={"all"}
                    _filter={_gamemodeFilter}
                    title={"Modo de juego"}
                    data={gamemode}
                    setFilter={setGamemodeFilter}
                    icon={IconDeviceGamepad}
                  />
                  <FilterSearch
                    target={"all"}
                    _filter={_rarityFilter}
                    title={"Rareza"}
                    data={rarity}
                    setFilter={setRarityFilter}
                    icon={IconQuestionMark}
                  />
                </div>
                <div className="flex">
                  <Command className="border border-b-0 dark:border-neutral-800">
                    <CommandInput
                      onValueChange={(v) => setSearch(v)}
                      placeholder="Buscar"
                    />
                  </Command>
                </div>
              </div>
            </div>

            {/* Objetos a mostrar */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Object.values(items)

                .filter((i) => {
                  if (!search) return true;
                  const name =
                    items[i.fullName as keyof typeof items].fullName;
                  return name.toLowerCase().includes(search.toLowerCase());
                })

                .filter((i) => {
                  if (_filter === "0") {
                    return !obtainedItems.has(i.fullName); // por obtener
                  } else if (_filter === "2") {
                    return obtainedItems.has(i.fullName); // obtenido
                  } else return true; // todos
                })

                .filter((i) => {
                  if (_typeFilter === "all") return true;
                  if (_typeFilter === "Eventos") return i.event;
                  if (_typeFilter === "not-obtained") return !obtainedItems.has(i.fullName);
                })

                .filter((i) => {
                  if ("gamemodes" in i) {
                    if (_gamemodeFilter === "all") return true;
                    return i.gamemodes.includes(_gamemodeFilter);
                  }
                })

                .filter((i) => {
                  if("rarity" in i) {
                    if (_rarityFilter === "all") return true;
                    return i.rarity.includes(_rarityFilter);
                  }
                })

                .map((i) => (
                  <ItemCard
                    key={i.fullName}
                    item={i as ItemType}
                    completed={obtainedItems.has(i.fullName)}
                    setIsOpen={setIsOpen}
                    setObject={setItem}
                    type="item"
                  />
                ))}
            </div>
          </section>
        </div>
        <ItemSheet open={open} setIsOpen={setIsOpen} item={item} />
      </main>
    </>
  );
}
