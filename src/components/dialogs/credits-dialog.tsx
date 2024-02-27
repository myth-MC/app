import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CreditsDialog = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="flex justify-center">
          <Image
            src="/heart.png"
            alt={"Corazón de Minecraft"}
            width={48}
            height={48}
          />
        </div>
        <DialogHeader>
          <DialogTitle className="text-center">Créditos</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          app.mythmc.ovh está desarrollado a partir de stardew.app,
          una web desarrollada, diseñada y creada por Jack LaFond
          y Clemente Solorio.
        </DialogDescription>
        <DialogDescription>
          La adaptación está hecha por U8092 para mythMC.
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className="text-sm">Código fuente</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <li><a href="https://github.com/myth-MC/" target="_blank">Proyecto en GitHub</a></li>
          <li><a href="https://github.com/myth-MC" target="_blank">Nuestra organización en GitHub</a></li>
          <li><a href="https://github.com/U8092" target="_blank">U8092 en GitHub</a></li>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
