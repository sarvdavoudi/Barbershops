import { component$ } from '@builder.io/qwik'
import { LocalizedDate } from 'Base'

const Comments = component$(({
    comments,
    currentLocale,
    localesEnum,
}) => {
    return <>
        <div class="flex flex-col gap-4 px-5 lg:px-20 mt-12">
            {
                comments.data?.map(item => <>
                    <div
                        class="rounded-2xl shadow lg:p-3 p-5"
                        key={item?.id}
                    >
                        <p class="font-bold"> {item.name}</p>
                        <div class="text-custom-color22">
                            <LocalizedDate
                                utcDate={item?.utcDate}
                                localeKey={currentLocale.key}
                                localesEnum={localesEnum}
                            />
                        </div>
                        <p>{item.body}</p>
                    </div>
                </>)
            }
        </div>
    </>
})

export default Comments
