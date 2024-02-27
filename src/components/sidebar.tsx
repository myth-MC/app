import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBuildingBank,
  IconSwords,
  IconTower,
  IconWall,
  IconDeviceGamepad,
  IconHome2,
  IconId,
  IconSettings,
  IconBackpack,
} from "@tabler/icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {useRouter} from "next/router";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const playerNavigation = [
  { name: "Inicio", href: "/", icon: IconHome2 },
  { name: "Información", href: "/player", icon: IconId },
];

export const itemsNavigation = [
  { name: "Metrópolis (SMP)", href: "/wip", icon: IconBuildingBank },
  { name: "Brawl", href: "/wip", icon: IconSwords },
  { name: "The Towers", href: "/wip", icon: IconTower },
  { name: "MiniWalls", href: "/wip", icon: IconWall },
  { name: "Arcade", href: "/wip", icon: IconDeviceGamepad },
];

export const miscNavigation = [
  { name: "Objetos", href: "/items", icon: IconBackpack },
  { name: "Ajustes", href: "/settings", icon: IconSettings },
];

export const linksNavigation = [
  { name: "Discord", href: "discord.mythmc.ovh", icon: DiscordLogoIcon },
  { name: "GitHub", href: "https://github.com/myth-MC/app", icon: GitHubLogoIcon },
];

export const SidebarCategory = ({ children }: { children: string }) => (
  <h2 className="mt-4 mb-2 px-4 font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
    {children}
  </h2>
);

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={className}>
      <div className="grid grid-cols-2 pt-4 gap-2 w-72 px-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full dark:hover:bg-[#5865F2] hover:bg-[#5865F2] hover:text-neutral-50"
                asChild
              >
                <a href={"https://discord.mythmc.ovh/"} target="_blank" rel="noreferrer">
                  <IconBrandDiscord size={20} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>¡Únete a nuestro Discord!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full hover:bg-neutral-800 hover:text-neutral-50"
                asChild
              >
                <a href={"https://github.com/myth-MC"} target="_blank" rel="noreferrer">
                  <IconBrandGithub size={20} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Código fuente de la web</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <nav className="px-3 pb-2">
        <SidebarCategory>Jugador</SidebarCategory>
        <div className="space-y-1">
          {playerNavigation.map((item) => (
            <Button
              onClick={() => router.push({
                pathname: item.href,
                query: router.query
              })}
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                item.href === pathname
                  ? ""
                  : "text-neutral-600 dark:text-neutral-400"
              )}
              asChild
            >
              <span>
                <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                {item.name}
              </span>
            </Button>
          ))}
        </div>
        <SidebarCategory>Estadísticas</SidebarCategory>
        <div className="space-y-1">
          {itemsNavigation.map((item) => (
            <Button
              onClick={() => router.push({
                pathname: item.href,
                query: router.query
              })}
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                item.href === pathname
                  ? ""
                  : "text-neutral-600 dark:text-neutral-400"
              )}
              asChild
            >
              <p>
                <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                {item.name}
              </p>
            </Button>
          ))}
        </div>

        <SidebarCategory>Otros</SidebarCategory>
        <div className="space-y-1">
          {miscNavigation.map((item) => (
            <Button
              onClick={() => router.push({
                pathname: item.href,
                query: router.query
              })}
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                item.href === pathname
                  ? ""
                  : "text-neutral-600 dark:text-neutral-400"
              )}
              asChild
            >
              <p>
                <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                {item.name}
              </p>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  );
}
