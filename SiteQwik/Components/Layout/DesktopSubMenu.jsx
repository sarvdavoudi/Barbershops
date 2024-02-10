const DesktopSubMenu = ({items}) => {
    return <>
        <ul class="hidden w-[300px] absolute z-20 group-hover:block top-10 rounded-lg bg:text-custom-color2 bg-custom-color3 shadow shadow-lg shadow=gray duration-300">
            {
                items.map(item =>
                    <li class="last:rounded-b-lg first:rounded-t-lg py-2 text-custom-color2/60 hover:bg-custom-color1 hover:text-custom-color3">
                        <a
                            href={item.url}
                            class="hover:text-custom-color12 duration-300 mx-5 hover:text-custom-color13 hover:text-custom-color3"
                        >
                            {item.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>
}

export default DesktopSubMenu
