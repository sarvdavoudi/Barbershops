import { component$ } from '@builder.io/qwik'
import {
    Image,
    Swiper,
    SwiperSlide,
} from 'Base'

const HomeAds = component$(({
    homeAds,
    name,
}) => {

    return <>
        <div class=" lg:flex w-full lg:w-[565px] xl:w-[665px] gap-4">
            <Swiper
                name={name}
                containerClass="pb-10"
                paginationClass="pt-0 bullet:w-3 bullet:h-3 bullet:bg-custom-color1"
            >
                {
                    homeAds.items?.map(item => <SwiperSlide
                        key={item?.id}>
                        <a href={item.link}>
                            <Image
                                src={item.image}
                                containerClass="w-full aspect-[5/2] rounded-2xl overflow-hidden"
                                alt={item.title}
                            />
                        </a>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    </>
})

export default HomeAds
