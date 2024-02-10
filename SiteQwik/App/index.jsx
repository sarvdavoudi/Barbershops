import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { getLocalePathPrefix } from 'Globalization'
import {
    getAllCityDivisions,
    getAllSelectedCityDivisions,
} from 'Geo'
import {
    getAllTypes,
    getLatestSpecialSalons,
} from 'Salons'
import { Salons } from 'Shared'
import {
    Hero,
    SelectedNeighborhoods,
} from 'Index'

const getData = routeLoader$(async props => {
    const [
        page,
        selectedCityDivisions,
        latestSpecialSalons,
        allTypes,
        allCityDivisions,
    ] = await useAsync([
        getPage('home', props),
        getAllSelectedCityDivisions(props),
        getLatestSpecialSalons(8),
        getAllTypes(props),
        getAllCityDivisions(props),
    ])
    return {
        ...page,
        selectedCityDivisions,
        latestSpecialSalons,
        allTypes,
        allCityDivisions,
    }
})

const Index = component$(() => {
    const data = getData().value
    data.localePathPrefix = getLocalePathPrefix()
    const {
        hero,
        selectedNeighborhoods,
        searchTexts,
        homeAds,
        selectedSalons,
        selectedCityDivisions,
        latestSpecialSalons,
        allTypes,
        allCityDivisions,
        localePathPrefix,
    } = data
    return <>
        <main>
            <Hero
                hero={hero}
                searchTexts={searchTexts}
                allCityDivisions={allCityDivisions}
                allTypes={allTypes}
                homeAds={homeAds}
                localePathPrefix={localePathPrefix}
            />
            <Salons
                {...selectedSalons}
                latestSpecialSalons={latestSpecialSalons}
                localePathPrefix={localePathPrefix}
            />
            <SelectedNeighborhoods
                selectedCityDivisions={selectedCityDivisions}
                selectedNeighborhoods={selectedNeighborhoods}
                localePathPrefix={localePathPrefix}
            />
        </main>
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
