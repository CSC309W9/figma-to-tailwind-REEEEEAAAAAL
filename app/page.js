// app/page.js
export default function Home() {
    return (
        <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
            <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
                <div className="w-full h-full bg-[#eaecd7] rounded-[49px] absolute" />
                <div className="flex items-center justify-center w-full h-full text-[#db4439] text-base font-black font-['Inknut_Antiqua'] leading-[52px] tracking-[0.02em] relative">
                    Click
                </div>
            </div>

            <div className="origin-top-right rotate-[8.64deg] w-[531px] h-[655px] left-[1068px] top-[256px] absolute">
                <div className="w-[531px] h-[655px] left-0 top-0 absolute bg-[#d9d9d9]" />
                <img
                    className="w-[531px] h-[655px] left-0 top-0 absolute object-cover"
                    src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>

            <div className="w-[680px] left-[143px] top-[313px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">
                BlaBla
                <br />
                Coffe!
            </div>
            <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">
                Your NO.1 Choice{" "}
            </div>
            <div className="left-[390px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Menu
            </div>
            <div className="left-[64px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Home
            </div>
            <div className="left-[716px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Login
            </div>
            <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white" />
            <div className="left-[124px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
                Contact Information
            </div>
            <div className="left-[794px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
                Customery Policy
            </div>
            <div className="left-[1450px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
                Be our partner today
            </div>
        </div>
    );
}
