import { useAppSelector } from "../../store/store"
import { BenefitsCardProps } from "../../types/props"

const BenefitsCard = ({ title, message, sizeTitle, colorTitle, sizeMessage, colorMessage }: BenefitsCardProps) => {
    const { sizeVariant, colorVariant } = useAppSelector(state => state.variant)

    const mapClassList = (size: string, color: string) => {
        return `${sizeVariant[size] ?? ""} ${colorVariant[color] ?? ""}`
    }

    return (
        <>
            <h2 className={`${mapClassList(sizeTitle, colorTitle)}`}>{title}</h2>
            <p className={`mt-5 ${mapClassList(sizeMessage, colorMessage)}`}>{message}</p>
        </>
    )
}

export { BenefitsCard }