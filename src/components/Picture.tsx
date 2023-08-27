import { PictureProps } from "../types/props"

const Picture = ({ className ,children }: PictureProps) => {

    return (
        <picture className={`${className}`}>
            {children}
        </picture>
    )
}

Picture.defaultProps = {
    className: ""
}

export { Picture }