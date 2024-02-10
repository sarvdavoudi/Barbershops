import { component$ } from '@builder.io/qwik'
import { useComment } from 'Social'
import { Message } from 'Shared'
import {
    Email,
    LongText,
    Text,
} from 'Forms'

const CommentForm = component$(({
    entityGuid,
    entityType,
    fields,
    form,
}) => {
    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entityType, entityGuid)
    return <>
        <div>
            <p class="mt-6 mb-12 md:my-10 py-3 border-b border-custom-color1 font-bold text-lg"> {form.title}</p>
            <div>
                <div class="grid sm:grid-cols-2 gap-2 sm:gap-7">
                    <Text
                        class="border border-custom-color1 w-full py-3 px-5 mb-2 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-500"
                        type="text"
                        modelBind={model}
                        placeholder={fields.name?.placeholder}
                        property={fields.name?.key}
                    />
                    <Email
                        class="border border-custom-color1 w-full py-3 px-5 mb-2 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-500"
                        type="text"
                        modelBind={model}
                        placeholder={fields.email?.placeholder}
                        property={fields.email?.key}
                    />
                </div>
                <div class="pt-5">
                    <LongText
                        type="text"
                        modelBind={model}
                        placeholder={fields.body?.placeholder}
                        property={fields.body?.key}
                        class="border border-custom-color1 pt-3 px-5 rounded focus:outline-none placeholder:text-sm w-full aspect-[5/1]min-h-40 placeholder:text-gray-500"
                    />
                </div>
                <div class="pt-2 lg:pt-4 text-end">
                    <button
                        class="w-32 py-1.5 inline-block mx-auto text-center text-lg rounded border-2 hover:bg-custom-color12 transition-all bg-custom-color1"
                        onClick$={handleSubmit}
                        type='button'
                    >
                        {form.ctaText}
                    </button>

                </div>
                {
                    isMessageShown.value &&
                    <Message
                        isSuccess={isSuccess.value}
                        message={isSuccess.value ? form.successMessage : form.errorMessage}
                    />
                }
            </div>
        </div>
    </>
})

export default CommentForm
