import { component$ } from '@builder.io/qwik'
import { Breadcrumb } from 'Shared'
import {
    Categories,
    Posts,
} from 'BlogParts'

const Layout = component$(({
    breadcrumb,
    categories,
    currentLocale,
    localePathPrefix,
    localesEnum,
    posts,
    seo,
}) => {
    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <main class="w-full lg:container mx-auto px-5 pt-12 lg:pt-10 pb-12">
            <div class="pb-8 md:pb-10">
                <p class="text-4xl font-bold px-10 pb-10 md-pb-5">
                    <a href={breadcrumb[1].link}>
                        {breadcrumb[1].text}
                    </a>
                </p>
                <Categories
                    categories={categories}
                    localePathPrefix={localePathPrefix}
                />
            </div>
            <h1 class="text-center text-xl font-bold py-3 mb-3 rounded bg-gradient-to-r from-custom-color13 via-custom-color11 to-custom-color13">
                {seo.pageTitle}
            </h1>
            <Posts
                currentLocale={currentLocale}
                localePathPrefix={localePathPrefix}
                localesEnum={localesEnum}
                posts={posts}
            />
        </main>
    </>
})

export default Layout
