import PostList from "../../components/PostList";
import PostListDto from "../../data/PostListDto";

function PostListPage (){
    let a : PostListDto = {
        title = "askdhfkj",
        content = "kasdjflk",
        id: 0,
        createTime: undefined,
        updateTime: undefined
    }
    return (
        <div>
            <PostList {a}/>
        </div>
    )
}

export default PostListPage;