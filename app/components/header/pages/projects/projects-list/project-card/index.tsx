import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image 
                    width={380}
                    height={200}
                    src="https://www.projetou.com.br/posts/wp-content/uploads/sites/6/2021/04/4b64a129204631ab6f8dc1e85bb511ee.jpg"
                    alt="Thumbnail do projeto"
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Bookwise</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi adipisci expedita voluptates. Consequuntur, facilis culpa veritatis</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">next.js, next auth, stitches, radix, typescript, prisma, react query</span>
            </div>


        </div>
    )
}