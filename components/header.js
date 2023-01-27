import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);  
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="flex h-50 justify-between bg-white shadow-md shadow-slate-100 font-bold">
          {/* left-side view */}
          <div className="p-2 flex items-center space-x-6 relative">
            <img className="w-25 h-10" src="/images/Logo.png" />
            <div className="hidden font-alata md:flex md:space-x-6">
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  Browse
                  <div
                    class="flex p-5 min-w-full space-x-10 absolute left-30 bg-white mt-14 
                    opacity-0 invisible group-hover:opacity-100
                    group-hover:visible group-hover:mt-5
                    group-hover:shadow shadow-xl
                    group-hover:rounded-lg
                    transition-all duration-500"
                  >
                    <div className="p-2 space-y-2">
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>

                    {/* <ul class="p-2">
                        <li><a href="" class="mega-sub-item-title">Product category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                        </ul> */}
                  </div>
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  Coded Templates
                  <div
                    class="flex p-5 min-w-full space-x-10 absolute left-50 bg-white mt-14 
                    opacity-0 invisible group-hover:opacity-100
                    group-hover:visible group-hover:mt-5
                    group-hover:shadow shadow-xl
                    group-hover:rounded-lg
                    transition-all duration-500"
                  >
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>

                    {/* <ul class="p-2">
                        <li><a href="" class="mega-sub-item-title">Product category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                        </ul> */}
                  </div>
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  3D Assets
                  <div
                    class="flex p-5 min-w-full space-x-10 absolute left-100 bg-white mt-14 
                    opacity-0 invisible group-hover:opacity-100
                    group-hover:visible group-hover:mt-5
                    group-hover:shadow shadow-xl
                    group-hover:rounded-lg
                    transition-all duration-500"
                  >
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>
                    <div>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        Coded Templates
                      </p>
                      <p className="text-sm  text-zinc-300 hover:text-zinc-800">
                        3D Assets
                      </p>
                    </div>

                    {/* <ul class="p-2">
                        <li><a href="" class="mega-sub-item-title">Product category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                            <li><a href="" class="mega-sub-item">Sub category</a></li>
                        </ul> */}
                  </div>
                </a>
              </Link>
            </div>
          </div>

          {/* right-side view */}
          <div className="hidden p-2 md:flex items-center space-x-4">
            <button
              className="text-sm mr-4 text-zinc-300 bg-slate-700 rounded-full px-6 py-2 
              hover:text-zinc-800 hover:bg-slate-300"
            >
              Login
            </button>
          </div>

          {/* <!-- Hamburger Button --> */}
          <div class="md:hidden">
            <button
              id="menu-btn"
              type="button"
              onClick={() => setNavbar(!navbar)}
              class="z-40 block mr-4 mt-5 hamburger md:hidden focus:outline-none group"
            >
              {/* <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span> */}
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-zinc-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {navbar ? (
          <div
            id="menu"
            class="absolute  top-0 bottom-0 left-0 flex font-semibold flex-col font-alata
              self-end w-full mt-16 space-y-3 bg-white  divide-y 
              text-lg text-zinc-300  md:hidden group-hover:transition-all duration-2000 capitalize"
          >
            <div className="flex flex-col p-14 pb-6 space-y-6 items-center text-center capitalize">
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-500 hover:text-zinc-500 group">
                  Design
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  About
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  License
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  Contact
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  Terms & Conditions
                </a>
              </Link>
              <Link legacyBehavior href="">
                <a className="text-sm  text-zinc-300 hover:text-zinc-800 group">
                  Privacy
                </a>
              </Link>
            </div>
            <div className="flex flex-col justify-center p-10">
              <p className="text-xs text-zinc-200 text-center">
                @CreativesBox, INC
              </p>
              <div className="p-10 flex justify-around">
                <Image
                  src={`/images/Favicon.png`}
                  width={`20`}
                  height={`20`}
                ></Image>
                <Image
                  src={`/images/favicon.ico`}
                  width={`20`}
                  height={`20`}
                ></Image>
                <Image
                  src={`/images/Favicon.png`}
                  width={`20`}
                  height={`20`}
                ></Image>
                <Image
                  src={`/images/favicon.ico`}
                  width={`20`}
                  height={`20`}
                ></Image>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}

export default Header;
