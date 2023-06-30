// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Button } from '@/components/ui/button'
import Link from "next/link"
import { ArrowLeft, BarChart, ChevronLeft, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
   <section>
            <aside className="md:fixed md:h-full md:w-[15vw]">
                <Button asChild variant={"outline"} className="md:absolute md:ml-0 md:mt-6 ml-2 mt-1 top-1 left-16">
                    <Link href={"/"}>
                        <ArrowLeft className="md:block hidden mr-2 h-4 w-4" /> 
                        <span className="md:block hidden">Back</span>
                        <ChevronLeft className="md:hidden" />
                    </Link>
                </Button>
            </aside>
            <Card className="w-[95vw] mx-auto max-w-3xl md:border border-0 px-5 py-3 md:my-8 my-4">
                <CardHeader className="p-0 md:flex-row flex-col justify-between">
                    <div className="grid md:border-r-2 md:pr-1 md:pb-0 md:border-b-0 border-b-2 pb-1">
                        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">{post.title}</CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex md:flex-col flex-row justify-between items-center md:items-end">
                        <Button variant={"link"} className="flex gap-2 justify-end items-center capitalize">
                            <BarChart size={18} />{post.level}
                        </Button>
                        <Button asChild variant={"link"}>
                            <Link href={`${post.project_repo}`} target="_blank" className="flex capitalize justify-between items-center gap-2">
                                <Github size={18} />Code
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="prose pt-2 dark:prose-invert">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.body.html }}
                    />
                </CardContent>
                
                <Separator />
                <CardFooter className="py-1 bg-muted">
                    <Link href={`https://github.com/${post.author_github}`} className="mx-auto" target="_blank">
                        <Button variant={"link"} className="flex justify-between gap-3 items-center py-1">
                        <Avatar>
                            <AvatarImage src={`https://github.com/${post.author_github}.png`}/>
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar> 
                        {
                            post.author
                        }
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </section>
  )
}

export default PostLayout