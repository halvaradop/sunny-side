import { TestimonialCardProps } from "../../types/props"

const TestimonialCard = ({ testimonials }: TestimonialCardProps) => {
    const { urlImage, message, username, role } = testimonials

    return (
        <article className="font-barlow">
            <img className="w-14 mx-auto rounded-full" src={urlImage} alt="" />
            <p className="my-7 text-blue-200 text-lg">{message}</p>
            <h3 className="text-xl font-black font-fraunces">{username}</h3>
            <p className="mt-2 text-blue-300">{role}</p>
        </article>
    )
}

export { TestimonialCard }