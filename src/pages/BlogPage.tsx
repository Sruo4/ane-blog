import React from "react";
import { MDXContent } from "@/components/MDXcontent";
import Example from "@/content/Example.mdx";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white rounded-lg p-11 flex flex-row justify-center">
      <div>
        THERE WILL BE A LOT OF ARTICLES HERE
        <MDXContent Content={Example} />
      </div>
    </div>
  );
};

export default BlogPage;
