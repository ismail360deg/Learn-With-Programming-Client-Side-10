import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

// react to pdf package
const ref = createRef();

const CourseDetails = () => {
    // get dynamic course data 
    const course = useLoaderData();

    const options = {
        orientation: "landscape",
        unit: "in",
    };
    return (
        <div>
            <div ref={ref} className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 mx-auto mb-10">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <Link rel="noopener noreferrer" className="mb-0 capitalize text-gray-800 text-5xl">{course.name}</Link>
                    </div>

                    <Pdf targetRef={ref} options={options} filename={course.name}>
                        {({ toPdf }) => <button type="button" className="text-xs px-8 py-3 ml-10 font-semibold rounded-full bg-gray-400 text-gray-100" onClick={toPdf}>Download
                            <ArrowDownTrayIcon className="">
                            </ArrowDownTrayIcon></button>}
                    </Pdf>

                </div>
                <div className="space-y-4">
                    <div className="space-y-2">

                        <img src={course.logo} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex items-center text-xs">
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="leading-snug text-gray-600">{course.description}</p>
                        <h1 className="leading-snug text-gray-600 text-3xl">${course.price}</h1>

                        <Link to={'/login'}><button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100">Get Premium Access</button></Link>

                        <Link to={'/courses'}><button type="button" className="px-8 py-3 ml-10 font-semibold rounded-full bg-gray-800 text-gray-100">Back to page</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
