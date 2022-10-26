import { useContext } from "react";
import { Link } from "react-router-dom"
import { logo } from "../assets/logo.jpg"
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
                    {/* <img src={logo} alt="" /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 32 32'
                        fill='currentColor'
                        className='flex-shrink-0 w-5 h-5 rounded-full text-cyan-600'
                    >
                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
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
                            <img className="rounded-full" style={{ height: '30px' }}
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