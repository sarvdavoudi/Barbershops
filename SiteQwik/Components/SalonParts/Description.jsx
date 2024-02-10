import { RichText } from 'Shared'
import { GridIcon } from 'Svg'

const Description = ({
    content,
    title,
}) => {
    return <>
        <div class="w-full px-5 pb-5">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-10">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <GridIcon class="w-7 fill-custom-color2" />
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <RichText
                content={content}
                class="w-full lg:container mx-auto mb-5 leading-8 space-y-2 px-1 md:px-0 md:px-10"
                p="w-full text-lg leading-8"
            />
        </div>
    </>
}

export default Description
