import Head from "next/head";

import { InfoCard } from "@/components/cards/info-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  IconCurrencyDollar,
  IconUser,
  IconHome,
  IconHomeSearch, IconHeartCheck, IconSword, IconSkull, IconClock
} from "@tabler/icons-react";

import {useRouter} from "next/router";
import {usePlayer} from "@/contexts/mythplayer-context";
import {BetaFeatureInfo} from "@/components/betaFeatureInfo";
import {useEffect} from "react";
import achievements from "@/data/achievements.json";
import {AchievementCard} from "@/components/cards/achievement-card";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {PercentageIndicator} from "@/components/percentage";
import {PerfectionCard} from "@/components/cards/perfection-card";
import Image from "next/image";

export default function Player() {
  const router = useRouter();
  const {username} = router?.query

  const { data } = usePlayer(username);

  // Player variables
  const mytharites = data?.mytharites ?? "0";
  const prestige = data?.prestige ?? "0";
  const kills = data?.kills ?? "0";
  const deaths = data?.deaths ?? "0";
  const firstJoin = data?.firstJoin ?? "No hay información";
  const lastJoin = data?.lastJoin ?? "No hay información";
  const playTimeInHours = Math.floor((data?.playTime ?? "0") / 3600);

  useEffect(() => {
    if(data?.username) {
      document.title = "🌟 mythMC | Datos de " + data.username;
    }
  }, [data]);

  const getAchievementProgress = (name: string) => {
    let completed = false;
    let additionalDescription = "";

    return { completed, additionalDescription }

    /*
    if (!activePlayer) {
      return { completed, additionalDescription };
    }

     */
  };

  return (
    <>
      <Head>
        <title>🌟 mythMC | Datos del jugador</title>
        <meta
          name="title"
          content="🌟 mythMC | Datos del jugador"
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
            Información de {data?.username ?? "N/A"}
          </h1>

          <BetaFeatureInfo/>

          { /* Información básica */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <InfoCard
                title="Nombre de usuario"
                description={
                    data?.username ?? "No hay información"
                }
                Icon={IconUser}
            />
            <InfoCard
                title="Mitaritas"
                description={
                    mytharites
                }
                Icon={IconCurrencyDollar}
            />
            <InfoCard
                title="Se unió el"
                description={
                    firstJoin
                }
                Icon={IconHome}
            />
            <InfoCard
                title="Jugó por última vez el"
                description={
                    lastJoin
                }
                Icon={IconHomeSearch}
            />
            <InfoCard
                title="Prestigio"
                description={
                    prestige
                }
                Icon={IconHeartCheck}
            />
            <InfoCard
                title="Asesinatos"
                description={
                    kills
                }
                Icon={IconSword}
            />
            <InfoCard
                title="Muertes"
                description={
                    deaths
                }
                Icon={IconSkull}
            />
            <InfoCard
                title="Horas de juego"
                description={
                    playTimeInHours.toString()
                }
                Icon={IconClock}
            />
          </div>

          {/* Información del jugador */}
          <Accordion type="single" collapsible defaultValue="general" asChild>
            <section className="space-y-3">
              <AccordionItem value="achievements">
                <AccordionTrigger className="ml-1 text-xl font-semibold text-gray-900 dark:text-white pt-0">
                  Logros
                </AccordionTrigger>
                <AccordionContent asChild>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {Object.values(achievements)
                        .map((achievement) => {
                          const {completed, additionalDescription} =
                              getAchievementProgress(achievement.name);

                          return (
                              <AchievementCard
                                  key={achievement.name}
                                  achievement={achievement}
                                  completed={completed}
                                  additionalDescription={additionalDescription}
                              />
                          );
                        })}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="stats">
                <AccordionTrigger className="ml-1 text-xl font-semibold text-gray-900 dark:text-white pt-0">
                  Nivel de perfección
                </AccordionTrigger>
                <AccordionContent asChild>
                  <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 grid-rows-4">
                    <Card
                        className="col-span-1 row-span-full w-full flex justify-center items-center">
                      <div className="flex flex-col items-center p-4">
                        <CardHeader
                            className="flex flex-row items-cnter justify-between space-y-0 mb-2 p-0">
                          <CardTitle className="text-2xl font-semibold">
                            Progreso total
                          </CardTitle>
                        </CardHeader>

                        <PercentageIndicator
                            percentage={Math.floor((kills * 0.25 + playTimeInHours * 2 + 9 + 17 + 36 + 56) / 6)}
                            className="h-32 w-32 lg:h-48 lg:w-48"
                        />
                      </div>
                    </Card>

                    {/* 37 muertes de 400 */}

                    <PerfectionCard
                        title="Asesinatos"
                        description={kills + "/400"}
                        percentage={Math.floor(kills * 0.25)}
                        footer=""
                    />

                    <PerfectionCard
                        title="Horas de juego"
                        description={playTimeInHours + "/50"}
                        percentage={Math.floor(playTimeInHours * 2)}
                        footer=""
                    />

                    <PerfectionCard
                        title="Mitaritas ganadas"
                        description={"2374/25000"}
                        percentage={Math.floor(2374 * 0.004)}
                        footer="Demostración, falta implementar"
                    />

                    <PerfectionCard
                        title="Puntos de EXP. generados"
                        description={"1721/10000"}
                        percentage={Math.floor(1721 * 0.01)}
                        footer="Demostración, falta implementar"
                    />

                    <PerfectionCard
                        title="Objetos obtenidos"
                        description={"36/100"}
                        percentage={36}
                        footer="Demostración, falta implementar"
                    />

                    <PerfectionCard
                        title="Logros obtenidos"
                        description={"28/50"}
                        percentage={28 * 2}
                        footer="Demostración, falta implementar"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </section>
          </Accordion>
        </div>
      </main>
    </>
  );
}
