import { Pagination as DefaultPagination } from 'Base'

const Pagination = ({ metadata }) => {
    return <>
        <DefaultPagination
            container="flex flex-wrap gap-2 max-w-7xl mx-auto px-6 mt-5 mb-20"
            items="flex items-center justify-center w-8 sm:w-10 aspect-square rounded-full text-custom-color2 text-xs sm:text-base hover:bg-custom-color1 hover:text-custom-color2 transition-all"
            activeClass="bg-custom-color1"
            ellipses
            next="w-10 p-1 sm:p-2"
            last="w-10 aspect-square p-1 sm:p-2"
            previous="w-10 aspect-square p-1 sm:p-2"
            first="w-10 aspect-square p-1 sm:p-2"
            metadata={metadata}
        />
    </>
}

export default Pagination
