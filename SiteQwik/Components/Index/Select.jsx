import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'

const Select = component$(({
    items,
    itemsTitle,
    slug,
}) => {
    const showItems = useSignal(false)
    const title = useSignal(itemsTitle)
    useVisibleTask$(({ track }) => {
        track(() => title.value)
    })
    return <>
        <div class="relative w-full group bg-custom-color3 rounded shadow hover:rounded-b-none cursor-pointer p-2">
            <p
                class="px-3 py-1.5"
                onClick$={() => showItems.value = !showItems.value}
            >
                {title.value}
            </p>
            <div class={showItems.value ? "w-full start-0 max-h-[200px] absolute z-20 bg-custom-color3 overflow-y-auto" : "hidden"}>
                {
                    items.map(item => <>
                        <div
                            key={item.id}
                            class="p-1"
                            onClick$={() => {
                                showItems.value = !showItems.value
                                title.value = (item.title) ? item.title : item?.name
                                slug.value = item?.slug
                            }}
                        >
                            {
                                (item.title)
                                    ? item.title
                                    : item?.name
                            }
                        </div>
                    </>)
                }
            </div>
            <div
                class={showItems.value ? "fixed inset-0 w-full h-full z-10 bg-custom-color2 opacity-5 cursor-default" : "hidden"}
                onClick$={() => showItems.value = !showItems.value}
            >
            </div>
        </div>
    </>
})

export default Select
