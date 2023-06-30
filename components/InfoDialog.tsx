import fs from "fs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info } from "lucide-react"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"
import { ScrollArea } from "./ui/scroll-area"


const getReadme = (file_name:string) => {
    const file = file_name
    const readmeContent = fs.readFileSync(file, "utf-8")
    const { data: frontmatter, content } = matter(readmeContent)

    return {
        frontmatter,
        content
    }
}

const InfoDialog = () => {

    const readme = getReadme('README.md')

    return (
        <Dialog>
            <DialogTrigger>
                <Info />
            </DialogTrigger>
            <DialogContent className="w-[95vw] h-[85vh] max-w-5xl mx-auto">
                <DialogHeader>
                    <DialogTitle className="md:text-center">What is devoss? (And how can you contribute to it?)</DialogTitle>
                </DialogHeader>
                <DialogDescription className="prose dark:prose-invert w-full max-w-4xl mx-auto md:h-[75vh] max-h-[70vh]">
                    <ScrollArea className="h-full w-full">
                        <Markdown>{readme.content}</Markdown>
                    </ScrollArea>
                </DialogDescription>
            </DialogContent>
        </Dialog>

    )
}

export default InfoDialog