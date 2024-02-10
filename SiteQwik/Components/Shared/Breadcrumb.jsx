import { DefaultBreadcrumb } from 'Base'

const Breadcrumb = ({ breadcrumb }) => {
    return <>
        <div class="w-full inline-flex py-3 px-5 bg-custom-color23 text-base mb-12 overflow-x-auto">
            <DefaultBreadcrumb
                wrapperClass="w-full text-custom-color12 flex gap-3"
                itemClass="text-custom-color3"
                separator={<span class=" text-custom-color3"> &#62; </span>}
                breadcrumb={breadcrumb}
            />
        </div>
    </>
}

export default Breadcrumb
