import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

import {PlayerNameInputCard} from "@/components/cards/player-name-input-card";
import {IconSearch} from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>mythMC | Estadísticas</title>
      </Head>
      <main
          className={`flex min-h-[calc(100vh-65px)]  flex-col md:border-l border-neutral-200 dark:border-neutral-800 pt-2 pb-8 px-5 md:px-8 items-center`}
      >
        <main className="flex flex-col items-center justify-center flex-grow max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Image
                src="/favicon.png"
                alt="Logotipo de mythMC"
                className="rounded-sm"
                width={64}
                height={64}
            />
            <h2 className="text-3xl font-semibold text-center">app.mythmc.ovh</h2>
          </div>
          <h3 className="text-lg font-normal text-center">
          Consulta tus estadísticas de mythMC en directo.
          </h3>
        </main>
        <div className="p-2 w-300 flex-grow">
          <PlayerNameInputCard
              key="buscar"
              title="Buscar"
              Icon={IconSearch}
              description="Introduce el nombre del usuario que quieres buscar."
              showTitle={true}
          />
        </div>

        <footer className="p-2 w-full">
          <div className="grid lg:grid-cols-1 gap-4 grid-cols-1">
            <Link href="https://discord.mythmc.ovh/">
              <div
                  className="flex select-none items-center space-x-3 rounded-lg border py-4 px-5  text-neutral-950 dark:text-neutral-50 shadow-sm transition-colors border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-600 hover:border-blue-600 hover:cursor-pointer">

                <div>
                  <Image
                      src="/discord.png"
                      alt="Logotipo de Discord"
                      className="rounded-sm dark:hidden"
                      width={48}
                      height={48}
                  />
                  <Image
                      src="/dark/discord.png"
                      alt="Logotipo de Discord"
                      className="rounded-sm hidden dark:block"
                      width={48}
                      height={48}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">Visítanos en Discord</p>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    Únete a nuestro Discord si necesitas ayuda.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="https://docs.mythmc.ovh/">
              <div
                  className="flex select-none items-center space-x-3 rounded-lg border py-4 px-5  text-neutral-950 dark:text-neutral-50 shadow-sm transition-colors border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-600 hover:border-blue-600 hover:cursor-pointer">

                <div>
                  <Image
                      src="/gitbook.png"
                      alt="Logotipo de GitBook"
                      className="rounded-sm dark:hidden"
                      width={48}
                      height={48}
                  />
                  <Image
                      src="/dark/gitbook.png"
                      alt="Logotipo de GitBook"
                      className="rounded-sm hidden dark:block"
                      width={48}
                      height={48}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">Consulta nuestra guía</p>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    Nuestra guía está escrita tanto para novatos como para jugadores avanzados.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/myth-MC">
              <div
                  className="flex select-none items-center space-x-3 rounded-lg border py-4 px-5  text-neutral-950 dark:text-neutral-50 shadow-sm transition-colors border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-600 hover:border-blue-600 hover:cursor-pointer">

                <div>
                  <Image
                      src="/github.png"
                      alt="Logotipo de GitHub"
                      className="rounded-sm dark:hidden"
                      width={48}
                      height={48}
                  />
                  <Image
                      src="/dark/github.png"
                      alt="Logotipo de GitHub"
                      className="rounded-sm hidden dark:block"
                      width={48}
                      height={48}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">Ver en GitHub</p>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    Visita nuestra organización en GitHub.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
