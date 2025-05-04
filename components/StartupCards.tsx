import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'

interface StartupPost {
    _id: string;
    _createdAt: string;
    views: number;
    author: {
        _id: string;
        name: string;
        image?: string;
    };
    image: string;
    category: string;
    title: string;
    description: string;
    slug?: {
        current: string;
    };
}

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author }

export default function StartupCards({ post }: { post: StartupTypeCard }) {
    const { author, _createdAt, views, image, category, title, _id, description } = post
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card_date'>
                    {formatDate(_createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>

            </div>
            <div className='flex-between mt-5 gap-5 align-center'>
                <div className='flex-1'>
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>
                    <Link href={`startup/${_id}`} className='text-26-semibold line-clamp-1'>{title}</Link>
                </div>
                <Link href={`/user/${author?._id}`} >
                    <Image src="https://placehold.co/500x500" alt="placeholder" width={48} height={48} className='rounded-full' />
                </Link>
            </div>

            <Link href={`startup/${_id}`}>
                <p className='startup-card_date mt-5'>
                    {description}
                </p>
                <img src={image} alt='placeholder' className='startup-card_img mt-5' />
            </Link>
            <div className='flex-between gap-3 mt-5'>
                <Link href={`?query=${category?.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>details</Link>
                </Button>
            </div>
        </li>
    )
}
