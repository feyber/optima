import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Optima Glass Indonesia | Distributor Supplier Kaca Siap Kirim Seluruh
          Indonesia{" "}
        </title>
        <meta
          name="description"
          content="Optima Glass adalah supplier kaca terbaik yang menyediakan produk kaca berkualitas, terlengkap, dan termurah. Kami dapat memproses berbagai jenis kaca , mulai dari kaca tempered, laminated, dan Double Glass. Kami juga menyediakan berbagai kaca, mulai dari Clear Glass, Stopsol , Sunergy, dan T-Sunlux. Dengan pengalaman expert sejak 2017 dan telah dipercaya ratusan mitra kontraktor dan aplikator kaca, kami selalu berusaha memberikan yang terbaik untuk memenuhi kebutuhan kaca pada proyek anda. Klien kami berasal dari berbagai kota di Indonesia dan kami selalu siap untuk mensupply untuk proyek di luar Jabodetabek."
        />
        <meta
          name="keywords"
          content="Suplier kaca indonesia, Supplier Kaca Indonesia, Distributor Kaca Indonesia, Supplier Kaca Jabodetabek, Distributor Kaca Jabodetabek, Tempered Glass (Kaca Tempered), Insulating Glass (Kaca Isolasi), Laminated Glass (Kaca Laminasi), Back-Painted Glass (Kaca cetak), Wired Glass (Kaca kawat), Bulletproof Glass (Kaca anti peluru), Bending Annealed Glass (Kaca Lengkung), INDOFLOAT, PANASAP, STOPSOL, SUNERGY, T-SUNLUX, STOPRAY, MIRROR, DECOMIRROR, LACOBEL, Kaca Interior Gedung, Kaca Eksterior Gedung."
        />
        <meta name="author" content="PT Optima Berkat Sinergi" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <header className=" h-24 shadow-lg -mt-2 fixed w-full z-10 top-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
        <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
          <div>
            <a href="#">
              <Image
                src="/img/logo_optima.png"
                alt="Logo Optima"
                width={200}
                height={100}
              />
            </a>
          </div>
          <nav className="flex justify-around w-1/2 items-center font-bold tracking-wide text-gray-900">
            <a
              href="#"
              className=" py-2 px-4 hover:border-b-2 border-gray-800 duration-100"
            >
              HOME
            </a>
            <a
              href="#product"
              className=" py-2 px-4 hover:border-b-2  border-gray-800 duration-100"
            >
              PRODUCT
            </a>
            <a
              href="#processed"
              className=" py-2 px-4 hover:border-b-2  border-gray-800 duration-100"
            >
              PROCESSED
            </a>
            <a
              href="#projlist"
              className=" py-2 px-4 mr-16 hover:border-b-2  border-gray-800 duration-100"
            >
              PROJECTS
            </a>
            <div className="hover:-translate-x-2 duration-700">
              <a
                href="#contact"
                className=" py-2 px-2 bg-gradient-to-r from-blue-800 to-blue-700 rounded text-gray-50"
              >
                CONTACT
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="">
        {/* floating button */}
        <div>
          <div className="group drop-shadow-lg z-50 fixed right-0 bottom-32 my-8 justify-center items-center order-2 hidden md:block">
            <a href="https://wa.me/62895700721023">
              <div className="flex py-2 px-3 bg-green-800 group-hover:bg-green-700 rounded-l-full gap-2 items-center">
                <Image
                  src="/img/wa.png"
                  alt="wa"
                  width="35"
                  height="35"
                  className="drop-shadow-lg group-hover:-rotate-12 group-hover:translate-x-4 duration-300"
                />
              </div>
            </a>
          </div>
          <a
            href="https://wa.me/62895707823311"
            className="group drop-shadow-lg z-50 fixed right-0 bottom-16 my-8 justify-center items-center order-2 hidden md:block"
          >
            <div className="flex py-2 px-3 bg-green-800 group-hover:bg-green-700 rounded-l-full gap-2 items-center">
              <Image
                src="/img/wa.png"
                alt="wa"
                width="35"
                height="35"
                className="drop-shadow-lg group-hover:-rotate-12 group-hover:translate-x-4 duration-300"
              />
            </div>
          </a>

          <a
            href="https://www.tokopedia.com/optimaglass"
            className="group drop-shadow-lg z-50 fixed right-0 bottom-0 my-8 justify-center items-center order-2 hidden md:block"
          >
            <div className="flex py-2 px-3 bg-gray-100 group-hover:bg-green-50 rounded-l-full gap-2 items-center">
              <Image
                src="/img/tokopedia.png"
                alt="wa"
                width="35"
                height="35"
                className="drop-shadow group-hover:-rotate-12 group-hover:translate-x-4 duration-300"
              />
            </div>
          </a>
        </div>

        <section className="drop-shadow flex bg-gray-100 min-h-screen items-center justify-start bg-[url('/img/13.jpg')] bg-center bg-cover">
          <div className="w-[650px] ml-24 bg-blue-500 p-8 mt-20 rounded text-gray-900  shadow-lg hover:translate-x-2 hover:-translate-y-2 duration-500 border border-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h1 className="text-[42px] -mb-4 font-extrabold ">
              SUPPLIER KACA TERBAIK
            </h1>
            <h1 className="text-[42px] mb-2 font-extrabold ">DI INDONESIA</h1>
            <p className="text-justify tracking-wide text-xl mb-8">
              Optima Glass adalah distributor dan penyedia kaca dengan
              pengalaman lebih dari 5 tahun. Kami telah dipercaya oleh pelanggan
              menjadi top supplier yang menyediakan material kaca untuk proyek
              gedung, kontraktor, dan arsitek. Kami menyediakan produk kaca
              unggulan yang siap dikirim keseluruh kota di Indonesia. Kepuasan
              pelanggan adalah hal utama bagi kami.
            </p>
            <a
              href="#product"
              className="bg-gradient-to-r from-blue-800 to-blue-700 text-white py-3 px-4 rounded mr-2"
            >
              SEE OUR PRODUCT
            </a>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto font-bold bg-[url('/img/12.jpg')] bg-center bg-cover"
        >
          <div className="bg-sky-200 text-4xl h-[450px] bg-opacity-60 drop-shadow shadow-lg  py-8">
            <h2 className="text-5xl mx-auto text-center mb-10 tracking-widest w-10/12 mt-16">
              MENGAPA MEMILIH PRODUK KACA TEMPERED OPTIMA GLASS?
            </h2>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-3 items-center justify-center ">
              <div className="h-[150px] py-4 flex flex-col justify-center items-center bg-gray-50 border border-gray-200 hover:-translate-y-4 duration-500 shadow-lg rounded drop-shadow-md tracking-widest bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
                <h1 className="mb-3 text-3xl">TERLENGKAP</h1>
                <p className="text-lg text-center font-thin">
                  Berbagai macam produk kaca unggulam bisa anda beli disini.
                </p>
              </div>
              <div className="h-[150px] py-4 flex flex-col justify-center items-center bg-gray-50 border border-gray-200 hover:-translate-y-4 duration-500 shadow-lg rounded drop-shadow-md tracking-widest bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
                <h1 className="mb-3 text-3xl">KUALITAS No.1</h1>
                <p className="text-lg text-center font-thin">
                  Kualitas produk kaca kami tidak perlu diragukan lagi.
                </p>
              </div>
              <div className="h-[150px] py-4 flex flex-col justify-center items-center bg-gray-50 border border-gray-200 hover:-translate-y-4 duration-500 shadow-lg rounded drop-shadow-md tracking-widest bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
                <h1 className="mb-3 text-3xl">TERMURAH</h1>
                <p className="text-lg text-center font-thin">
                  Service terbaik dengan harga yang kompeten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </>
  );
}
