import {
    Image,
    lg,
    LocalizedDate,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from 'Base'
import { Post } from 'Shared'

const Posts = ({
    currentLocale,
    localePathPrefix,
    localesEnum,
    posts,
}) => {
    return <>
        <Swiper
            name='categories'
            containerClass="w-full pb-12"
            paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
            config={{
                breakpoints: {
                    [zero]: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    [xs]: {
                        slidesPerView: 1.45,
                        spaceBetween: 25,
                    },
                    [sm]: {
                        slidesPerView: 2.1,
                        spaceBetween: 25,
                    },
                    [md]: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    [lg]: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    [xl]: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }
            }}
        >
            {
                posts?.map(item => <SwiperSlide
                    key={item?.id}>
                    <Post
                        item={item}
                        localePathPrefix={localePathPrefix}
                        currentLocale={currentLocale}
                        localesEnum={localesEnum}
                    />
                </SwiperSlide>
                )}
        </Swiper>
    </>
}

export default Posts
