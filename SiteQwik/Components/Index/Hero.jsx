import { component$ } from '@builder.io/qwik'
import { Image } from 'Base'
import {
    HomeAds,
    SearchTexts,
} from 'Index'

const Hero = component$(({
    allCityDivisions,
    allTypes,
    hero,
    homeAds,
    localePathPrefix,
    searchTexts,
}) => {
    return <>
        <section class="relative w-screen h-screen flex items-center justify-between">
            <div class="absolute w-screen h-screen md:hidden">
                <Image
                    src={hero.mobileImage}
                    containerClass="w-full h-full"
                    alt={hero.title}
                    priority
                />
            </div>
            <div class="hidden absolute w-screen h-screen md:block lg:hidden ">
                <Image
                    src={hero.tabletImage}
                    containerClass="w-full h-full"
                    alt={hero.title}
                    priority
                />
            </div>
            <div class="hidden absolute w-screen h-screen lg:block">
                <Image
                    src={hero.desktopImage}
                    containerClass="w-full h-full"
                    alt={hero.title}
                    priority
                />
            </div>
            <div class="hidden absolute w-screen h-screen bg-black/60 lg:block"></div>
            <div class="relative z-10 w-full lg:container mx-auto px-5 pt-14 pb-8 md-py-0 flex flex-col lg:flex-row items-end justify-between">
                <div class="w-full lg:w-[calc(100%-660px)] xl:w-[calc(100%-860px)] flex flex-col gap-4">
                    <div class="max-w-full w-[200px] sm:w-[300px] lg:w-[360px] aspect-[3/2] mx-auto">
                        <Image
                            src={hero.logo}
                            containerClass="w-full h-full"
                            alt={hero.title}
                        />
                    </div>
                    <SearchTexts
                        searchTexts={searchTexts}
                        allCityDivisions={allCityDivisions}
                        allTypes={allTypes}
                        localePathPrefix={localePathPrefix}
                    />
                </div>
                <div class="hidden lg:flex w-full lg:w-[565px] xl:w-[665px] gap-4">
                    <HomeAds
                    homeAds={homeAds}
                    name={"HomeAdsOfDesktopDesign"}
                    />
                </div>
            </div>
        </section>
        <section class="flex lg:hidden w-full px-5 gap-4 mt-4">
            <HomeAds
            homeAds={homeAds}
            name={"HomeAdsOfMobileDesign"}
            />
        </section>
    </>
})

export default Hero
