import { component$ } from '@builder.io/qwik'
import {
    Breadcrumb,
    CommentForm,
    Comments,
    Salons,
} from 'Shared'
import {
    Addresses,
    Description,
    Gallery,
    Hero,
    Services,
    SocialNetworks,
    Video,
    WorkingHours,
} from 'SalonParts'

const Layout = component$(({
    breadcrumb,
    comments,
    content,
    currentLocale,
    detailsAd,
    fields,
    form,
    localePathPrefix,
    localesEnum,
    relatedSalons,
    salon,
    salonsText,
}) => {
    return <>
        <Breadcrumb
            breadcrumb={breadcrumb}
            class="w-full pt-16"
        />
        <div class="w-full mx-auto">
            <Hero
                {...salon}
                localePathPrefix={localePathPrefix}
                title={salon.title}
            />
            <main class="w-full lg:container mx-auto pb-12">
                <Services
                    {...salon.relatedItems}
                    detailsAd={detailsAd}
                    localePathPrefix={localePathPrefix}
                    title={salonsText.services}
                />
                <Description
                    title={salonsText.description}
                    content={content}
                />
                <WorkingHours
                    {...salon}
                    title={salonsText.workingHours}
                />
                <SocialNetworks
                    {...salon.relatedItems}
                    title={salonsText.socialNetworks}
                />
                <Gallery
                    {...salon.relatedItems}
                    title={salonsText.gallery}
                />
                <Video
                    {...salon}
                    title={salonsText.video}
                />
                <Addresses
                    {...salon}
                    {...salonsText}
                />
            </main>
            <div class="max-w-4xl mx-auto px-5 pb-12 pb-12">
                <Comments
                    comments={comments}
                    currentLocale={currentLocale}
                    localesEnum={localesEnum}
                />
                <CommentForm
                    form={form}
                    fields={fields}
                />
            </div>
            <Salons
                title={salonsText.relatedSalonTitle}
                latestSpecialSalons={relatedSalons}
                localePathPrefix={localePathPrefix}
            />
        </div>
    </>
})

export default Layout
