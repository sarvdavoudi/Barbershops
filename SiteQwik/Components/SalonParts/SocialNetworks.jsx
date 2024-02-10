import { ShareIcon } from 'Svg'

const SocialNetworks = ({
    socialNetworks,
    title,
}) => {
    return <>
        <div class="w-full px-5 pb-10">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-6">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <ShareIcon />
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <div class={(socialNetworks.length != [0]) ? 'block' : 'hidden'}>
                {
                    socialNetworks?.map(item =>
                        <a
                            key={item?.id}
                            aria-label={item?.socialNetworkSlug}
                            href={item.value}
                            class="flex flex-row gap-3 items-center"
                        >
                            <div class="p-3 bg-custom-color1 rounded-full">
                                <div
                                    class="w-6 h-6 aspect-square overflow-hidden"
                                    dangerouslySetInnerHTML={item.socialNetworkSvg}
                                />
                            </div>
                            {item.socialNetworkTitle}
                        </a>
                    )
                }
            </div>
        </div>
    </>
}

export default SocialNetworks
