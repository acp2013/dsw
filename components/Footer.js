const Footer = () => {
    return (
      // <div class='container'>
        <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="span4">
          <div class="widget">
            <h5>Produk & Layanan</h5>
            <ul class="regular">
              <li><a href="#">Gardening and Suplier</a></li>
              <li><a href="#">Contractor</a></li>
              <li><a href="#">Land Scape</a></li>
              <li><a href="#">Broadcast Streaming</a></li>
              <li><a href="#">E-Library</a></li>
            </ul>
          </div>
        </div>
        <div class="span4">
          <div class="widget">
            <h5>Solusi</h5>
            <ul class="regular">
              <li><a href="#">Layanan Asuransi</a></li>
              <li><a href="#">Pemerintahan</a></li>
              <li><a href="#">Teknologi Komunikasi</a></li>
              <li><a href="#">Manufaktur</a></li>
              <li><a href="#">Jasa</a></li>
            </ul>
          </div>
        </div>
        <div class="span4">
          <div class="widget">
            {/* <!-- logo --> */}
            <a class="brand logo" href="index.html">
							<img src="assets/img/Logo-DWS-Dark.png" alt=""/>
						</a>
            {/* <!-- end logo --> */}
            <address>
							<strong>Jl. Kavling UI Timur II E4</strong><br/>
							 Tanah Baru, Kecamatan Beiji<br/>
							 Kota Depok, Jawa Barat 16426<br/>
							<abbr title="Phone">Phone:</abbr> 0813-1421-2213
						</address>
          </div>
        </div>
      </div>
    </div>
    <div class="verybottom">
      <div class="container">
        <div class="row">
          <div class="span6">
            <p>
              &copy; DSW Corp - All right reserved
            </p>
          </div>
          <div class="span6">
            <div class="credits">
              {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Serenity
              --> */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
      // </div>
    );
  };
  
  export default Footer;