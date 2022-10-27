import heroImg from "../assets/hero.jpg";

const Home = () => {
    return (
        <section>
            <div className="bg-gray-200">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h2 className="text-5xl font-bold">WelCome <br /> To My <br /> Learn-With-Programming</h2>
                    <p className="text-2xl font-semibold">There are some programming language  topic  <br /> react,javascript,css and git. <br /> So, try your coding knowledge with learn with programming website.</p>
                </div>
            </div>
            <img
                src={heroImg}
                alt=""
                className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
            />
        </section>
    )
}

export default Home