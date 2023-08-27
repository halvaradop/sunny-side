import { dataTestimonial } from "../../utils/data"
import { TestimonialCard } from "./TestimonialCard"


const Testimonials = () => {

    return (
        <section className="w-11/12 mx-auto my-20 text-center">
            <h3 className="text-blue-300 text-3xl font-black">Client testimonials</h3>
            <section className="mt-12 grid gap-20">
                {dataTestimonial.map((testimonial, key) => <TestimonialCard key={key} testimonials={testimonial} />)}
            </section>
        </section>
    )
}

export { Testimonials }