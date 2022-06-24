import logo from './image/Trainice.svg'
export default function Navbar(params) {
    return (
        <>
            <div>
                <nav className="bg-transparent dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className=" flex items-center">
                                <a className="flex-shrink-0" href="/">
                                    <img className="h-15 w-15" src={logo} alt="Workflow" />
                                </a>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a className=" ml-10 text-black-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#"> Tentang
                                        </a>

                                        <a className="text-black-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">Kelas
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <div className="ml-3 relative">
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <button type="button" className=" ml-10 flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                    <svg width="30" fill="currentColor" height="30" className="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div></>
    )
}