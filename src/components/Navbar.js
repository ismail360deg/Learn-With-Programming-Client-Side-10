import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <header className='text-gray-600 body-font'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link
                    to='/'
                    className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>


                    <span className='ml-3 text-xl'>Learn-With-Programming</span>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <Link to='/' href='#' className='mr-5 hover:text-gray-900'>
                        Home
                    </Link>

                    <Link href='#' className='mr-5 hover:text-gray-900'>
                        Courses
                    </Link>

                    <Link href='#' className='mr-5 hover:text-gray-900'>
                        FAQ
                    </Link>

                    <Link to="/blog" href='#' className='mr-5 hover:text-gray-900'>
                        Blog
                    </Link>

                    <Link href='#' className='mr-5 hover:text-gray-900'>
                        {
                            user?.uid ?

                                <>

                                    <Link to='/'>

                                        <button onClick={handleLogOut} className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                                            Logout
                                            <svg
                                                fill='none'
                                                stroke='currentColor'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                className='w-4 h-4 ml-1'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M5 12h14M12 5l7 7-7 7'></path>
                                            </svg>
                                        </button></Link>


                                    <span>{user?.displayName}</span>



                                </>
                                :
                                <>
                                    <Link to='/login' className='mr-5 hover:text-gray-900'>Login</Link>
                                    <Link to='/register' className='mr-5 hover:text-gray-900'>Register</Link>
                                </>
                        }
                    </Link>

                    <Link href='#' className='mr-5 hover:text-gray-900'>
                        {user?.photoURL ?
                            <img title={user?.displayName} className="rounded-full" style={{ height: '30px' }}
                                src={user?.photoURL} alt="" />
                            :
                            <UserCircleIcon className="h-6 w-6 text-blue-500"></UserCircleIcon>
                        }
                    </Link>

                    {/* <button className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                        Logout
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-4 h-4 ml-1'
                            viewBox='0 0 24 24'
                        >
                            <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                    </button> */}
                    {/* 
                    <Link to='/register' className='mr-5 hover:text-gray-900'>
                        Register
                    </Link>

                    <Link to='/login' className='mr-5 hover:text-gray-900'>
                        Login
                    </Link> */}

                    {/* <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link> */}

                </nav>
            </div>
        </header>
    )
}

export default Navbar