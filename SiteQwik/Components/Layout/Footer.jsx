import { Image } from 'Base'

const Footer = ({
    branding,
    copyright,
    footerAbout,
    footerLinks,
    footersQuickLinks,
    socialNetworks,
}) => {
    return <>
        <footer class="bg-custom-color2 text-custom-color1 px-5">
            <div class="w-full grid lg:container mx-auto px-5 py-10 lg:grid-cols-4 gap-4 sm:grid-cols-1 gap-10 sm:gap-x-4 sm:gap-y-10">
                <div class="flex flex-col gap-4 col-span-4 lg:col-span-1">
                    <a
                        href="/"
                        class="mx-auto lg:ms-0"
                    >
                        <div class="w-[80px] lg:w-[100px] aspect-[3/2]">
                            <Image
                                src={branding.logo}
                                containerClass="w-full h-full"
                                alt={branding.slogan}
                            />

                        </div>
                    </a>
                    <p> {footerAbout.text}</p>

                </div>
                <div class="flex flex-col gap-4 col-span-4 lg:col-span-1">
                    <strong> {footersQuickLinks.title}</strong>
                    <ul class="flex flex-col gap-2 mt-5">
                        {
                            footersQuickLinks.items?.map(item =>
                                <li class="ps-3">
                                    <a
                                        ria-label={item.title}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div class="col-span-4 sm:col-span-2">
                    <strong> {footerLinks.title}</strong>
                    <ul class="columns-1 sm:columns-2 mt-5 [&>li]:mb-2">
                        {
                            footerLinks.items?.map(item =>
                                <li class="ps-3">
                                    <a
                                        aria-label={item.title}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div class="w-full flex flex-col border-t border-custom-color1 lg:container mx-auto px-5 py-10 sm:flex-row gap-5 items-center justify-between">
                <p class="text-xs "> {copyright.text} </p>
                <div class="flex fill-custom-color1 gap-5">
                    {
                        socialNetworks.items?.map(item =>
                            <a
                                aria-label={item.name}
                                href={item.link}
                            >
                                <div
                                    class="w-6 h-6"
                                    dangerouslySetInnerHTML={item.icon} />
                            </a>
                        )
                    }
                </div>
            </div>
        </footer>
    </>
}

export default Footer
