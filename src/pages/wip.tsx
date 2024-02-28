import Head from "next/head";

import { Construction } from "@/components/construction";

export default function Wip() {
  return (
    <>
      <Head>
        <title>🔨 mythMC | En progreso</title>
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
        className={`flex min-h-screen md:border-l border-neutral-200 dark:border-neutral-800 pt-2 pb-8 px-5 md:px-8 justify-center items-center`}
      >
        <Construction />
      </main>
    </>
  );
}
