import type { ItemType } from "@/types/items";

import Image from "next/image";

import items from "@/data/items.json";

import { Dispatch, SetStateAction } from "react";

import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@react-hook/media-query";
import { BetaFeatureInfo } from "@/components/betaFeatureInfo";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

interface Props {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  item: ItemType | null;
}

export const ItemSheet = ({ open, setIsOpen, item }: Props) => {
  //const { activePlayer, patchPlayer } = useContext(PlayersContext);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  /*
  const obtainedItems = useMemo(() => {
    if (
      !activePlayer ||
      !activePlayer.fishing ||
      !activePlayer.fishing.fishCaught
    )
      return new Set([]);

    return new Set(activePlayer.fishing.fishCaught);
  }, [activePlayer]);

   */

  const iconURL = item
    ? items[item.fullName.toString() as keyof typeof items].iconURL
    : "/items/unknown.png";

  const name =
      item && items[item.fullName.toString() as keyof typeof items].fullName;

  const description =
      item && items[item.fullName.toString() as keyof typeof items].description;

  if (isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader className="mt-4">
            <div className="flex justify-center">
              <Image
                  src={iconURL}
                  alt={name ? name : "No hay información"}
                  height={64}
                  width={64}
              />
            </div>
            <SheetTitle className="text-center">
              {name ? name : "No hay información"}
            </SheetTitle>
            <SheetDescription className="text-center italic">
              {description ? description : "No hay descripción"}
            </SheetDescription>
          </SheetHeader>
          {name && (
              <div className="space-y-6 mt-4">
                <section className="space-y-2">
                  <div className="grid grid-cols-1 gap-2">
                    <BetaFeatureInfo/>
                  </div>
                </section>
                <section className="space-y-2">
                  <h3 className="font-semibold">Modos de juego</h3>
                  <Separator/>
                  <ul className="list-disc list-inside">
                    {item.gamemodes.map((gamemode) => (
                        <li
                            key={gamemode}
                            className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm"
                        >
                          {gamemode}
                        </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Rareza</h3>
                  <Separator/>
                  <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                    {item ? item.rarity : "No hay información"}
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Disponibilidad</h3>
                  <Separator/>

                  <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                    Desde el {item ? item.since : "N/A"} hasta el {item ? item.until : "N/A"}
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Información adicional</h3>
                  <Separator/>

                  <ul className="list-disc list-inside">
                      {item.event && (
                          <li className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                            Se consigue en eventos.
                          </li>
                      )}
                  </ul>
                </section>
              </div>
          )}
        </SheetContent>
      </Sheet>
    );
  }

  return (
      <Drawer open={open} onOpenChange={setIsOpen}>
        <DrawerContent className="fixed bottom-0 left-0 right-0 max-h-[90dvh]">
          <ScrollArea className="overflow-auto">
            <DrawerHeader className="mt-4 -mb-4">
              <div className="flex justify-center">
                <Image
                  src={iconURL}
                  alt={name ? name : "No hay información"}
                  height={64}
                  width={64}
                />
            </div>
            <DrawerTitle className="text-center">
              {item ? item.fullName : "No hay información"}
            </DrawerTitle>
            <DrawerDescription className="text-center italic">
              {item ? item.description : "No hay descripción"}
            </DrawerDescription>
          </DrawerHeader>
          {name && (
              <div className="space-y-6 p-6">
                <section className="space-y-2">
                  <h3 className="font-semibold">Modos de juego</h3>
                  <Separator/>
                  <ul className="list-disc list-inside">
                    {item.gamemodes.map((gamemode) => (
                        <li
                            key={gamemode}
                            className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm"
                        >
                          {gamemode}
                        </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Rareza</h3>
                  <Separator/>
                  {item ? item.rarity : "No hay información"}
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Disponibilidad</h3>
                  <Separator/>

                  Desde el {item ? item.since : "N/A"} hasta el {item ? item.until : "N/A"}
                </section>

                <section className="space-y-2">
                  <h3 className="font-semibold">Información adicional</h3>
                  <Separator/>

                  <ul className="list-disc list-inside">
                    {item.event && (
                        <li className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Se consigue en eventos.
                        </li>
                    )}
                  </ul>
                </section>
              </div>
          )}
          </ScrollArea>
        </DrawerContent>
      </Drawer>
  );
};
