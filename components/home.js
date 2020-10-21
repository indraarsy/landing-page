export default function Home() {
    return (
        <div className="container m-auto flex h-full mx-auto items-center">
            <div className="grid grid-cols-3 md:auto-cols-min gap-64">
                <div className="text-gray-700 px-4 py-2 m-2 my-6 col-span-3 md:col-span-2">
                    <h1 className="ml11">
                        <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters">Indra Arsy Kaloka</span>
                        </span>
                    </h1>
                </div>
                <div className="text-gray-700 text-center px-4 py-2 m-2 col-span-3 md:col-span-1">
                    <img src="/me.jpg" className="w-100 h-100"></img>
                </div>
            </div>
        </div>
    )
}