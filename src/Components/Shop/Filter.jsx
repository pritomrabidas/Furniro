import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return <section className="bg-[#F9F1E7] py-8">
    <div className="container">
        <div className="flex font-Popins justify-between items-center">
        <div className=" flex text-[#000000] font-normal">
            <p className="pr-4 pt-1.5"><HiAdjustmentsHorizontal/></p>
            <p className="text-lg pr-8 border-r-2 border-[#9F9F9F]">Filter</p>
            <p className="text-base pl-8">Showing 1–16 of 32 results</p>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-4 items-center">
            <label className="font-normal text-lg text-[#000000]">Show</label>
            <input type="number" value="16" className="outline-none w-14 h-12 text-center rounded " />
          </div>
          <div className="flex gap-4 items-center">
            <label className="font-normal text-lg text-[#000000]">Short by</label>
            <select className="outline-none  py-3 px-8 rounded-md">
              <option value="default" className="">Defult</option>
            </select>
          </div>
        </div>
        </div>
    </div>
  </section>;
};

export default Filter;
