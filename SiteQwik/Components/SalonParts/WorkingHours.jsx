import { ClockIcon } from 'Svg'

const WorkingHours = ({
    title,
    workingHours,
}) => {
    return <>
        <div class="w-full px-5 pb-12">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-10">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <ClockIcon/>
                    <p class="font-bold text-lg">{title}</p>
                </div>
            </div>
            <div>
                <span class="font-bold text-lg md:px-10">{workingHours}</span>
            </div>
        </div>
    </>
}

export default WorkingHours
