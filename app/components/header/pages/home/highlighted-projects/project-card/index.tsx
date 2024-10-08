import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image 
                width={420}
                height={304}
                src="https://www.projetou.com.br/posts/wp-content/uploads/sites/6/2021/04/4b64a129204631ab6f8dc1e85bb511ee.jpg"
                alt="thumbnail do projeto"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    BookWise
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus facilis molestias dicta, molestiae minus enim quisquam nihil vero amet, voluptatem sequi illo expedita quasi omnis voluptate delectus ullam voluptatum. Quis vero commodi tempore fugit autem enim? Commodi veniam pariatur odit explicabo recusandae qui praesentium obcaecati enim, harum unde velit maxime.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                </div>

                <Link href="/projects/book-wise">
                    ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}