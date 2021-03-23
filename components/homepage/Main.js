import Link from 'next/link'

export default function Main() {
    return (
        <div>
            <div className="min-w-full min-h-screen justify-center items-center" id="home">
                <div className="bg-white pt-24">
                    <div className="container px-8 mx-auto">
                        <div className="mx-auto">
                            <div className="text-center my-auto">
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium uppercase mt-8 mb-2">NextJS Starter with TailwindsCSS</h1>
                                <h3 className="text-xl md:text-2xl font-medium mb-4">Starter Template</h3>
                                <Link href="https://github.com/zekhoi/nextjs-starter-template">
                                    <button className="text-white border border-solid bg-black border-black hover:bg-white hover:text-black active:bg-white font-bold uppercase px-3 py-2 md:px-5 md:py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        Download
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}