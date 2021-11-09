import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact(){
    return(
    <main class='d-flex flex-column min-vh-100'>
        <Head>
            <title>DSW Corp - Contractor, Land scape , Gardening and Suplier, Live Streaming Boardcasting</title>
            <meta name='description' content='DSW Corp - PT Dermawan Setia Wibawa adalah perusahaan yang bergerak pengadaan barang | live streaming | perangkat komputer | perangkat percetakan | printer & scanner | laptop | video editing | foto editing | bibit tumbuhan | bibit pohon | bibit buah-buahan'/>
            <meta name='author' content=""/>
            <meta name='keywords' content='pengadaan barang jasa pemerintah,pengadaan barang/jasa pemerintah adalah,pajak pengadaan barang pemerintah,pengadaan barang/jasa pemerintah secara elektronik,prosedur pengadaan barang pemerintah,pengadaan barang di pemerintahan,lelang pengadaan barang pemerintah,pengadaan barang dan jasa pemerintah adalah,lembaga kebijakan pengadaan barang/jasa pemerintah adalah,pengadaan barang dan jasa,pengadaan barang jasa pemerintah,pengadaan barang/jasa pemerintah adalah,pajak pengadaan barang pemerintah,pengadaan barang/jasa pemerintah secara elektronik,prosedur pengadaan barang pemerintah,pengadaan barang di pemerintahan,lelang pengadaan barang pemerintah,pengadaan barang dan jasa pemerintah adalah,lembaga kebijakan pengadaan barang/jasa pemerintah adalah,pengadaan barang dan jasa'/>
            <link rel='icon' href='/assets/ico/favicon-dws.ico' />
        </Head>
        <Header />

        <Footer />
    </main>

    );
}