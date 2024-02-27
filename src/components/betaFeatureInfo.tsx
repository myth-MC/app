import {IconExclamationCircle } from "@tabler/icons-react";

export const BetaFeatureInfo = () => {
  return (
    <div className="bg-orange-200 p-3 rounded-md flex justify-between items-center text-sm font-medium hover:bg-orange-300 transition-all hover:text-orange-800">
      <div className="flex items-center space-x-1">
        <IconExclamationCircle className="text-orange-700" />
        <p className="text-orange-700">
          Esta característica se encuentra en desarrollo. Puede contener errores o estar incompleta.
        </p>
      </div>
    </div>
  );
};
