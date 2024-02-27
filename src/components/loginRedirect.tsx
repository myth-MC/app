import {IconExternalLink, IconExclamationCircle, IconSearch} from "@tabler/icons-react";
import Link from "next/link";
import {PlayerNameInputCard} from "@/components/cards/player-name-input-card";

export const LoginRedirect = () => {
  return (
    <div className="bg-red-200 p-2 rounded-md flex justify-between items-center text-sm font-medium hover:bg-red-300 transition-all hover:text-red-800">
      <div className="flex items-center space-x-1">
        <IconExclamationCircle className="text-red-700" />
        <p className="text-red-700">
          Debes seleccionar un usuario para ver esto.
        </p>
      </div>
      <div>
        <div className="p-2 w-300 flex-grow">
          <PlayerNameInputCard
              key="buscar"
              title="Buscar"
              Icon={IconSearch}
              description="Introduce el nombre del usuario que quieres buscar."
              showTitle={false}
          />
        </div>
      </div>
    </div>
  );
};
