import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const RegisterPage = () => {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="relative z-50">
          <Header />
        </div>
        <img
          src="/carbgcon.png"
          alt="bgImage"
          className="absolute top-0 lg:-top-10 z-10 overflow-hidden w-full h-auto object-cover opacity-50"
        />
        <div className="flex justify-center items-center min-h-screen ">
          <div className="bg-[#101010] rounded-3xl p-10 w-[430px] shadow-md lg:w-[40%]">
            <form className="flex flex-col space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#2c2c2c] text-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-[#2c2c2c] text-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Name"
                className="bg-[#2c2c2c] text-gray-300 p-4 rounded-md outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
              />
              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Date of Birth
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="DD"
                    maxLength={2}
                    className="bg-[#2c2c2c] text-gray-300 p-3 rounded-md w-[60px] text-center placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="bg-[#2c2c2c] text-gray-300 p-3 rounded-md w-[60px] text-center placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                    className="bg-[#2c2c2c] text-gray-300 p-3 rounded-md w-[90px] text-center placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white rounded-md mt-5 bg-gradient-to-t from-[#B70000] to-[#510000]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
