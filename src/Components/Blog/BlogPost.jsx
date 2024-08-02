
const BlogPost = ({Heading,Date,Image}) => {
  return (
    <div className="py-7 flex gap-3">
      <img src={Image} alt="blog" className="w-20 h-20 rounded-md" />
      <div className="">
        <h2 className="font-Popins font-normal text-base text-[#000000] w-3/4">{Heading}</h2>
        <p className="font-Opensans font-normal text-base text-[#9F9F9F]">{Date}</p>
      </div>
    </div>
  )
}

export default BlogPost
