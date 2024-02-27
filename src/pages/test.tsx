import Head from "next/head";

import achievements from "@/data/achievements.json";

import { useState } from "react";

import { AchievementCard } from "@/components/cards/achievement-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Shipping() {
  const [_filter, setFilter] = useState("all");
  const [_seasonFilter, setSeasonFilter] = useState("all");

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
        <title>stardew.app | Shipping</title>
        <meta
          name="title"
          content="Stardew Valley Shipping Tracker | stardew.app"
        />
        <meta
          name="description"
          content="Track your shipping progress and achievements in Stardew Valley. Keep tabs on the items you've shipped and monitor your progress towards completing the shipping achievements. Discover what items are left to ship and become a master shipper in Stardew Valley."
        />
        <meta
          name="og:description"
          content="Track your shipping progress and achievements in Stardew Valley. Keep tabs on the items you've shipped and monitor your progress towards completing the shipping achievements. Discover what items are left to ship and become a master shipper in Stardew Valley."
        />
        <meta
          name="twitter:description"
          content="Track your shipping progress and achievements in Stardew Valley. Keep tabs on the items you've shipped and monitor your progress towards completing the shipping achievements. Discover what items are left to ship and become a master shipper in Stardew Valley."
        />
        <meta
          name="keywords"
          content="stardew valley shipping tracker, stardew valley shipping progress, stardew valley items shipped, stardew valley shipping achievements, stardew valley master shipper, stardew valley gameplay tracker, stardew valley, stardew, shipping tracker, stardew valley, stardew, stardew checkup, stardew bundles, stardew 100% completion, stardew perfection tracker, stardew, valley"
        />
      </Head>
      <main
        className={`flex min-h-screen md:border-l border-neutral-200 dark:border-neutral-800 pt-2 pb-8 px-5 md:px-8`}
      >
        <div className="mx-auto w-full space-y-4 mt-4">
          <h1 className="ml-1 text-2xl font-semibold text-gray-900 dark:text-white">
            Shipping Tracker
          </h1>
          {/* Achievements Section */}
          <Accordion type="single" collapsible defaultValue="item-1" asChild>
            <section className="space-y-3">

            </section>
          </Accordion>
        </div>
      </main>
    </>
  );
}
