import {
    useCategoryUrl,
    usePostUrl,
} from 'Blog'
import {
    Image,
    LocalizedDate,
} from 'Base'
import {
    CategoryIcon,
    DateIcon,
} from 'Svg'

const Post = ({
    currentLocale,
    item,
    localePathPrefix,
    localesEnum,
}) => {
    return <>
        <div
            class="group "
            key={item?.id}
        >
            <div class="w-full pb-10 overflow-hidden rounded-l">
                <div class=" w-full h-full aspect-[2/1] group-hover:scale-110 duration-500 transition-all object-center">
                    <Image
                        src={item.relatedItems.imageUrl}
                        containerClass="w-full h-full"
                        alt={item.title}
                    />
                </div>
                <div class="flex flex-row gap-2 sm:gap-10 justify-start items-center p-1 sm:px-2 md-px-2.5 bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13 hover:from-custom-color11 rounded-b">
                    <div class="flex items-center gap-2 text-sm">
                        <DateIcon />
                        <LocalizedDate
                            utcDate={item?.utcDate}
                            localeKey={currentLocale.key}
                            localesEnum={localesEnum}
                        />
                    </div>
                    <div class="flex items-center gap-2 text-sm">
                        <CategoryIcon />
                        <a
                            href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                        >
                            {item.taxonomyEntityHierarchiesCsvsTitlesCsv.slice(1, (item.taxonomyEntityHierarchiesCsvsTitlesCsv.length - 1))}
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <a
                    href={usePostUrl(item.slug, localePathPrefix)}
                    class="font-bold text-xl group-hover:text-custom-color13"
                >
                    {item.title}
                </a>
                <div class="mt-3 line-clamp-3">
                    {item.summary}
                </div>
            </div>
        </div>
    </>
}

export default Post
