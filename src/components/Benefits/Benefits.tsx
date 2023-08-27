import { Picture } from "../Picture"
import { imagesMain } from "../../utils/images"
import { dataText } from "../../utils/data"
import { BenefitsCard } from "./BenefitCard"

const Benefits = () => {

    return (
        <>
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesMain.eggDesktop} draggable="false" />
                <img className="object-cover" src={imagesMain.eggMobile} alt="image" loading="lazy" draggable="false" />
            </Picture>
            <article className="w-10/12 mx-auto py-16 text-center">
                <BenefitsCard title={dataText.transform.title} message={dataText.transform.message} sizeTitle="4xl" colorTitle="blue" sizeMessage="lg" colorMessage="blue-200" />
            </article>
            <Picture>
                <source media="(min-width: 900px)" srcSet={imagesMain.glassDesktop} draggable="false" />
                <img src={imagesMain.glassMobile} alt="image" loading="lazy" draggable="false" />
            </Picture>
            <article className="w-10/12 mx-auto py-16 text-center">
                <BenefitsCard title={dataText.stand.title} message={dataText.stand.message} sizeTitle="4xl" colorTitle="blue" sizeMessage="lg" colorMessage="blue-200" />
            </article>
            <article className="relative">
                <Picture>
                    <source media="(min-width: 900px)" srcSet={imagesMain.cherryDesktop} draggable="false" />
                    <img src={imagesMain.cherryMobile} alt="image" loading="lazy" draggable="false" />
                </Picture>
                <article className="w-10/12 mx-auto py-16 text-center absolute inset-x-0 bottom-0">
                    <BenefitsCard title={dataText.graphic.title} message={dataText.graphic.message} sizeTitle="4xl" colorTitle="cyan" sizeMessage="lg" colorMessage="cyan" />
                </article>
            </article>
            <article className="relative">
                <Picture>
                    <source media="(min-width: 900px)" srcSet={imagesMain.orangeDesktop} draggable="false" />
                    <img src={imagesMain.orangeMobile} alt="image" loading="lazy" draggable="false" />
                </Picture>
                <article className="w-10/12 mx-auto py-16 text-center absolute inset-x-0 bottom-0">
                    <BenefitsCard title={dataText.photography.title} message={dataText.photography.message} sizeTitle="4xl" colorTitle="cyan-100" sizeMessage="lg" colorMessage="cyan-100" />
                </article>
            </article>
        </>
    )
}

export { Benefits }