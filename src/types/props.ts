import { Childrenable, Testimonial } from './types';


export interface BenefitsCardProps  {
    title: string,
    message: string,
    sizeTitle: string,
    colorTitle: string,
    sizeMessage: string,
    colorMessage: string
}

export interface PictureProps extends Childrenable {
    className?: string
}

export interface TestimonialCardProps {
    testimonials: Testimonial
}