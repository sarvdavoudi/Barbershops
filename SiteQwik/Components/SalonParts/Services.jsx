import { Image } from 'Base'
import { useListingUrl } from 'Salons'
import { MultilineIcon } from 'Svg'

const Services = ({
    detailsAd,
    localePathPrefix,
    title,
    types,
}) => {
    return <>
        <div class="w-full px-5 pb-12">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-10">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <MultilineIcon />
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <div class="w-full flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-4 pb-12 md:px-10">
                {
                    types?.map(type => <>
                        <a
                            key={type.id}
                            href={useListingUrl({
                                localePathPrefix: localePathPrefix,
                                types: type?.salonsTypeSlug,
                            })}
                        >
                            <div class="w-full flex gap-3 items-center group">
                                <Image
                                    src={type.relatedItems.typeImageUrl}
                                    containerClass="w-12 h-12 aspect-square p-2 bg-custom-color1 rounded-full"
                                    alt={type?.salonsTypeTitle}
                                />
                                <span class="w-full group-hover:text-custom-color13">
                                    {type?.salonsTypeTitle}
                                </span>
                            </div>
                        </a>
                    </>)
                }
            </div>
            <div class="w-full">
                <a href={detailsAd.link}>
                    <Image
                        src={detailsAd.image}
                        containerClass="max-w-full w-full sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto"
                        alt={detailsAd.title}
                    />
                </a>
            </div>
        </div>
    </>
}

export default Services
