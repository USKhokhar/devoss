import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className='grid place-items-center'>
      <article>
        <h2 className='text-xl text-muted-foreground'>Not Found</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We are unable find the page you are trying to access. Till then check out other projects!
          </p>
          <p>
            Return to <Link href="/" className='underline font-semibold'>Home</Link>
          </p>
      </article>
    </section>
  )
}