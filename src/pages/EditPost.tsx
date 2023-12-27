import { useParams } from "react-router-dom";
import Editor from "../components/Editor";
import useGetAPost from "../hooks/useGetAPost";

const EditPost = () => {
  const { slug } = useParams();

  const { data, isLoading } = useGetAPost(slug!);
  return <>{data && <Editor data={data} />}</>;
};

export default EditPost;
