import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import {
    useListingUrl,
    useSalonUrl,
} from 'Salons'
import { Select } from 'Index'

const SearchTexts = component$(({
    allCityDivisions,
    allTypes,
    localePathPrefix,
    searchTexts,
}) => {
    const cityDivisionSlug = useSignal(null)
    const typeSlug = useSignal(null)
    useVisibleTask$(({ track }) => {
        track(() => cityDivisionSlug.value)
        track(() => typeSlug.value)
    })
    return <>
        <div class="max-w-full w-[460px] lg:w-full bg-custom-color2/40 rounded-xl py-10 px-6 flex flex-col gap-6 mx-auto">
            <Select
                itemsTitle={searchTexts.cityDivisionsTitle}
                items={allCityDivisions}
                slug={cityDivisionSlug}
            />
            <Select
                itemsTitle={searchTexts.typesTitle}
                items={allTypes}
                slug={typeSlug}
            />
            <a
                href={useListingUrl({
                    cityDivision: cityDivisionSlug?.value,
                    localePathPrefix: localePathPrefix,
                    types: typeSlug?.value,
                })
                }
            >
                <button class="w-full bg-custom-color12 rounded text-custom-color3 py-2 font-bold text-lg shadow">
                    {searchTexts.searchTitle}
                </button>
            </a>

        </div>
    </>
})

export default SearchTexts
