import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import type { Genre } from '@/typings'
import { ChevronDown } from 'lucide-react'

type Props = {
    genres: {
        genres: Genre[]
    }
}

export default function GenreDropDownMenu(props: Props) 
{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white flex justify-center items-center'>
                Genres <ChevronDown className='ml-1' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {props.genres.genres.map((genre) => (
                        <DropdownMenuItem key={genre.id}>
                            <a href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
