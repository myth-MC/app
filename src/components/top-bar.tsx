import Image from "next/image";
import Link from "next/link";

import packageJson from "../../package.json";
const { version } = packageJson;

import { useRef, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CreditsDialog } from "@/components/dialogs/credits-dialog";
import { MobileNav } from "@/components/sheets/mobile-nav";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import {HamburgerMenuIcon} from "@radix-ui/react-icons";

import {useRouter} from "next/router";
import {usePlayer} from "@/contexts/player-context";
import {toast} from "sonner";
import {PlayerNameInputCard} from "@/components/cards/player-name-input-card";
import {IconSearch} from "@tabler/icons-react";

export function Topbar() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);

  const router = useRouter();
  const {username} = router?.query

  const { data } = usePlayer(username);

  return (
    <>
      <div className="flex items-center justify-between py-3.5 sm:flex-row sm:items-center sm:space-y-0 md:h-16 px-7 bg-white dark:bg-neutral-950">
        <div className="flex flex-shrink-0 items-center">
          <Image
            width={36}
            height={36}
            onClick={() => router.push({
              pathname: "/",
              query: router.query
            })}
            className="h-9 w-auto"
            src="/favicon.png"
            alt="app.mythmc.ovh logo"
          />
          <h1 className="pl-3 font-medium">app.mythmc.ovh</h1>
          <p className="pl-2 font-light" onClick={() => setCreditsOpen(true)}>{version}</p>
        </div>

        {/* Móviles */}
        <div className="md:hidden flex justify-end">
          <Button variant="outline" onClick={() => setMobileOpen(true)}>
            <HamburgerMenuIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Escritorio */}
        <div className="hidden ml-auto w-full space-x-2 sm:justify-end md:flex">
          <Button
            variant="secondary"
            onClick={() => {
              inputRef.current?.click();
            }}
            className="hover:bg-green-500 hover:text-neutral-50 dark:hover:bg-green-500 dark:hover:text-neutral-50">
            <Link href="https://docs.mythmc.ovh">Guía y documentación</Link>
          </Button>

          {!data && (
              <div className="flex flex-shrink-0 items-center">
                <PlayerNameInputCard
                    key="buscar"
                    title="Buscar"
                    Icon={IconSearch}
                    description="Introduce el nombre del usuario que quieres buscar."
                    showTitle={false}
                />
              </div>
          )}

          {data && (
              <div className="flex flex-shrink-0 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        className="hover:bg-blue-500 hover:text-neutral-50 dark:hover:bg-blue-500 dark:hover:text-neutral-50"
                  >
                    <Image
                        width={36}
                        height={36}
                        className="h-6 w-auto"
                        src={"https://minotar.net/helm/" + data?.username + ".png"}
                        alt={"Avatar de " + data?.username}
                    />
                    <p className="pl-1 font-medium">{data?.username}</p>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48" align="end">
                  <DropdownMenuItem
                      onClick={() => {
                        router.push(router.basePath)

                        toast.info("Has cerrado la sesión.")
                      }}
                  >
                    <span className="text-red-400">Abandonar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
      <Separator/>
      <MobileNav
        open={mobileOpen}
        setIsOpen={setMobileOpen}
        inputRef={inputRef}
      />
      <CreditsDialog open={creditsOpen} setOpen={setCreditsOpen} />
    </>
  );
}
