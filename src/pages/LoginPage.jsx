import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";

const LoginPage = () => {
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
          <div className="bg-[#101010] rounded-3xl p-10 w-[400px] shadow-md lg:w-[40%]">
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
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white rounded-md"
                style={{
                  background:
                    "linear-gradient(90deg, #710101 0%, #c70303 100%)",
                }}
              >
                Login
              </button>
              <button
                type="button"
                className="w-full py-3 text-lg font-semibold text-white rounded-md bg-gradient-to-t from-[#B70000] to-[#510000]"
                
              >
                Sign Up
              </button>
              <a
                href="#"
                className="text-gray-400 hover:underline text-sm mt-2 "
              >
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
