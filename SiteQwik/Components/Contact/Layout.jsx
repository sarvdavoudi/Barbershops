import { Image } from 'Base'
import { Breadcrumb } from 'Shared'
import {
    Address,
    Form,
    Info,
} from 'Contact'

const Layout = ({
    breadcrumb,
    contactInfo,
    fields,
    form,
    page,
}) => {
    return <>
        <Breadcrumb
            breadcrumb={breadcrumb}
            class="mb-6 md:mb-12 mt-12 lg:mt-0"
        />
        <h1 class="font-bold text-4xl ps-5 pt-8 sm:pt-5 md:pt-1 pb-12"> {page.title}</h1>
        <Image
            src={page?.relatedItems?.imageUrl}
            containerClass="w-full object-cover aspect-[4/1]"
            alt={page?.title}
        />
        <Info contactInfo={contactInfo} />
        <div class="w-full flex flex-col md:flex-row-reverse md:gap-5 lg:gap-20 my-10 md:mb-20 px-5 mx-auto">
            <Address contactInfo={contactInfo} />
            <Form
                form={form}
                fields={fields}
                contactInfo={contactInfo}
            />
        </div>
    </>
}

export default Layout
