import { component$ } from '@builder.io/qwik'
import { merge } from 'Base'

const BackDrop = component$(({
    class: internalClass,
    click,
}) => {
    return <>
        <div
            onClick$={() => {
                click.value = !click.value
            }}
            class={merge('w-screen h-screen fixed inset-0 bg-custom-color2 opacity-[0.5]', internalClass)}
        >
        </div>
    </>
})

export default BackDrop
