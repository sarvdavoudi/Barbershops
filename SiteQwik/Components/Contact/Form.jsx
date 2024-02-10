import { component$ } from '@builder.io/qwik'
import { Message } from 'Base'
import {
    Email,
    LongText,
    Text,
    useForm,
} from 'Forms'
// import { Loading } from 'Svg'

const Form = component$(({
    fields,
    form,
}) => {
    const {
        email,
        longText,
        fullName,
    } = fields
    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm(
        {
            fields: form?.relatedItems?.fields,
            form,
        }
    )
    return <>
        <div class="w-full md:w-[50%]">
            {form.title}
            <Text
                class="border border-custom-color1 w-full py-3 px-5 mb-2 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-500"
                type="text"
                modelBind={model}
                placeholder={fullName?.placeholder}
                property={fullName?.key}
            />
            <Email
                class="border border-custom-color1 w-full py-3 px-5 mb-2 rounded focus:outline-none placeholder:text-sm placeholder:text-gray-500"
                type="text"
                modelBind={model}
                placeholder={email?.placeholder}
                property={email?.key}
            />
            <LongText
                type="text"
                modelBind={model}
                placeholder={longText?.placeholder}
                property={longText?.key}
                class="pt-3 px-5 rounded focus:outline-none placeholder:text-sm w-full aspect-[5/1] md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[10/3] 2xl:aspect-[4/1] min-h-40 placeholder:text-gray-500 border border-custom-color1"
            />
            <div class="text-end">
                <button
                    id="buttonSubmit"
                    aria-label={form.ctaText}
                    class={`${progress.value ? "bg-gray-300" : ""} w-32 py-1.5 inline-block mx-auto text-center text-lg rounded border-2 hover:bg-custom-color12 transition-all bg-custom-color1`}
                    onClick$={handleSubmit}
                >
                    {
                        progress.value
                            ? <div class="animate-spin w-7 aspect-square mx-auto" />
                            : form.ctaText
                    }
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
    </>
})

export default Form
