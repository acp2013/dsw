import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main class='d-flex flex-column min-vh-100'>
      <Head>
        <title>DSW Corp - Contractor, Land scape , Gardening and Suplier, Live Streaming Boardcasting</title>
        <meta name='description' content='DSW Corp - PT Dermawan Setia Wibawa adalah perusahaan yang bergerak pengadaan barang | live streaming | perangkat komputer | perangkat percetakan | printer & scanner | laptop | video editing | foto editing | bibit tumbuhan | bibit pohon | bibit buah-buahan'/>
        <meta name='author' content=""/>
        <meta name='keywords' content='pengadaan barang jasa pemerintah,pengadaan barang/jasa pemerintah adalah,pajak pengadaan barang pemerintah,pengadaan barang/jasa pemerintah secara elektronik,prosedur pengadaan barang pemerintah,pengadaan barang di pemerintahan,lelang pengadaan barang pemerintah,pengadaan barang dan jasa pemerintah adalah,lembaga kebijakan pengadaan barang/jasa pemerintah adalah,pengadaan barang dan jasa,pengadaan barang jasa pemerintah,pengadaan barang/jasa pemerintah adalah,pajak pengadaan barang pemerintah,pengadaan barang/jasa pemerintah secara elektronik,prosedur pengadaan barang pemerintah,pengadaan barang di pemerintahan,lelang pengadaan barang pemerintah,pengadaan barang dan jasa pemerintah adalah,lembaga kebijakan pengadaan barang/jasa pemerintah adalah,pengadaan barang dan jasa'/>
        <link rel='icon' href='/assets/ico/favicon-dws.ico' />
      </Head>
      <Header />
      <section id="intro">
    <div class="jumbotron masthead">
      <div class="container">
        {/* <!-- slider navigation --> */}
        <div class="sequence-nav">
          <div class="prev">
            <span></span>
          </div>
          <div class="next">
            <span></span>
          </div>
        </div>
        {/* <!-- end slider navigation --> */}
        <div class="row">
          <div class="span12">
            <div id="slider_holder">
              <div id="sequence">
                <ul>
                  {/* <!-- Layer 1 --> */}
                  <li>
                    <div class="info animate-in">
                      <h2>E-Library - SLIMS</h2>
                      <br/>
                      <h3>Library Management System</h3>
                      <p>
                        Sistem automasi perpustakaan sumber terbuka (open source) berbasis web yang pertama kali dikembangkan dan digunakan oleh Perpustakan Kemendikbud. Aplikasi ini digunakan untuk pengelolaan koleksi tercetak dan terekam yang ada di perpustakaan.
                      </p>
                      {/* <!-- <a class="btn btn-success" href="#">Learn more &raquo;</a> --> */}
                    </div>
                    <img class="slider_img animate-in" src="assets/img/slides/sequence/elibrary.png" alt=""/>
                  </li>
                  {/* <!-- Layer 2 --> */}
                  <li>
                    <div class="info">
                      <h2>Broadcasting Streaming</h2>
                      <br/>
                      <h3>Jasa Layanan Streaming Youtube, Zoom dan Platform Lain</h3>
                      <p>
                        Solusi jasa live streaming untuk mengadakan event virtual dan meyiarkannya dengan platform streaming seperti youtube, facebook, instagram atau zoom. Jasa Live Streaming adalah solusi yang terbaik, bagi Anda yang akan mengabadikan momen spesial, atau event virtual Anda. Setiap acara yang spesial yang tidak dilakukan setiap harinya tentunya menjadi sesuatu yang sayang untuk dilupakan. Anda senantiasa berupaya untuk tetap dapat menyimpan momen itu dalam sebuah dokumentasi video.
                      </p>
                      {/* <!-- <a class="btn btn-success" href="#">Learn more &raquo;</a> --> */}
                    </div>
                    <img class="slider_img" src="assets/img/slides/sequence/broadcasting.jpeg" alt=""/>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Sequence Slider::END--> */}
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* <div class='px-4 py-5 my-5 text-center flex-grow-1'>
        <h1 class='display-5 fw-bold'>Next.js + Bootstrap ❤️</h1>
        <div class='col-lg-6 mx-auto'>
          <p class='lead mb-4'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' class='btn btn-primary btn-lg px-4 gap-3'>
              Primary button
            </button>
            <button
              type='button'
              class='btn btn-outline-secondary btn-lg px-4'
            >
              Secondary
            </button>
          </div>
        </div>
      </div> */}
      <Footer />
    </main>
  );
}