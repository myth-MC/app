import Head from "next/head";

import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ClipboardIcon
} from "@heroicons/react/24/outline";

import { toast } from "sonner";
import { usePlayer } from "@/contexts/player-context";
import { LoginRedirect } from "@/components/loginRedirect";
import {BetaFeatureInfo} from "@/components/betaFeatureInfo";

function InlineInput({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center w-full">
      <label
        htmlFor={label.replace(" ", "-").toLowerCase()}
        className="min-w-fit text-sm px-3 bg-neutral-100 text-neutral-500 dark:bg-neutral-900 h-9 items-center flex rounded-md rounded-r-none border border-neutral-200 dark:border-neutral-800"
      >
        {label}
      </label>
      <div className="relative w-full flex items-center">
        <Input
          type="text"
          readOnly
          autoComplete="off"
          id={label.replace(" ", "-").toLowerCase()}
          value={value}
          className="pr-9 border-l-0 rounded-l-none text-ellipsis"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 group hover:bg-inherit dark:hover:bg-inherit"
          onClick={() => {
            navigator.clipboard.writeText(value);
            toast.info(`Has copiado ${value} al portapapeles.`);
          }}
        >
          <ClipboardIcon className="w-5 h-5 group-hover:text-neutral-500 dark:group-hover:text-neutral-400" />
        </Button>
      </div>
    </div>
  );
}

export default function Account() {
  const router = useRouter();
  const {username} = router?.query

  const { data } = usePlayer(username);

  return (
    <>
      <Head>
        <title>🌟 mythMC | Ajustes</title>
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
        <meta name="robots" content="noindex,nofollow"/>
      </Head>
      <main
          className="flex min-h-[calc(100vh-65px)] md:border-l border-neutral-200 dark:border-neutral-800 pt-2 pb-8 px-5 md:px-8">
        <div className="mx-auto max-w-5xl w-full space-y-8 mt-4">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="other">Otros</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-4 space-y-8">
              <section className="flex flex-col space-y-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  General
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
                  Modifica los ajustes generales de la aplicación.
                </p>

                {data && (
                    <>
                      <Card>
                        <CardHeader className="border-b border-neutral-200 dark:border-neutral-800">
                          <CardTitle>Sesión</CardTitle>
                        </CardHeader>
                        <CardContent className="p-5 space-y-3">
                        <InlineInput
                          label="Nombre de usuario"
                          value={data.username}
                        />
                      </CardContent>
                    </Card>
                  </>
                )}

                {!data && (
                  <LoginRedirect/>
                )}

              </section>
              {data && (
                <section className="flex flex-col space-y-4">
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Administrar
                  </h1>
                  <div className="flex space-x-4">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        router.push(router.basePath)

                        toast.info("Has cerrado la sesión.")
                      }}
                    >
                      Abandonar sesión
                    </Button>
                  </div>
                </section>
              )}
            </TabsContent>

            <TabsContent value="other" className="mt-4 space-y-8">
              <section className="flex flex-col space-y-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Otros
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base">
                  Modifica otros ajustes útiles.
                </p>

                <BetaFeatureInfo/>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
