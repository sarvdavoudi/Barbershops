import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { MobileSubMenu } from 'Layout'
import { CloseIcon } from 'Svg'

const MobileMainMenu = component$(({
    menuItems,
    showMenu,
}) => {
    const showSubMenu = useSignal(false)
    return <>
        <div class="max-w-[300px] w-[90%] h-screen start-0 top-0 bg-custom-color2 fixed z-10">
            <button
                class="w-8 text-custom-color1 mx-3 my-5 lg:hidden font-bold focus:outline-none"
                onClick$={() => {
                    showMenu.value = !showMenu.value
                }}
            >
                {
                    showMenu.value && <>
                        <CloseIcon />
                    </>
                }
            </button>
            <ul class="overflow-scroll-y">
                {
                    menuItems.map(item => <>
                        <li
                            key={item?.id}
                            class="group relative flex flex-col border-t start-0 py-2 border-custom-color13 text-custom-color1 font-bold text-sm">
                            <div class="flex justify-between items-center px-3">
                                <a
                                    href={item.url}
                                    class="hover:text-custom-color12 py-2"
                                >
                                    {item.title}
                                </a>
                                {
                                    item.relatedItems.children.length > 0 &&
                                    <span
                                        class="text-4xl"
                                        onClick$={() => {
                                            showSubMenu.value = !showSubMenu.value
                                        }}
                                    >
                                        {showSubMenu.value ? "-" : "+"}
                                    </span>
                                }
                            </div>
                            {
                                item.relatedItems.children.length > 0 && <>
                                    <div
                                        key={item?.id}
                                        class={showSubMenu.value ? "block" : "hidden"}
                                    >
                                        <MobileSubMenu items={item.relatedItems.children} />
                                    </div>
                                </>
                            }
                        </li>
                    </>)
                }
            </ul>
        </div >
    </>
})

export default MobileMainMenu
