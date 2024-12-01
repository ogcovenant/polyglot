import { Send } from "iconsax-react"

const page = () => {
  return (
    <div className="bg-black h-full p-2">
      <div className="bg-gradient-to-br from-primary to-secondary w-full h-full rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-semibold">Welcome to Polyglot</h1>
        <p className="text-white mt-3">The Power of AI at your service - Tame the knowledge</p>
        <div className="mt-3 flex items-center bg-primary w-[50%] p-2 rounded-md gap-1 border-[1px]" >
          <input type="text" name="prompt" id="prompt" className="bg-transparent p-2 w-[90%] outline-none text-white" placeholder="What do you need help with"/>
          <button className="w-[10%] bg-secondary flex justify-center rounded-lg p-2"><Send size="26" color="#FFF"/></button>
        </div>
      </div>
    </div>
  )
}

export default page