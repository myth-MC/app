import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <meta charSet="utf-8"/>
                <meta
                    name="description"
                    content="mythMC es un servidor de Minecraft hispanohablante con una gran comunidad. Puedes usar app.mythmc.ovh para consultar tus estadísticas personales y otros recursos útiles en cualquier momento. ¿A qué esperas?"
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://app.mythmc.ovh/"/>
                <meta property="og:title" content="🌟 mythMC | Estadísticas"/>
                <meta
                    property="og:description"
                    content="Consulta tus estadísticas de mythMC."
                />

                <meta property="og:thumbnail" content="/favicon.png"/>
                <meta property="og:image:width" content="64"/>
                <meta property="og:image:height" content="64"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:url" content="https://app.mythmc.ovh"/>
                <meta name="twitter:title" content="🌟 mythMC | Estadísticas"/>
                <meta
                    name="twitter:description"
                    content="Consulta tus estadísticas de mythMC."
                />
                <meta name="twitter:image" content="/favicon.png"/>
                <meta name="twitter:image:width" content="512"/>
                <meta name="twitter:image:height" content="512"/>

                <link rel="icon" href="/favicon.png"/>
            </Head>
            <body className="dark:bg-neutral-950 overscroll-y-none">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
