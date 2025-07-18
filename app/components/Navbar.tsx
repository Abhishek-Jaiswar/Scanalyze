import { ArrowRight, ArrowUpIcon, Scan} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
    return (
        <nav className='border-b-2 border-slate-900 h-12 py-2'>
            <div className='flex h-full items-center max-w-6xl mx-auto justify-between'>
                <Link to={'/'} className='text-lg font-semibold text-slate-300 flex items-center justify-center gap-2'>
                    <Scan />
                    Scanalyse
                </Link>

                <Link to={'/'} className='text-sm text-slate-300 flex items-center justify-center gap-2'>
                    Upload Resume
                    <ArrowRight />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar