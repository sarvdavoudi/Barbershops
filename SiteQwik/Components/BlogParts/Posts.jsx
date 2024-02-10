import {
    Pagination,
    Post,
} from 'Shared'

const Posts = ({
    currentLocale,
    localePathPrefix,
    localesEnum,
    posts,
}) => {
    return <>
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-10">
            {
                posts?.data?.map(item => <>
                    <Post
                        item={item}
                        post={posts.data}
                        localePathPrefix={localePathPrefix}
                        currentLocale={currentLocale}
                        localesEnum={localesEnum}
                    />
                </>)
            }
        </div>
        <div class="pb-4 sm:pt-3">
            <Pagination metadata={posts?.metadata} />
        </div>
    </>
}

export default Posts
