import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col min-h-[90vh] text-center px-4'>

            <h1 className='text-6xl font-extrabold mb-4'>404</h1>
            <h2 className='text-4xl font-semibold mb-4'>Page Not Found</h2>
            <p className='text-muted-foreground mb-8 max-w-md'>
                The Page you are looking for doesn't exist or has been moved
            </p>
            <Button>
                <Link href={'/'}>
                    Go to HomePage
                </Link>
            </Button>
        </div>
    )
}

export default NotFound