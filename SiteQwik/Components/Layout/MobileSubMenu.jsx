const MobileSubMenu = ({
    items,
}) => {
    return <>
        <ul class="w-full relative font-normal border-t border-custom-color13 duration-300">
            {
                items.map(item => <>
                    <li
                        key={item?.id}
                        class="border-b border-custom-color12 border-dashed last:border-none py-1"
                    >
                        <a
                            key={item?.id}
                            href={item.url}
                            class="hover:text-custom-color12 duration-300 mx-5 hover:text-custom-color13"
                        >
                            {item.title}
                        </a>
                    </li>
                </>)
            }
        </ul>
    </>
}

export default MobileSubMenu
