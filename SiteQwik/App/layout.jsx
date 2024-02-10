import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useLayoutSeo } from 'Seo'
import {
    getBranding,
    getSystemConfig,
} from 'Configuration'
import { getGlobalization } from 'Globalization'
import { getLayout } from 'Contents'
import { getMenu } from 'Navigation'
import {
    Footer,
    Header,
} from 'Layout'

const getData = routeLoader$(async props => {
    const [
        layout,
        branding,
        globalization,
        menuItems,
        systemConfigs,
    ] = await useAsync([
        getLayout('main', props),
        getBranding(props),
        getGlobalization(props),
        getMenu(props),
        getSystemConfig(props),
    ])
    return {
        ...globalization,
        ...layout,
        ...menuItems,
        ...branding,
        ...systemConfigs,
    }

})

const Layout = component$(() => {
    const data = getData().value
    const {
        isRtl,
        menuItems,
        branding,
        searchTexts,
        translations,
        footerAbout,
        footersQuickLinks,
        footerLinks,
        copyright,
        socialNetworks,
    } = data

    return <>
        <div
            dir={isRtl ? "rtl" : "ltr"}
            class="w-full text-custom-color2 text-sm md:text-base"
        >
            <Header
                searchTexts={searchTexts}
                branding={branding}
                translations={translations}
                menuItems={menuItems}
            />
            <Slot />
            <Footer
                branding={branding}
                footerAbout={footerAbout}
                footersQuickLinks={footersQuickLinks}
                footerLinks={footerLinks}
                copyright={copyright}
                socialNetworks={socialNetworks}
            />
        </div>
    </>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }
