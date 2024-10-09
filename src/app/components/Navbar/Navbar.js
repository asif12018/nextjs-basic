"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'



function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    // console.log(session)
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contacts"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Category",
            path: "/categories"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        }
    ]

    const handler = () => {
        router.push('/api/auth/signin')
    }

    if (pathName.includes('dashboard')) {
        return (
            <div className='bg-green-400'>
                Dashboard Navbar
            </div>
        )
    }

    return (
        <div>
            <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
                <h6 className='text-3xl'>Next <span className="text-cyan-300">Hero</span></h6>
                <ul className="flex justify-between items-center space-x-4">
                    {
                        links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>

                <div className='flex justify-center items-center gap-4'>

                    <div>
                        <h6>
                            {session?.data?.user?.name}
                        </h6>
                    </div>

                    {
                        session.status == 'unauthenticated' ? <button onClick={handler} className="bg-white text-cyan-400 p-4">Login</button> : <button onClick={() => signOut()} className="bg-white text-cyan-400 p-4">Logout</button>
                    }

                    <Link href='/signup' className="bg-white text-cyan-400 p-4">signup</Link>

                </div>


            </nav>
        </div>
    )
}



export default Navbar
