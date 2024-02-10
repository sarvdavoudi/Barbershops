import { Image } from 'Base'
import {
    Breadcrumb,
    RichText,
} from 'Shared'

const Layout = ({
    breadcrumb,
    content,
    page,
}) => {
    return <>
        <div class="mb-12">
            <Breadcrumb breadcrumb={breadcrumb} />
            <h1 class="text-4xl font-bold mx-10"> {page?.title}</h1>
            <div class="my-10">
                <Image
                    src={page?.relatedItems?.imageUrl}
                    containerClass="w-full aspect-[4/1]"
                    alt={page?.title}
                />
            </div>
            <RichText
                content={content}
                class="text-md leading-8 space-y-5"
            />
        </div>
    </>
}

export default Layout
