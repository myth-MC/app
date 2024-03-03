import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
} from "react";

import {
  itemsNavigation,
  linksNavigation,
  miscNavigation,
  playerNavigation,
} from "@/components/sidebar";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import {useRouter} from "next/router";
import {usePlayer} from "@/contexts/player-context";
import Image from "next/image";
import {toast} from "sonner";
import {PlayerNameInputCard} from "@/components/cards/player-name-input-card";
import {IconSearch} from "@tabler/icons-react";

interface Props {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

export const MobileNav = ({
  open,
  setIsOpen,
}: Props) => {

  const pathname = usePathname();

  const router = useRouter();
  const {username} = router?.query

  const { data } = usePlayer(username);

  return (
    <Drawer open={open} onOpenChange={setIsOpen}>
      <DrawerContent className="fixed bottom-0 left-0 right-0 max-h-[90dvh]">
        <ScrollArea className="overflow-auto">
          <div className="space-y-6 p-6">
            {/* Navigation */}
            <nav className="space-y-2">
              <h3 className="font-semibold">Navegación</h3>
              <Separator />

              {/* Player */}
              <section>
                <div className="space-y-1">

                  {!data && (
                      <div className="w-full justify-start">
                        <Button
                            className={cn(
                                "w-full justify-start",
                                "text-neutral-600 dark:text-neutral-400"
                            )}
                            onClick={() => {
                              router.push("/search")
                              setIsOpen(false);
                            }}
                            variant="ghost">
                             <IconSearch className="w-4 h-4 mr-2" aria-hidden={true}/>Buscar
                        </Button>
                      </div>
                  )}

                  {data?.username && (
                      <div>
                        <Button
                            className={cn(
                                "w-full justify-start",
                                "text-neutral-600 dark:text-neutral-400"
                            )}
                            variant="ghost">
                          <Image
                              width={36}
                            height={36}
                            className="h-6 w-auto"
                            src={"https://minotar.net/helm/" + data?.username + ".png"}
                            alt={"Avatar de " + data?.username}
                        />

                        <p className="pl-1">{data?.username}</p>
                      </Button>

                      <Button
                          className={cn(
                              "w-full justify-start",
                              "text-neutral-600 dark:text-neutral-400"
                          )}
                          variant="ghost"
                          onClick={() => {
                            toast.info("Has cerrado la sesión.")

                            router.push(router.basePath);
                            setIsOpen(false);
                          }}>
                        <span className="text-red-400">Abandonar sesión</span>
                      </Button>
                    </div>
                  )}
                </div>
              </section>


              <section>
              <h4 className="mt-4 mb-2 font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                  Jugador
                </h4>
                <div className="space-y-1">
                  {playerNavigation.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        item.href === pathname
                          ? ""
                          : "text-neutral-600 dark:text-neutral-400"
                      )}
                      asChild
                      onClick={() => {
                        setIsOpen(false);
                        router.push({
                          pathname: item.href,
                          query: router.query
                        });
                      }}
                    >
                      <p>
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {item.name}
                      </p>
                    </Button>
                  ))}
                </div>
              </section>
              {/* Collections */}
              <section>
                <h4 className="mt-4 mb-2 font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                  Estadísticas
                </h4>
                <div className="space-y-1">
                  {itemsNavigation.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        item.href === pathname
                          ? ""
                          : "text-neutral-600 dark:text-neutral-400"
                      )}
                      asChild
                      onClick={() => {
                        setIsOpen(false);
                        router.push({
                          pathname: item.href,
                          query: router.query
                        });
                      }}
                    >
                      <p>
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {item.name}
                      </p>
                    </Button>
                  ))}
                </div>
              </section>
              {/* Misc */}
              <section>
                <h4 className="mt-4 mb-2 font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                  Otros
                </h4>
                <div className="space-y-1">
                  {miscNavigation.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        item.href === pathname
                          ? ""
                          : "text-neutral-600 dark:text-neutral-400"
                      )}
                      asChild
                      onClick={() => {
                        setIsOpen(false);
                        router.push({
                          pathname: item.href,
                          query: router.query
                        });
                      }}
                    >
                      <p>
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {item.name}
                      </p>
                    </Button>
                  ))}
                </div>
              </section>
              {/* Links, because fuck link buttons */}
              <section>
                <h4 className="mt-4 mb-2 font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
                  Enlaces
                </h4>
                <div className="space-y-1">
                  {linksNavigation.map((item) => (
                    <Button
                      key={item.href}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        item.href === pathname
                          ? ""
                          : "text-neutral-600 dark:text-neutral-400"
                      )}
                      asChild
                      onClick={() => {
                        setIsOpen(false);
                        router.push({
                          pathname: item.href,
                          query: router.query
                        });
                      }}
                    >
                      <p>
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        {item.name}
                      </p>
                    </Button>
                  ))}
                </div>
              </section>
            </nav>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
