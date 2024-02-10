import { component$ } from '@builder.io/qwik'
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from 'Base'
import { GalleryIcon } from 'Svg'

const Gallery = component$(({
    images,
    title,
}) => {
    return <>
        <div class="w-full px-5 pb-12 sm:pb-4 md:pb-6 lg:pb-10">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-10">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <GalleryIcon />
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <Swiper
                name='gallery'
                containerClass="w-full pb-12"
                paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
                config={{
                    breakpoints: {
                        [zero]: {
                            slidesPerView: 1.1,
                            spaceBetween: 10,
                        },
                        [xs]: {
                            slidesPerView: 1.7,
                            spaceBetween: 10,
                        },
                        [sm]: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        [md]: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        [lg]: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        [xl]: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }
                }}
            >
                {
                    images?.map(item => <SwiperSlide
                        key={item?.id}>
                        <Image
                            src={item.relatedItems.url}
                            containerClass="w-full aspect-[2/1] rounded-lg overflow-hidden"
                            alt={item?.title}
                        />
                    </SwiperSlide>)}
            </Swiper>
        </div>
    </>
})

export default Gallery
