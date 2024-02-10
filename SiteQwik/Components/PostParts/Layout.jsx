import {
    component$,
    useContext,
} from '@builder.io/qwik'
import {
    PostContext,
    useCategoryUrl,
} from 'Blog'
import {
    Image,
    LocalizedDate,
} from 'Base'
import {
    Breadcrumb,
    CommentForm,
    Comments,
    RichText,
} from 'Shared'
import { Posts } from 'PostParts'
import {
    CategoryIcon,
    CommentIcon,
    DateIcon,
    ViewPostIcon,
} from 'Svg'

const Layout = component$(({
    breadcrumb,
    comments,
    content,
    currentLocale,
    fields,
    form,
    latestPosts,
    localePathPrefix,
    localesEnum,
    post,
}) => {
    const viewCount = useContext(PostContext)
    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section class="max-w-4xl mx-auto px-5 md:pt-2.5">
            <div class="flex flex-wrap gap-6 pb-3">
                <div class="flex gap-2">
                    <CategoryIcon />
                    <a
                        href={useCategoryUrl(post?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                    >
                        {post.taxonomyEntityHierarchiesCsvsTitlesCsv.slice(1, (post.taxonomyEntityHierarchiesCsvsTitlesCsv.length - 1))}
                    </a>
                </div>
                <div class="flex gap-2">
                    <ViewPostIcon />
                    {viewCount}
                </div>
                <div class="flex gap-2">
                    <CommentIcon />
                    {comments.metadata.totalCount}
                </div>
                <div class="flex gap-2">
                    <DateIcon />
                    <LocalizedDate
                        utcDate={post?.utcDate}
                        localeKey={currentLocale.key}
                        localesEnum={localesEnum}
                    />
                </div>
            </div>
            <Image
                src={post.relatedItems.imageUrl}
                containerClass="w-full"
                alt={post.title}
                priority
            />
            <h1 class="mt-10 md:mt-6 mb-5 text-xl md:text-3xl font-bold">{post.title} </h1>
            <RichText
                content={content}
                class="w-full lg:container mx-auto mb-32 md:mb-16 leading-8 space-y-2 px-1 md:px-0"
                h2="pt-6 pb-1 first:pt-0 font-bold text-[1.5rem]"
                h3="pt-6 pb-1 first:pt-0 font-bold text-[1.5rem]"
                img="py-3 mx-auto"
            />
            <div class="mb-10 sm:mb-12 md:mb-20 lg:mb-20 lg:mt-32 ">
                <Comments
                    comments={comments}
                    currentLocale={currentLocale}
                    localesEnum={localesEnum}
                />
                <CommentForm
                    form={form}
                    comments={comments}
                    fields={fields}
                    currentLocale={currentLocale}
                    localesEnum={localesEnum}
                />
            </div>
        </section>
        <section class="lg:container mx-auto px-5 pb-12">
            <Posts
                currentLocale={currentLocale}
                localePathPrefix={localePathPrefix}
                localesEnum={localesEnum}
                posts={latestPosts}
            />
        </section>
    </>
})

export default Layout
