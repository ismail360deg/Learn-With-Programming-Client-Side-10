import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-11/12 lg:w-3/4 p-5 mx-auto">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
                    {courses.map((course) => (
                        <Link
                            data-aos="fade-up-right"
                            key={course.id}
                            to={`/courses/${course.id}`}
                            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96  rounded-md shadow-md bg-opacity-40"
                            style={{ backgroundImage: `url(${course.logo})` }}
                        >
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b"></div>
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                <div className="flex flex-col justify-start text-center text-white">
                                    <span className="text-3xl font-semibold leading-none tracking-wide">
                                        {/* {course.id} */}
                                    </span>
                                </div>
                            </div>
                            <h2 className="z-10 p-5">
                                <p
                                    href="#"
                                    className="font-bold text-xl p-3 w-full bg-white hover:bg-black hover:text-white rounded-lg shadow-md"
                                >
                                    {course.name}
                                </p>
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>

            <aside className="w-9/12 mt-10 lg:mt-0 mx-auto lg:w-1/4 p-6 text-white rounded-lg shadow-lg bg-slate-700">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-semibold tracking-widest uppercase dark:text-gray-400">
                            Total Courses : {courses.length}
                        </h2>
                        <div className="flex flex-col space-y-1 text-2xl">
                            {courses.map((course) => (
                                <Link
                                    key={course.id}
                                    to={`/courses/${course.id}`}
                                    className="btn btn-outline btn-accent"
                                    href="#"
                                >
                                    {course.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default Courses;
