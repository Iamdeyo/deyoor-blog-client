import { useParams } from "react-router-dom";
import Editor from "../components/Editor";
import useGetAPost from "../hooks/useGetAPost";
import { Helmet } from "react-helmet";

const EditPost = () => {
  const { slug } = useParams();

  const { data, isLoading } = useGetAPost(slug!);
  return (
    <>
      {data && (
        <>
          <Editor data={data} />
          <Helmet>
            <title>{"Edit | " + data?.title}</title>
          </Helmet>
        </>
      )}
    </>
  );
};

export default EditPost;
