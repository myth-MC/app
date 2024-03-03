import useSWR from "swr";

const fetcher = async (url: any) => {
    const options = {
        headers: new Headers({
            'Content-Type': 'application/json',
            'X-API-Key': 'FbpXE59GTimmuTfu7MLRVhIVi5qnRteI'
        })
    }

    let res = await fetch(url, options);
    if (!res.ok) {
        console.log(res.statusText);
    }
    return res.json();
}

export const usePlayer = ( username: any ) => {
    let { data, error } = useSWR('https://api.mythmc.ovh/v1/users/'+ username, fetcher);

    return { data, error };
};