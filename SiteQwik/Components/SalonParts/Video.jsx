import { CameraIcon } from 'Svg'

const Video = ({
    title,
    videoTag,
}) => {
    return <>
        <div class={(videoTag) ? 'w-full px-5 pb-12' : 'hidden'}>
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-10">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <CameraIcon />
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <div class="flex justify-center md:px-10">
                <div
                    class="max-w-full w-full md:w-2/3 lg:w-1/2 mx-auto"
                    dangerouslySetInnerHTML={videoTag}
                />
            </div>
        </div>
    </>
}

export default Video
