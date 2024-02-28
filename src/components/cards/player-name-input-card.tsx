import { valibotResolver } from "@hookform/resolvers/valibot";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as v from "valibot";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import {useRouter} from "next/router";
import {toast} from "sonner";

interface Props {
  title: string;
  description?: string;
  Icon: any;
  showTitle: boolean;
}


const inputSchema = v.object({
  name: v.string([
    v.minLength(3, "El nombre debe contener al menos 3 caracteres"),
    v.maxLength(16, "El nombre no puede superar los 16 caracteres"),
    v.toTrimmed(),
  ]),
});

export const PlayerNameInputCard = ({
  title,
  Icon,
  description,
  showTitle
}: Props) => {
  const [value, setValue] = useState("");

  const router = useRouter();

  const form = useForm<v.Input<typeof inputSchema>>({
    resolver: valibotResolver(inputSchema as any),
  });

  const onSubmit = async (values: v.Input<typeof inputSchema>) => {
    setOpen(false);

    await router.push({
      pathname: "/player",
      query: {username: values.name}
    }).then(() => {
      toast.info("Estás viendo las estadísticas de " + values.name);
    })
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 truncate rounded-lg border-none border-neutral-200 bg-white px-3 py-1 dark:border-neutral-800 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 shadow-none">
          <div className="flex space-x-3 items-center">
            {Icon && <Icon className="h-6 w-6 dark:text-white" />}
            {showTitle && <p className="truncate text-sm font-semibold">{title}</p>}
          </div>
          {showTitle && <ChevronRightIcon className="h-5 w-5" />}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {Icon && <Icon className="h-6 w-6 dark:text-white" />}
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <Form {...form}>
            <form
              className="w-full space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <div className="flex w-2/3 items-center space-x-2">
                        <FormControl>
                          <Input
                            id="test"
                            autoComplete="off"
                            placeholder="Introduce aquí el nombre"
                            {...field}
                          />
                        </FormControl>
                      </div>

                      <Button
                        type="submit"
                      >
                        Buscar
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
