
const BlogCard = ({title, content}) => {
  return (
    <div className="border-[1.3px] sm:max-w-[25rem] w-full border-neutral-600 rounded-xl">
      <div className="px-4 py-6">
        <div className="">
          <h1 className="text-lg md:text-xl font-semibold text-blue-500">
            👉🏻 {title}
          </h1>
          <p className="text-base mt-2 relative after:top-0 after:left-0 text-neutral-300 line-clamp-5 after:content-[''] after:w-full after:h-full after:absolute after:bg-gradient-to-b after:from-black/0 after:via-[#0d142051] after:to-[#0D1420]">
            {content}
          </p>
          <div className="w-full rounded-lg mt-4">
            <button className="py-2 px-4 w-full bg-blue-500 rounded-lg text-base">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
