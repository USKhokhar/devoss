import { SearchBox } from "./SearchBox"
import { Badge } from "./ui/badge"

// API
const jokesapi_dev_api = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

// function to fetch prgramming jokes from jokesapi.dev
const getProgrammingJokes = async () => {
    const api_response = await fetch(jokesapi_dev_api, { next: { revalidate: 60 } })
    const data = await api_response.json()

    return data
}

// HERO SECTION COMPONENT TO BE USED ON HOME PAGE
const Hero = async () => {
    const joke = await getProgrammingJokes()

    return (
        <article className="grid gap-16 text-center w-full p-8">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hello, Developers!
            </h1>

            <fieldset className="border bg-muted rounded-md p-3">
                <legend className="text-muted-foreground text-base">Random Programming Humour!</legend>
                <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {joke.joke}
                </code>
            </fieldset>

            <p className="text-xl text-muted-foreground">
                An open-source collection of project guides, documentations, and blogs on various techs curated by developers, for developers!
            </p>

            <div className="md:hidden block">
                <SearchBox />
            </div>

            <Badge className="md:hidden block w-fit mx-auto justify-center self-center" variant={"outline"}>
                Scoll Down 
            </Badge>
            <Badge className="md:block hidden w-fit mx-auto justify-center self-center py-2 px-3" variant={"outline"}>
                Search posts with...
                <kbd className="ml-2 bg-accent/50 p-1">
                    ⌘ / CTRL + K
                </kbd>
            </Badge>
        </article>
    )
}

export default Hero;