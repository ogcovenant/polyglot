import { Flash } from "iconsax-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div className="bg-primary w-[50%] p-6 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <p className="text-white text-xl font-semibold">Register to</p>
          <div className="flex items-center gap-2 bg-black p-3 px-5 rounded-lg w-fit">
            <Flash size="32" color="#FFF" variant="Bold" />
            <p className="text-white text-xl font-semibold">Polyglot</p>
          </div>
        </div>
        <div className="mt-5 ">
            <form className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-1 w-[80%]">
                    <label htmlFor="email" className="text-white">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter a valid email" className="p-3 outline-none rounded-md text-white bg-black"/>
                </div>
                <div className="flex flex-col gap-1 w-[80%]">
                    <label htmlFor="password" className="text-white">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter a password" className="p-3 outline-none rounded-md text-white bg-black"/>
                </div>
                <div className="flex flex-col gap-1 w-[80%]">
                    <label htmlFor="cPassword" className="text-white">Confirm Password</label>
                    <input type="password" id="cPassword" name="cPassword" placeholder="Enter a password" className="p-3 outline-none rounded-md text-white bg-black"/>
                </div>
                <button type="submit" className="w-[80%] bg-secondary text-white font-semibold p-3 rounded-md">Continue</button>
            </form>
        </div>
        <p className="mt-3 text-white">Already have an account? <Link href="/login" className="text-secondary">Log in</Link></p>
      </div>
    </div>
  );
};

export default page;
