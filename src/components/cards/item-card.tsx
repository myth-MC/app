import Image from "next/image";

import items from "@/data/items.json";

import type { ItemType } from "@/types/items";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useContext } from "react";

import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { IconChevronRight } from "@tabler/icons-react";

interface Props {
  item: ItemType | any;
  completed?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setObject: any; // TODO: update as we add more types
  type: "item";
}

export const ItemCard = ({
  item,
  completed,
  setIsOpen,
  setObject,
  type,
}: Props) => {
  const name = items[item.fullName.toString() as keyof typeof items].fullName;
  const description =
      items[item.fullName.toString() as keyof typeof items].description;
  const iconURL =
      items[item.fullName.toString() as keyof typeof items].iconURL;

  let checkedClass = completed
    ? "border-green-900 bg-green-500/20 hover:bg-green-500/30 dark:bg-green-500/10 hover:dark:bg-green-500/20"
    : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-800";

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <button
          className={cn(
            "flex select-none items-center text-left space-x-3 rounded-lg border py-4 px-5 text-neutral-950 dark:text-neutral-50 shadow-sm hover:cursor-pointer",
            checkedClass
          )}
          onClick={() => {
            setObject(item);
            setIsOpen(true);
          }}
        >
            <Image
                src={iconURL}
                alt={name}
                className="rounded-sm"
                width={32}
                height={32}
            />
          <div className="min-w-0 flex-1">
            <p className="font-medium truncate">{name}</p>
            <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          </div>
          <IconChevronRight className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
        </button>
      </ContextMenuTrigger>
    </ContextMenu>
  );
};
