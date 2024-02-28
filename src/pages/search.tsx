import Head from "next/head";

import {valibotResolver} from "@hookform/resolvers/valibot";
import {useState} from "react";
import {useForm} from "react-hook-form";
import * as v from "valibot";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";
import {useRouter} from "next/router";
import {toast} from "sonner";

const formSchema = v.object({
    name: v.string([
        v.minLength(3, "El nombre debe contener al menos 3 caracteres"),
        v.maxLength(16, "El nombre no puede superar los 16 caracteres"),
        v.toTrimmed(),
    ]),
    api_key: v.optional(v.string()),
});

export default function Search() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const form = useForm<v.Input<typeof formSchema>>({
        resolver: valibotResolver(formSchema as any),
        defaultValues: {
            name: "",
            api_key: ""
        },
    });

    const onSubmit = async (values: v.Input<typeof formSchema>) => {
        await router.push({
            pathname: "/player",
            query: {username: values.name}
        }).then(() => {
            toast.info("Estás viendo las estadísticas de " + values.name);
        })
    };

    return (
        <>
            <Head>
                <title>mythMC | Buscar</title>
                <meta
                    name="title"
                    content="mythMC | Buscar"
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
                className={`flex min-h-[calc(100vh-65px)] md:border-l border-neutral-200 dark:border-neutral-800 px-0 md:px-8 md:items-center justify-center`}
            >
                <div className="mx-auto max-w-xl space-y-4">
                    <Card className="border-0 md:border">
                        <CardHeader>
                            <CardTitle>Buscar</CardTitle>
                            <CardDescription>
                                Introduce el nombre del usuario que quieres buscar.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    className="grid gap-5"
                                    onSubmit={form.handleSubmit(onSubmit)}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-center">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="name">
                                                        Nombre de Usuario{" "}
                                                        <span className="text-red-500 dark:text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="name"
                                                            autoComplete="off"
                                                            placeholder="Introduce aquí el nombre"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        {isExpanded && (
                                            <>
                                                <FormField
                                                    control={form.control}
                                                    name="api_key"
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel htmlFor="api_key">
                                                                Clave API{" "}
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    id="api_key"
                                                                    autoComplete="off"
                                                                    placeholder=""
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                            </>
                                        )}
                                    </div>

                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => setIsExpanded((p) => !p)}
                                    >
                                        {isExpanded ? (
                                            <ChevronUpIcon className="w-5 h-5"/>
                                        ) : (
                                            <ChevronDownIcon className="w-5 h-5"/>
                                        )}
                                    </Button>
                                    <Button variant="default" type="submit">
                                        Buscar
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}