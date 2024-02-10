import { merge } from 'Base'

const GalleryIcon = ({
    class: internalClass,
}) => {
    const style = {
        fill: "none",
        stroke: 'currentColor',
    }
    return <>
        <svg
            class={merge('w-8 fill-custom-color2', internalClass)}
            viewBox="0 0 29.91 30.372"
        >
            <g transform="translate(1 1)">
                <path
                    d="M20.193,0H7.307C2.814,0,0,3.28,0,7.923V20.449c0,4.642,2.8,7.923,7.307,7.923H20.191c4.505,0,7.308-3.28,7.308-7.923V7.923C27.5,3.28,24.7,0,20.193,0Z"
                    {...style}
                    transform="translate(0)"
                >
                </path>
                <path
                    d="M5.5,2.838a2.8,2.8,0,0,1-2.75,2.838A2.8,2.8,0,0,1,0,2.838,2.8,2.8,0,0,1,2.749,0,2.8,2.8,0,0,1,5.5,2.838Z"
                    {...style}
                    transform="translate(6.35 6.44)"
                >
                </path>
                <path
                    d="M26.009,4.5A34.31,34.31,0,0,0,21.541.516c-1.7-1.056-3.53-.4-4.71,1.171C15.692,3.21,14.98,5.26,13.259,6.22c-2.12,1.185-3.366-.726-5.134-1.491C6.15,3.876,4.651,5.41,3.5,6.884S1.174,9.82,0,11.281"
                    {...style}
                    transform="translate(1.489 14.252)"
                >
                </path>
            </g>
        </svg>
    </>
}

export default GalleryIcon
