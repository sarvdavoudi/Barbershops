import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Image } from 'Base'
import {
    HamburgerIcon,
    SearchIcon,
} from 'Svg'
import {
    DesktopMainMenu,
    MobileMainMenu,
} from 'Layout'
import { BackDrop } from 'Shared'

const Header = component$(({
    branding,
    menuItems,
    searchTexts,
    translations,
}) => {
    const showMenu = useSignal(false)
    return <>
        <header class="sticky top-0 z-20 bg-custom-color2">
            <div class="w-full lg:container flex flex-row text-custom-color1 shadow items-center justify-between px-5 mx-auto py-1 lg:py-0">
                <div class="flex items-center">
                    <nav class="flex items-center lg:hidden">
                        <button
                            class="w-8 h-8 text-slate-50 lg:hidden font-bold focus:outline-none"
                            onClick$={() => {
                                showMenu.value = !showMenu.value
                            }}
                            aria-label="HamburgerButton"
                        >
                            {
                                !showMenu.value && <HamburgerIcon />
                            }
                        </button>
                        {
                            showMenu.value && <BackDrop click={showMenu} />
                        }
                        {
                            showMenu.value &&
                            <MobileMainMenu
                                menuItems={menuItems}
                                showMenu={showMenu}
                            />
                        }
                    </nav>
                    <div class="ms-2">
                        <a href="/">
                            <Image
                                src={branding.logo}
                                containerClass="w-[60px] lg:w-[100px] aspect-[3/2]"
                                alt={branding.slogan}
                                priority
                            />
                        </a>
                    </div>
                    <nav class="hidden lg:flex lg:items-center">
                        <DesktopMainMenu menuItems={menuItems} />
                    </nav>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex">
                        <input
                            type="text"
                            placeholder={searchTexts.saloonsSearch}
                            class="max-w-[128px] lg:max-w-[160px] bg-custom-color3 px-1.5 text-custom-color2 rounded-r focus:outline-none"
                        />
                        <SearchIcon />
                    </div>
                    <div class="hidden md:flex text-sm gap-1">
                        <a href="/"> {translations.login} </a>
                        <span> / </span>
                        <a href="/"> {translations.register}</a>
                    </div>
                </div>
            </div>
        </header >
    </>
})

export default Header
