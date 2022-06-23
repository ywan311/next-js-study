import { useRouter } from "../../../../node_modules/next/router"

const postDetail = () =>{
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
        <h1>Post : {id}</h1>
    </div>
  )
}
export default postDetail;