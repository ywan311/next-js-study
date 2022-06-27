import PostListDto from "../data/PostListDto"

const PostList = (parameter: PostListDto[]) => {
    console.log(parameter);

    return (
        parameter.map( o => postListElement(o))
    )

}
function postListElement(props : PostListDto) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default PostList