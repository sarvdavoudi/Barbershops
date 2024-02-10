import { merge } from 'Base'

const StarIcon = ({
    class: internalClass,
}) => {
    return <>
        <svg
            class={merge('w-4 aspect-square fill-custom-color13', internalClass)}
            viewBox="0 -960 960 960"
        >
            <path d="M480-202 311.5-101q-17.5 9.5-34.25 8T248-104q-12.5-9.5-18.5-26t-1-33.5L273-351 124-478q-14.5-12.5-18-28.75t0-31.25q3.5-15 18.25-26.5t32.25-12l194-17 78-179.5q8-18.5 21.5-26.5t30-8q16.5 0 30 8t21.5 26.5l78 180.5 194 16q17.5.5 32.25 12.5T854-537q3.5 15-.5 30.75T835-478L687-351l44.5 187.5q5 17-1 33.5T712-104q-12.5 9.5-29.25 11t-34.25-8L480-202Z"
            >
            </path>
        </svg>
    </>
}

export default StarIcon
