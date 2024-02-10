import { component$ } from '@builder.io/qwik'
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from 'Base'
import { Salon } from 'Shared'

const Salons = component$(({
    latestSpecialSalons,
    localePathPrefix,
    title,
}) => {
    return <>
        <section class="mx-auto lg:container text-center px-5 lg:pt-10 pb-8 text-base">
            <strong class="block py-3 rounded text-sm md:text-lg bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13 hover:from-custom-color11 hover:via-custom-color13 hover:to-custom-color11 duration-500">
                {title}
            </strong>
            <Swiper
                name='LatestSpecialSalonsSlider'
                containerClass="pb-12 px-2 pt-5"
                paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
                config={{
                    breakpoints: {
                        [zero]: {
                            slidesPerView: 1.1,
                            spaceBetween: 10,
                        },
                        [xs]: {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
                        },
                        [sm]: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        [md]: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        [lg]: {
                            slidesPerView: 3.1,
                            spaceBetween: 20,
                        },
                        [xl]: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }
                }}
            >
                {
                    latestSpecialSalons?.map(item => <SwiperSlide
                        key={item?.id}>
                        <Salon
                            item={item}
                            localePathPrefix={localePathPrefix}
                        />
                    </SwiperSlide>)}
            </Swiper>
        </section >
    </>
})

export default Salons
