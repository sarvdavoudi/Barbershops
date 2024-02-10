import { merge } from 'Base'

const CloseIcon = ({
    class: internalClass,
}) => {
    return <>
        <svg
            class={merge('', internalClass)}
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M6 18L18 6M6 6l12 12"
            >
            </path>
        </svg>
    </>
}

export default CloseIcon
