import { Pagination } from 'Shared'
import { Salon } from 'SalonsParts'

const Salons = ({
    localePathPrefix,
    salons,
    salonsText,
}) => {
    return <>
        <div class="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {
                salons.data?.map(item => <>
                    <div class="flex flex-col lg:flex-row lg:gap-10 pb-10 lg:pb-8 lg:px-1 border-b border-custom-color1">
                        <Salon
                            {...item}
                            {...salonsText}
                            localePathPrefix={localePathPrefix}
                        />
                    </div>
                </>)
            }
        </div>
        <div class="h-10 my-20">
            <Pagination metadata={salons.metadata} />
        </div>
    </>
}

export default Salons
