import { imagesCandies } from "../utils/images"
import { Picture } from "./Picture"

const Candies = () => {

    return (
        <figure className="grid grid-cols-2">
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesCandies.milkDesktop} />
                <img className="aspect-square" src={imagesCandies.milkMobile} alt="milk" />
            </Picture>
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesCandies.middleOrangeDesktop} />
                <img className="aspect-square" src={imagesCandies.middleOrangeMobile} alt="orange" />
            </Picture>
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesCandies.coneDesktop} />
                <img className="aspect-square" src={imagesCandies.coneMobile} alt="cone" />
            </Picture>
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesCandies.cubesDesktop} />
                <img className="aspect-square" src={imagesCandies.cubesMobile} alt="cubes" />
            </Picture>
        </figure>
    )
}

export { Candies }
