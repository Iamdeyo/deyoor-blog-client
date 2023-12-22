const SinglePost = () => {
  return (
    <>
      <h1 className="mt-8 mb-6 leading-[2.375rem] text-[2rem] font-bold text-text-dark md:leading-[3.25rem] md:mb-8 md:mt-12 md:text-[2.75rem]">
        Role-Based Access Control in Nodejs
      </h1>
      <div className="flex gap-3">
        <img
          src="https://miro.medium.com/v2/resize:fill:88:88/1*wXLxYRl3l1N2i_MNrjxCJA.jpeg"
          alt="display photo"
          width="44"
          height="44"
          className="rounded-full"
        />
        <div>
          <p className="leading-6 text-text-dark text-base capitalize">
            {" "}
            name Sharma
          </p>
          <span className="text-text-light text-sm flex items-center">
            <span> 8 min read </span>
            <span className="mx-4 border border-text-light"></span>
            <span className="capitalize"> aug 17 </span>
          </span>
        </div>
      </div>
      <div className="flex gap-3 items-center flex-wrap mt-10 md:border-b md:pb-4">
        <span className="inline-block h-9 rounded-3xl border px-4 leading-8">
          Sport
        </span>
        <span className="inline-block h-9 rounded-3xl border px-4 leading-8">
          Tech
        </span>
      </div>
      <div className="mt-8 w-full aspect-video">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--7jd3HbBV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wb4q92d2nehp9fnjnf0w.png"
          alt="cover photo"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="tiptap"
        dangerouslySetInnerHTML={{
          __html:
            "<h1><strong>Introduction</strong></h1><p>This article will help you set up RBAC i.e Role-Based Access Control in your node application. RBAC allows us to provide permission to users based on their roles. We are often required to provide different roles to users to improve the security of the application.</p><p>Thus, we will be discussing an application with 3 roles for the user — client, moderator and admin. The user with the admin role will have access to a special route which will allow him to change roles of other users as well as view profiles of all the users.</p><h1><strong>Pre-Requisites</strong></h1><p>Following are the list of npm module (along with their versions) that are needed to be installed. By using the following command -</p><p><em>npm i node_module_name@version</em></p>",
        }}
      ></div>
    </>
  );
};

export default SinglePost;
