import { merge } from 'Base'

const HamburgerIcon = ({
    class: internalClass,
}) => {
    return <>
        <svg
            class={merge('', internalClass)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
            ></path>
        </svg>
    </>
}

export default HamburgerIcon

