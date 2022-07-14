import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// ? image
import brand from "../public/img/web/brand.png";
import img1 from "../public/img/web/img1.png";
import img2 from "../public/img/web/img2.png";
import img3 from "../public/img/web/img3.png";
import ellipse from "../public/img/web/ellipse_patern.svg";
import float1 from "../public/img/web/img1_float.png";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Periksa Doc | Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/web/logo.png" />
      </Head>
      <div className="w-screen bg-[#BED7ED]">
        <div className="grid grid-cols-2 place-content-center">
          <div className="flex">
            <div className="my-auto">
              <Image src={img1} style={{ width: "100%" }} alt="image" />
            </div>
          </div>
          <div
            className="bg-white rounded-l-3xl p-8 flex flex-col"
            style={{ minHeight: "100vh" }}
          >
            <div className="my-auto">
              <div className="mb-14 text-gray-800">
                <h3 className="text-4xl font-bold mb-1">Login</h3>
                <span className="text-xl font-normal">
                  Tolong login untuk lanjut
                </span>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-500 outline-[#1480eb] rounded-md delay-100"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Password"
                  className="w-full p-3 border border-gray-500 outline-[#1480eb] rounded-md delay-100"
                />
              </div>
              <div className="mb-3 grid">
                <button
                  type="submit"
                  className="btn btn-primary-alt font-medium"
                >
                  Login
                </button>
              </div>
              <div className="mb-3">
                <span className="block text-gray-500 text-center">
                  Belum punya akun? silahkan daftar sekarang.
                </span>
                <Link href="/sign-up">
                  <a className="text-[#1480eb] text-center block hover:underline">
                    Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
