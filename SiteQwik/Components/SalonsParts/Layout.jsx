import {
    Breadcrumb,
    RichText,
} from 'Shared'
import { Salons } from 'SalonsParts'

const Layout = cityDivisionWrapper => {
    const {
        breadcrumb,
        seo,
    } = cityDivisionWrapper
    const {
        pageTitle,
        relatedItems
    } = seo
    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <main class="w-full lg:container mx-auto px-5 pt-12">
            <div class="pt-6 md:pt-0">
                <h1 class="text-center lg:text-lg font-bold py-3 mb-10 rounded bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13 ">
                    <a href={breadcrumb[breadcrumb.length - 1].link}>
                        {pageTitle}
                    </a>
                </h1>
            </div>
            <div class="pt-5">
                <Salons {...cityDivisionWrapper} />
            </div>
            {
                relatedItems.content &&
                <div class="mb-10 sm:mb-10 xl:mb-20 sm:pb-5 px-5 rounded-lg border border-custom-color1 ">
                    <RichText
                        content={relatedItems.content}
                        class="w-full lg:container mx-auto my-6 leading-8 space-y-5 sm:px-5"
                        h2="font-bold mt-[30px] mb-[5px] text-[1.5rem]"
                        img="mx-auto pb-[10px]"
                    />
                </div>
            }
        </main>
    </>
}

export default Layout
