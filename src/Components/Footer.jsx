
const Footer = () => {
  return (
    <div className="py-10 border-t">
        <div className="container font-['poppins']">
            <div className="flex pb-9">
                <div className="w-2/6">
                <img src="logo.png" alt="logo" className="pb-12" />
                <p className="font-normal text-base text-[#9F9F9F] w-[210px]">400 University Drive Suite 200 Coral Gables,</p>
                <span className="font-normal text-base text-[#9F9F9F]">FL 33134 USA</span>
                </div>
                <div className="w-1/6">
                <h4 className="font-medium text-base text-[#9F9F9F] pb-12">Links</h4>
                <ul className="font-medium text-base text-[#000000] leading-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="w-1/6">
                <h4 className="font-medium text-base text-[#9F9F9F] pb-12">Help</h4>
                <ul className="font-medium text-base text-[#000000] leading-10">
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
                </div>
                <div className="w-2/6">
                <h4 className="font-medium text-base text-[#9F9F9F] pb-12">Newsletter</h4>
                <div className="flex gap-3">
                    <input type="email" placeholder="Enter Your Email Address" className=" font-normal text-base text-[#9F9F9F] border-none" />
                    <button className=" underline font-medium text-sm text-[#000000]">SUBSCRIBE</button>
                </div>
                </div>
            </div>
            <div className="border-t pb-9"></div>
            <p className="font-normal text-base text-[#000000] ">2023 furino. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer