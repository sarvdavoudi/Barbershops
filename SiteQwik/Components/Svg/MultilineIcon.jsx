import { merge } from 'Base'

const MultilineIcon = ({
    class: internalClass,
}) => {
    const externalProps = {
        height: "3",
        rx: "1.5",
        stroke: "none",
        width: "21",
    }
    const internalRect = {
        height: "1.9",
        rx: "0.95",
        width: "19.9",
        x: "0.55",
        y: "0.55"
    }
    const transformRect = [
        {
            transform: "translate(1515 829)"
        },
        {
            transform: "translate(1515 834)"
        },
        {
            transform: "translate(1515 839)"
        },
        {
            transform: "translate(1515 844)"
        },
    ]
    return <>
        <svg
            class={merge('w-7 stroke-custom-color2 fill-none', internalClass)}
            viewBox="0 0 21 18"
        >
            <g
                transform="translate(-1515 -829)">
                {
                    transformRect.map(item =>
                        <g {...item}>
                            <rect {...externalProps}></rect>
                            <rect {...internalRect}></rect>
                        </g>
                    )
                }
            </g>
        </svg>
    </>
}

export default MultilineIcon
