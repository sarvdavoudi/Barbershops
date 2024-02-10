import { merge } from 'Base'

const CameraIcon = ({
    class: internalClass,
}) => {
    const style = {
        fill: "none",
        stroke: 'currentColor',
    }
    return <>
        <svg
            class={merge('w-8 fill-custom-color2', internalClass)}
            viewBox="0 0 30.469 19.956"
        >
            <g transform="translate(0.85 0.85)">
                <path
                    d="M20.087,13.747c0,2.642-2.056,4.509-5.345,4.509H5.328C2.043,18.256,0,16.389,0,13.747V4.521C0,1.88,2.043,0,5.345,0h9.4c3.289,0,5.345,1.88,5.345,4.521Z"
                    {...style}
                >
                </path>
                <path
                    d="M0,4.749,6.2.3a1.547,1.547,0,0,1,2.479,1.03v9.11A1.547,1.547,0,0,1,6.2,11.473L0,7.026"
                    {...style}
                    transform="translate(20.087 3.24)">
                </path>
            </g>
        </svg>
    </>
}

export default CameraIcon
