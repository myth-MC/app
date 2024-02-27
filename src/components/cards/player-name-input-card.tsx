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

export const PlayerNameInputCard = ({
  title,
  Icon,
  description,
  showTitle
}: Props) => {
  const [value, setValue] = useState("");

  const router = useRouter();

  const inputSchema = v.object({
    input: v.string([v.maxLength(16, 'El nombre es demasiado largo')]),
  });

  const form = useForm<v.Input<typeof inputSchema>>({
    resolver: valibotResolver(inputSchema),
  });

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
              onSubmit={(e) => e.preventDefault()}
            >
              <FormField
                control={form.control}
                name="input"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <div className="flex w-2/3 items-center space-x-2">
                        <FormControl>
                          <Input
                            type="string"
                            min={0}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </FormControl>
                      </div>

                      <Button
                        type="submit"
                        onClick={() => {
                          router.push({
                            pathname: router.pathname,
                            query: { username: value }
                          })

                          setOpen(false);

                          toast.info("Estás viendo las estadísticas de " + value)
                        }}
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
