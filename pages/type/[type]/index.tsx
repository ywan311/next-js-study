import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";


const postDetail = () =>{
    const router = useRouter()
    const { type } = router.query

  return (
    <div>
        <h1>Post : {type}</h1>
    </div>
  )
}

const getServerSideProps : GetServerSideProps = async (context) => {
    const router = useRouter()
    const { type } = router.query
    const data : Response = await axios.get(`http://localhost:4000/${type}`)
    console.log(data);
    return data;
}
interface Response {
    "title": string;
    "detail":string;
}
export default postDetail;