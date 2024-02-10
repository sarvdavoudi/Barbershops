import { Map } from 'Base'
import { GridIcon } from 'Svg'

const Addresses = ({
    addressTitle,
    contactInfo,
    geoCityDivisionId,
    geoCityName,
    geoCountryName,
    geoLocationLatitude,
    geoLocationLongitude,
    mobileTitle,
    phoneTitle,
    relatedItems,
    workPhoneTitle,
}) => {
    const {
        phones,
        addresses,
    } = relatedItems
    return <>
        <div class="w-full px-5">
            <div class="relative after:content-[''] after:absolute after:w-full after:border-b after:top-1/2 after:start-0 after:border-custom-color12 mb-6">
                <div class="relative z-10 max-w-fit flex items-center gap-2 bg-custom-color3 pe-6">
                    <GridIcon />
                    <p class="text-xl font-bold">{contactInfo}</p>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-20">
                <div class="w-full md:w-1/2 divide-y">
                    <div class="w-full pb-8">
                        <span class="font-bold text-lg">
                            {addressTitle}
                        </span>
                        <p class="pt-4">
                            {geoCountryName + ', ' + geoCityName + ', ' + addresses[0].rest}
                        </p>
                    </div>
                    {
                        phones?.map(item =>
                            <div class="flex flex-row gap-3 py-3 items-center">
                                {
                                    (item.relatedItems.phoneTypeKey == "Mobile") &&
                                    <span class="font-bold text-lg">{mobileTitle}</span>
                                }
                                {
                                    (item.relatedItems.phoneTypeKey == "Work") &&
                                    <span class="font-bold text-lg">{workPhoneTitle}</span>
                                }
                                <p>{item?.phoneValue}</p>
                            </div>
                        )
                    }
                </div>
                <div class="w-full md:w-1/2 md:pt-2">
                    <Map
                        containerClass='w-full z-10 h-[300px] md:h-[440px]'
                        zoom={15}
                        coordinates={[geoLocationLatitude, geoLocationLongitude]}
                        marker={{
                            coordinates: [geoLocationLatitude, geoLocationLongitude]
                        }}
                        id={'' + geoCityDivisionId}
                    />
                </div>
            </div>
        </div>
    </>
}

export default Addresses
