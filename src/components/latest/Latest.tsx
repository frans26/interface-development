import Card from "../card/Card";

import { BLOG_LIST } from "../../constants/blog-list";

const Latest = () => {
  return (
    <section className="py-32">
      <h1 className="px-4 text-[42px] open-sans-light text-center">
        ALL THE LATEST FROM AEG
      </h1>

      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 px-6 sm:px-12 lg:px-36">
        {BLOG_LIST.map((blog) => (
          <Card key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Latest;