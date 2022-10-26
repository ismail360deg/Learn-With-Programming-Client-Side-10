import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">1.what is cors?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">2.Why are you using firebase? What other options do you have to implement authentication?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">01.Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Release Apps Confidently. Customize Your App. <br />
                                02.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">3.How does the private route work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="text-2xl px-4 py-6 focus:outline-none focus-visible:ring-violet-400">4.What is Node? How does Node work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">01.As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. <br />
                                02.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </details>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;