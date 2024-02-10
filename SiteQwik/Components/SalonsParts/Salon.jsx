import { Image } from 'Base'
import {
    useListingUrl,
    useSalonUrl,
} from 'Salons'
import { LocationIcon } from 'Svg'

const Salon = ({
    geoCityDivisionName,
    geoCityDivisionSlug,
    listReadMore,
    localePathPrefix,
    relatedItems,
    slug,
    subtitle,
    title,
}) => {
    return <>
        <div class="pt-3">
            <a href={useSalonUrl(slug, localePathPrefix)}>
                <div class="w-full lg:w-[350px] xl:w-[400px] aspect-[2/1] rounded-lg overflow-hidden self-center xl:self-start">
                    <Image
                        src={relatedItems?.imageUrl}
                        containerClass="w-full h-full"
                        alt={title}
                    />
                </div>
            </a>
        </div>
        <div class="w-full flex flex-col lg:justify-between lg:w-[calc(100%-370px)] xl:w-[calc(100%-440px)] gap-3 lg:gap-0">
            <div class="flex flex-col gap-3">
                <div class="pt-5 lg:pt-3 flex-start">
                    <a
                        href={useSalonUrl(slug, localePathPrefix)}
                        class="font-bold text-xl text-custom-color12 hover:text-custom-color13 "
                    >
                        {title}
                    </a>
                </div>
                <p class="lg:text-sm">
                    {subtitle}
                </p>
                <div class="flex gap-2 lg:-pt-0 pb-8 lg:pb-5 lg:text-sm group">
                    <LocationIcon class="w-5 aspect-square fill-custom-color2 group-hover:fill-custom-color13" />
                    <a
                        href={useListingUrl({
                            cityDivision: geoCityDivisionSlug,
                            localePathPrefix: localePathPrefix,
                        })}
                    >
                        {geoCityDivisionName}

                    </a>
                </div>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-center justify-center gap-9 lg:justify-between">
                <div class="lg:max-w-[calc(100%-240px)] flex flex-wrap gap-2 lg:gap-y-3 px-5 sm:px-3 lg:px-0 lg:justify-start items-center justify-center">
                    {
                        relatedItems.types?.map(type => <>
                            <a
                                key={type.id}
                                href={useListingUrl({
                                    localePathPrefix: localePathPrefix,
                                    types: type?.salonsTypeSlug,
                                })}
                            >
                                <div class="w-9 p-2 bg-custom-color1 rounded-full aspect-square hover:bg-custom-color13 ">
                                    <Image
                                        src={type.relatedItems.typeImageUrl}
                                        containerClass="w-full h-full"
                                        alt={title}
                                    />
                                </div>
                            </a>
                        </>)
                    }
                </div>
                <div>
                    <a
                        href={useSalonUrl(slug, localePathPrefix)}
                        class="bg-custom-color1 lg:text-sm py-1.5 px-2 rounded hover:bg-gradient-to-r hover:from-custom-color13 hover:via-custom-color11 hover:to-custom-color13 duration-500"
                    >
                        {listReadMore}
                    </a>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex items-center justify-center w-[100px] xl:w-[210px] ps-4 lg:ps-1 xl:ps-4 xl:ps-12 border-s border-dotted border-custom-color22">
            <a href={useSalonUrl(slug, localePathPrefix)}
                class="overflow-hidden"
            >
                <div class="lg:w-24 xl:w-40 aspect-square mx-auto rounded-full border-2 hover:border-custom-color13 overflow-hidden">
                    <Image
                        src={relatedItems.logoUrl}
                        containerClass="w-full h-full"
                        alt={title}
                    />
                </div>
            </a>
        </div>
    </>
}

export default Salon
