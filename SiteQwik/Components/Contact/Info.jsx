import {
    EmailIcon,
    LocationIcon,
    PhonIcon,
} from 'Svg'

const Info = ({ contactInfo }) => {
    return <>
        <div class="w-full flex flex-wrap lg:flex-nowrap flex-col md:flex-row gap-x-0 gap-8 xs:gap-5 justify-center sm:justify-between md:justify-evenly font-bold mt-14">
            <div class="w-full md:w-[48%] lg:w-1/3 flex flex-col items-center text-center gap-2 lg:gap-8">
                <PhonIcon />
                <div>{contactInfo.phoneTitle}</div>
                <div>{contactInfo.phone}</div>
            </div>
            <div class="order-3 lg:order-none w-full lg:w-[48%] lg:w-1/3 flex flex-col items-center self-stretch text-center gap-2 lg:gap-8">
                <LocationIcon class="w-12 fill-custom-color13" />
                <div>{contactInfo.addressTitle}</div>
                <div>{contactInfo.address}</div>
            </div>
            <div class="w-full md:w-[48%] lg:w-1/3 flex flex-col items-center self-stretch text-center gap-2 lg:gap-8">
                <EmailIcon />
                <div>{contactInfo.emailTitle}</div>
                <div>{contactInfo.email}</div>
            </div>
        </div>
    </>
}

export default Info
