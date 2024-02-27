import Image from "next/image";

export const Construction = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow max-w-2xl gap-2">
        <Image
            src="/construction.gif"
            alt="GIF minando"
            width={256}
            height={256}
            quality={10}
        />

      <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 text-center">
        Estamos en ello :-)
      </h1>
    </div>
  );
};
