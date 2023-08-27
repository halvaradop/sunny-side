import { DataText, Testimonial } from "../types/types"
import { imagesTestimonials } from "./images"


const dataText: DataText = {
    transform: {
        title: "Transform your brand",
        message: "we are full-service create agency specializing in helping brands grow fast. Engage your clients through compelling visuals that fo most of the marketing for you."
    },
    stand: {
        title: "Stand out to the right audience",
        message: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
    },
    graphic: {
        title: "Graphic design",
        message: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    },
    photography: {
        title: "Photography",
        message: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    }
}

const dataTestimonial: Testimonial[] = [
    { urlImage: imagesTestimonials.emily, message: "We put out trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", username: "Emily R.", role: "Marketing Director" },
    { urlImage: imagesTestimonials.thomas, message: "Sunnyside's enthusiams coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.", username: "Thomas S.", role: "Chief Operating Officer" },
    { urlImage: imagesTestimonials.jennie, message: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", username: "Jenni F.", role: "Busincess Owner." },
]

export { dataText, dataTestimonial }