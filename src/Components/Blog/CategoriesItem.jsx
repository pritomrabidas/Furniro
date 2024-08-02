
const CategoriesItem = ({Heading,Number}) => {
  return (
    <div className="pb-10">
      <ul className="flex justify-between font-Opensans font-normal text-base text-[#9F9F9F]">
          <li>{Heading}</li>
          <li>{Number}</li>
        </ul>
    </div>
  )
}

export default CategoriesItem
