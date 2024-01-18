import { getImagePath } from "@/lib/getImagePath"
import type { Movie } from "@/typings"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

type Props = {
    movies: Movie[]
}

Autoplay.globalOptions = { delay: 8000 }

export default function CarouselsBanner({ movies }: Props) 
{
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])

    return (
        <div ref={emblaRef} className='overflow-hidden relative cursor-pointer lg:h-[85vh] w-full'>
            <div className='flex relative'>
                {movies.map(movie => (
                    <div key={movie.id} className='flex-[0_0_100%] min-w-0 relative'>
                        <img
                            src={getImagePath(movie.backdrop_path || movie.poster_path, true)}
                            alt=""
                            width='1920'
                            height='1080'
                        />
                        <div className='hidden md:inline absolute mt-0 top-0 z-20 pt-40 xl:pt-52 left-0  bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent text-white p-10 space-y-5'>
                            <h2 className='font-bold max-w-xl z-50 text-5xl'>
                                {movie.title}
                            </h2>
                            <p className='max-w-xl line-clamp-3'>
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]' 
            />
        </div>
    )
}