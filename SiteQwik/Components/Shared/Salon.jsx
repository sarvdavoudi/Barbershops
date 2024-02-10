import { Image } from 'Base'
import {
    useListingUrl,
    useSalonUrl,
} from 'Salons'
import {
    LocationIcon,
    StarIcon,
} from 'Svg'

const Salon = ({
    item,
    localePathPrefix,
}) => {
    return <>
        <div class="w-full bg-custom-color1 rounded-lg mt-5">
            <div class="flex flex-row justify-between gap-1 py-2.5 px-2">
                <div class="flex flex-row items-center gap-1 md:gap-2 border border-dotted border-custom-color13 lg:px-1">
                    <StarIcon/>
                    <span class="text-xs"> {item.relatedItems.ratingAverage.value}</span>
                </div>
                <div class="flex flex-row flex-end gap-1 lg:gap-2 item-center">
                    {
                        item.relatedItems.types.slice(0, 4)?.map(type => <>
                            <a
                                key={type.id}
                                href={useListingUrl({
                                    localePathPrefix: localePathPrefix,
                                    types: type?.salonsTypeSlug,
                                })}
                            >
                                <Image
                                    src={type.relatedItems.typeImageUrl}
                                    containerClass="w-7 md:w-9 bg-custom-color3 rounded-full p-2 lg:p-2.5 aspect-square"
                                    alt={item.title}
                                />
                            </a>
                        </>)
                    }
                </div>
            </div>
            <a href={useSalonUrl(item.slug, localePathPrefix)}>
                <Image
                    src={item.relatedItems.imageUrl}
                    containerClass="w-full aspect-[2/1]"
                    alt={item.title}
                />
            </a>
            <a href={useSalonUrl(item.slug, localePathPrefix)}>
                <Image
                    src={item.relatedItems.logoUrl}
                    containerClass="relative w-16 aspect-square mx-auto -my-9 rounded-full border-4 border-custom-color1 overflow-hidden"
                    alt={item.title}
                />
            </a>
            <div class="bg-custom-color23 text-custom-color1 m-auto pt-10 pb-5 lg-pb-10">
                <a
                    href={useSalonUrl(item.slug, localePathPrefix)}
                    class="font-bold line-clamp-1 my-3"
                >
                    {item.title}
                </a>
                <a
                    href={useListingUrl({
                        cityDivision: item?.geoCityDivisionSlug,
                        localePathPrefix: localePathPrefix,
                    })}
                    class="flex flex-row justify-center items-center gap-2 mt-5 mb-2"
                >
                    <LocationIcon
                        class="w-4 aspect-square fill-custom-color1"
                    />
                    <span class="text-sm"> {item.geoCityDivisionName} </span>
                </a>
            </div>
            <div class="py-2 rounded-b-lg bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13 hover:from-custom-color11"></div>
        </div>
    </>
}

export default Salon
