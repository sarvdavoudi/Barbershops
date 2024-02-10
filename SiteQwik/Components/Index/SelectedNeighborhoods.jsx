import { useListingUrl } from 'Salons'

const SelectedNeighborhoods = ({
    localePathPrefix,
    selectedCityDivisions,
    selectedNeighborhoods,
}) => {
    return <>
        <div class="w-full lg:container mx-auto px-5 pt-8 pb-10 xl:pb-20 text-center">
            <strong class="block py-3 mb-3 rounded bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13 ">{selectedNeighborhoods.title}</strong>
            <p class="text-center lg:text-start text-custom-color2/60 py-5">{selectedNeighborhoods.summary}</p>
            <ul class="grid grid-cols-2 text-custom-color22 font-bold lg:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-6 mt-10">
                {
                    selectedCityDivisions.map(item => (
                        <li
                            key={item.id}
                            class="border border-custom-color22/60 py-3 rounded hover:bg-gradient-to-r hover:from-custom-color13 hover:via-custom-color11 hover:to-custom-color13 hover:transition-all hover:border-transparent"
                        >
                            <a
                                href={useListingUrl({
                                    cityDivision: item?.slug,
                                    localePathPrefix: localePathPrefix,
                                })}
                                aria-label={item.name}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    </>
}

export default SelectedNeighborhoods
