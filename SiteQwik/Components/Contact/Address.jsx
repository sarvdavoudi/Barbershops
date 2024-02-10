import { Map } from 'Base'

const Address = ({ contactInfo }) => {
    return <>
        <Map
            containerClass='relative z-10 w-full md:w-1/2 h-[300px] md:h-[440px]'
            zoom={15}
            coordinates={[contactInfo?.mapLatitude, contactInfo?.mapLongitude]}
            marker={{
                coordinates: [contactInfo?.mapLatitude, contactInfo?.mapLongitude]
            }}
            id='contactMap'
        />
    </>
}

export default Address
