'use client' // Error components must be Client Components
 
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeftCircle, Home } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
     <section className='grid place-items-center'>
        <Alert className='w-[90vw] max-w-md'>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Dammit! The machine broke!</AlertTitle>
            <AlertDescription>
                We have encountered some error. You can check out other guides.
            </AlertDescription>
            <Link href={"/"}>
                <Button>
                    <Home className='mr-4 h-4 w-4' /> Home
                </Button>
            </Link>
        </Alert>
     </section>
  )
}