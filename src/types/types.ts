
export interface Variantable {
    size: string,
    color: string
}

export interface Childrenable {
    children: React.ReactNode
}

export interface Testimonial {
    urlImage: string,
    message: string,
    username: string,
    role: string
}

export interface DataType {
    title: string,
    message: string
}

export interface DataText {
    transform: DataType,
    stand: DataType,
    graphic: DataType,
    photography: DataType
}