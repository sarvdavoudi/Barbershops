import { DesktopSubMenu } from 'Layout'

const DesktopMainMenu = ({ menuItems }) => {
    return <>
        <ul class="flex gap-4 item-center justify-center" >
            {
                menuItems.map(item =>
                    <li class="group relative">
                        <a
                            href={item.url}
                            class="hover:text-custom-color12 px-3 py-3"
                        >
                            {item.title}
                        </a>
                        {
                            item.relatedItems.children.length > 0 && <DesktopSubMenu items={item.relatedItems.children} />
                        }
                    </li>
                )
            }
        </ul>
    </>
}

export default DesktopMainMenu
