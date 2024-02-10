import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { getPage } from 'Contents'
import { useSeo } from 'Seo'
import { getForm } from 'Forms'
import { Layout } from 'Contact'

const getData = routeLoader$(async props => {
    const [
        page,
        form,
    ] = await useAsync([
        getPage('contact', props),
        getForm('contact', props),
    ])
    return {
        ...page,
        ...form
    }

})

const Index = component$(() => {
    const data = getData().value
    const {
        form,
        fields,
        contactInfo,
        page,
        breadcrumb,
    } = data
    return <>
        <Layout
            breadcrumb={breadcrumb}
            contactInfo={contactInfo}
            fields={fields}
            form={form}
            page={page}
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
