import { merge } from 'Base'

const SearchIcon = ({
    class: internalClass,
}) => {
    return <>
        <svg
            class={merge('w-10 h-9 p-1.5 bg-custom-color12 aspect-square rounded-e', internalClass)}
            viewBox="0 0 24 24"
            stroke="#200e32"
        >
            <circle
                cx="8.989"
                cy="8.989"
                fill="none"
                r="8.989"
                stroke="#200e32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                transform="translate(0.778 0.778)">
            </circle>
            <path
                d="M0,0,3.524,3.515"
                transform="translate(16.018 16.485)"
            ></path>
        </svg>
    </>
}

export default SearchIcon
