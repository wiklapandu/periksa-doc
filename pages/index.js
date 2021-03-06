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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Periksa Doc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/web/logo.png" />
      </Head>

      <header className="w-full bg-transparent relative z-0 mb-4">
        <div className="w-11/12 mx-auto">
          <div className="absolute -top-64 -left-64 -z-10 inline">
            <Image src={ellipse} alt="ellipse pattern" />
          </div>
          <div className="container md:flex grid grid-cols-2 p-6 place-content-between items-center mx-auto">
            <Link href="/">
              <a>
                <div className="w-24">
                  <Image
                    src={brand}
                    alt="Periksa Doc Brand Logo"
                    style={{ width: "100%" }}
                  />
                </div>
              </a>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">FAQ</a>
                </Link>
              </li>
            </ul>
            <div className="flex">
              <Link href="/login">
                <a className="btn m-2">Login</a>
              </Link>
              <Link href="/">
                <a className="btn btn-primary m-2">Sign Up</a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative mb-5">
        <div className="w-10/12 mx-auto">
          <div className="w-100 grid lg:grid-cols-3 gap-4 grid-cols-1 items-center place-content">
            <div className="col-span-1 relative z-0">
              <h3 className="text-4xl font-medium">
                Simple Consultation <br /> and{" "}
                <span className="text-[#106ac6]">Inexpensive</span>
              </h3>
              <p className="text-gray-500 my-4">
                Periksa doc is here for those of you who are worried about your
                health, but you don&apos;t have much funds for consultation
              </p>
              <div className="inline-block">
                <Link href="/">
                  <a className="btn btn-outline-primary-alt inline-block m-1 md:ml-0">
                    <i className="fa-regular fa-user mr-2"></i>
                    About Us
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-primary-alt inline-block m-1 md:ml-0">
                    <i className="fa-solid fa-phone-volume mr-2"></i>
                    Consultation Now
                  </a>
                </Link>
              </div>
              <div className="absolute -right-20 -top-20 lg:inline hidden animate-lift">
                <Image src={float1} alt="drug icon" />
              </div>
            </div>
            <div className="col-span-2 lg:ml-auto mx-auto lg:mx-0 lg:order-none order-first relative">
              <div className="w-100">
                <Image src={img1} alt="Doctor Image" />
              </div>
              <div className="absolute -bottom-32 -z-10 -right-12 lg:inline hidden">
                <Image src={ellipse} alt="ellipse patern" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mb-7">
        <div className="mx-auto w-10/12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-end">
            <div></div>
            <div className="md:text-right text-gray-500 text-left md:order-none order-last">
              <p>
                Check how your families health is by professional team doctor
                from anyware from all time
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-4xl font-medium">
                We Care About <br />
                Your
                <span className="text-[#106ac6]"> Families</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-3 relative">
        <div className="mx-auto w-10/12">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            <div className="col-span-2">
              <div className="w-100">
                <Image src={img2} alt="img2" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium text-[#106ac6] mt-7 mb-4">
                Believe in Us
              </h5>
              <ul className="ml-3 mb-8">
                <li className="font-medium mb-3">
                  <i className="fa-regular text-[#106ac6] p-2 bg-[#BED7ED] rounded-md fa-calendar"></i>
                  <span className="ml-2">Make own schedule</span>
                </li>
                <li className="font-medium mb-3">
                  <i className="fa-solid fa-trophy text-[#106ac6] p-2 bg-[#BED7ED] rounded-md"></i>
                  <span className="ml-2">Professional doctor</span>
                </li>
                <li className="font-medium mb-3">
                  <i className="fa-regular fa-hand-peace text-[#106ac6] p-2 bg-[#BED7ED] rounded-md"></i>
                  <span className="ml-2">ease to use</span>
                </li>
              </ul>
              <Link href="/">
                <a className="btn btn-primary-alt anim1">
                  Sign Up
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 relative">
        <div className="mx-auto w-10/12 py-8">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center">
            <div className="col-span-2">
              <h5 className="text-xl font-medium text-[#106ac6] mt-7 mb-1">
                About Us
              </h5>
              <h3 className="text-4xl font-medium">
                We Are Here to <span className="text-[#106ac6]">Help</span> You{" "}
                <br className="md:block hidden" />
                to be <span className="text-[#106ac6]">Health</span> and enjoy
                your life
              </h3>
              <p className="text-gray-500 my-6">
                Our goal is to help you live a healthier life and <br /> help
                you make quick decisions
              </p>
              <Link href="/">
                <a className="btn btn-outline-primary-alt anim1">
                  Sign Up
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </Link>
            </div>
            <div className="col-span-1 order-first md:order-none">
              <div className="w-100">
                <Image
                  src={img3}
                  alt="img 3 (zoom image)"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BED7ED]" style={{ minHeight: "50vh" }}>
        <div className="md:w-8/12 w-10/12 bg-[#106AC6] mx-auto -translate-y-9 rounded-md items-center flex justify-center">
          <div className="m-3 flex lg:flex-row flex-col">
            <h5 className="text-white text-4xl mb:mb-0 mb-3">
              Do you want to know About Us?
            </h5>
            <Link href="/">
              <a className="btn bg-white text-[#106AC6] block md:ml-4 text-center">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
        <div className="w-9/12 mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-7">
            <div className="md:col-span-2">
              <h5 className="text-[#106AC6] font-semibold text-xl mb-3">
                About Us
              </h5>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                reprehenderit expedita animi blanditiis veniam facere nihil sed
                voluptatibus officiis culpa!
              </p>
            </div>
            <div>
              <h5 className="text-[#106AC6] font-semibold text-xl mb-3">
                Legal
              </h5>
              <ul className="navbar-group">
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">Terms & Conditions</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">Privacy Policy</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">Terms of use</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#106AC6] font-semibold text-xl mb-3">
                Links
              </h5>
              <ul className="navbar-group">
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">Home</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">About</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">Services</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="/">
                    <a className="text-gray-500">FAQ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#106AC6] font-semibold text-xl mb-3">
                Subscribe
              </h5>
              <form action="" method="post">
                <div className="mb-3 flex xl:flex-row flex-col">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-white p-2 px-3 rounded-md xl:mb-0 mb-3"
                    placeholder="Email address..."
                  />
                  <button type="submit" className="btn btn-primary xl:ml-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://kit.fontawesome.com/75118a0b6e.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
