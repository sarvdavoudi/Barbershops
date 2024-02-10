import {
    Image,
    Rating,
} from 'Base'
import { useListingUrl } from 'Salons'
import { LocationIcon } from 'Svg'

const Hero = ({
    geoCityDivisionName,
    geoCityDivisionSlug,
    localePathPrefix,
    relatedItems,
    subtitle,
    title,
}) => {
    const {
        imageUrl,
        logoUrl,
        ratingAverage,
    } = relatedItems
    return <>
        <div class="relative w-full pb-14">
            <Image
                src={imageUrl}
                containerClass="w-full aspect-[2/1] sm:aspect-[5/2] lg:aspect-[4/1]"
                alt={title}
            />
            <div class="absolute w-full bottom-10 md:bottom-4 lg:container mx-auto px-5 flex justify-between items-start">
                <Image
                    src={logoUrl}
                    containerClass="w-16 h-16 md:w-24 md:h-24 rounded-full aspect-square border border-custom-color13 overflow-hidden"
                    alt={title}
                />
                <div class="px-2 py-1 rounded bg-custom-color2/45 text-custom-color3">
                    <a
                        href={useListingUrl({
                            cityDivision: geoCityDivisionSlug,
                            localePathPrefix: localePathPrefix,
                        })}
                        class="flex flex-row gap-1"
                    >
                        <LocationIcon class="w-4 aspect-square fill-current" />
                        {geoCityDivisionName}
                    </a>
                </div>
            </div>
        </div>
        <div class="w-full lg:container mx-auto px-5 pb-10 md:pt-8">
            <h1 class="font-bold text-3xl text-custom-color13">{title}</h1>
            <div class="flex flex-row justify-between items-center pt-1.5">
                <span>
                    {subtitle}
                </span>
                <Rating
                    {...ratingAverage}
                    value={ratingAverage.value}
                    inactiveClass="fill-custom-color22/45"
                    activeClass="fill-yellow-500"
                    starClass="w-8"
                    once
                />
            </div>
        </div>
    </>
}

export default Hero
