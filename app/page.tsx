import Hero from '@/components/Hero'
import TopicSheet from '@/components/TopicSheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Link from "next/link"
import CardComponent from '@/components/Card'

export default function Home() {
  const posts = allPosts

  return (
    <main className="flex md:flex-row flex-col min-h-screen h-full w-full justify-between">
      {/* HERO SECTION */}
      <section className='md:w-1/2 self-center md:p-8 pt-8 md:border-r-2 border-r-0'>
        <Hero />
      </section>

      {/* TOPIC LIST SECTION */}
      <section className='md:w-1/2'>
        <h3 className="scroll-m-20 text-2xl font-semibold text-center tracking-tight pt-8">
          Explore Here...
        </h3>
        <ScrollArea className='h-[75vh] w-[95%] mx-auto mt-2 p-4'>
          {posts.map((post, idx) => (
            <Link href={post.url} key={idx}>
              <CardComponent 
                title={post.title}
                level={post.level}
                slug={post.url}
              />
            </Link>
          ))}

        </ScrollArea>
      </section>
    </main>
  )
}
