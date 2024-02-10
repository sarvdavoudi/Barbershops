import { component$ } from '@builder.io/qwik'
import {
    Image,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'
import { useCategoryUrl } from 'Blog'

const Categories = component$(({
    categories,
    localePathPrefix,
}) => {
    return <>
        <Swiper
            name='categories'
            containerClass="pb-10 max-w-4xl mx-auto"
            paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
            config={{
                breakpoints: {
                    [zero]: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    [xs]: {
                        slidesPerView: 2.2,
                        spaceBetween: 10,
                    },
                    [sm]: {
                        slidesPerView: 3.1,
                        spaceBetween: 20,
                    },
                    [md]: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }
            }}
        >
            {
                categories?.map(item => <SwiperSlide
                    key={item?.id}>
                    <a
                        href={useCategoryUrl(item.slug, localePathPrefix)}
                        class="flex flex-col items-center gap-3 justify-center border border-custom-color1 rounded max-w-[300px] py-5 group"
                    >
                        <div class="w-14 group-hover:scale-105">
                            <Image
                                src={item?.relatedItems.imageUrl}
                                containerClass="w-full h-full"
                                alt={item?.title}
                            />
                        </div>
                        <div class="mt-3 text-custom-color2 group-hover:text-custom-color13"> {item.title}</div>
                    </a>
                </SwiperSlide>
                )}
        </Swiper>
    </>
})

export default Categories
