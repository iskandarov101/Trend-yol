import { Link } from "react-router-dom";

import RegFootBtn from "../../components/FooterBtn/FooterBtn";

// import MasterCard from '../../assets/images/footer-master-card.png';
// import VizaCard from '../../assets/images/footer-visa-black.png';
// import Troy from '../../assets/images/footer-troy.png';

import './main.scss';
const RegFooter = () => {

  return (
    <>
      <footer>
        <div id="footer-container">
          <div className="footer">
            <div className="footer__wrapper">
              <div >
                <div>
                  <Link className="footer__link" >
                    <RegFootBtn title={"Trendyol"} />
                  </Link>
                  <Link className="footer__link" >
                    <RegFootBtn title={"Biz Kimiz"} />
                  </Link>
                  <Link className="footer__link" >
                    <RegFootBtn title={"Kariyer"} />
                  </Link>
                  <Link className="footer__link" >
                    <RegFootBtn title={"Trendyol'da Satış YapBiz Kimiz"} />
                  </Link>
                  <Link className="footer__link" >
                    <RegFootBtn title={"Kurumsal Hediye Çeki"} />
                  </Link>
                </div>
                <div className="footer-cards">
                  <p>Güvenli Alışveriş</p>
                  <div className="footer-cards__wrapper">
                    <span className="footer-cards__troy"></span>
                    <span className="footer-cards__master"></span>
                    <span className="footer-cards__viza"></span>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <RegFootBtn title={"About Us"} />
                </Link>
                <Link>
                  <RegFootBtn title={"who we are"} />
                </Link>
                <Link>
                  <RegFootBtn title={"Careers"} />
                </Link>
                <Link>
                  <RegFootBtn title={"Contact Us"} />
                </Link>
                <div className="footer-cards__social-wrapper">
                  <p className="footer__wrapper--mediumTitle">Mobil Uygulamalar</p>
                  <div className="footer__wrapper__apps">
                    <Link class="footer__wrapper--socialImage app app-ios" to="http://itunes.apple.com/tr/app/trendyol.com/id524362642?mt=8" target="_blank" rel="noopener"></Link>
                    <Link class="footer__wrapper--socialImage app app-android" to="https://play.google.com/store/apps/details?id=trendyol.com&amp;feature=search_result#?t=W251bGwsMSwyLDEsInRyZW5keW9sLmNvbSJd" rel="noopener"></Link>
                    <Link class="footer__wrapper--socialImage app app-huawei" to="https://appgallery.cloud.huawei.com/ag/n/app/C101645013?source=appshare&amp;subsource=C101645013" rel="noopener"></Link>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <RegFootBtn title={"Kampanyalar"} />
                </Link>
                <Link>
                  <RegFootBtn title={"Aktif Kampanyalar"} />
                </Link>
                <Link>
                  <RegFootBtn title={"Hediye Fikirleri"} />
                </Link>
                <Link>
                  <RegFootBtn title={"Trendyol Fırsatları"} />
                </Link>
              </div>
              <div>
                <Link>
                  <RegFootBtn title={"Yardim"} />
                </Link>
                <Link>
                  <RegFootBtn title={"lorem ipsum"} />
                </Link>
                <Link>
                  <RegFootBtn title={"lorem ipsum"} />
                </Link>
                <Link>
                  <RegFootBtn title={"lorem ipsum"} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bandInfo">
          <div className="bandInfo__wrapper">
            <div className="bandInfo__wrapper__left" id="bandInfo__wrapper__left--link1">
              ©2022 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.
            </div>
            <div className="bandInfo__wrapper__right">
                <div className="bandInfo__wrapper__right--inner">
                  <div className="bandInfo__wrapper__right--list">
                    <Link className="banfInfo__link" id="bandInfo__wrapper__left--link2" to={''} target='_blank'>Kullanım Koşulları</Link>
                  </div>
                  <div>
                    <Link className="banfInfo__link" id="bandInfo__wrapper__left--link3" to={''} target='_blank'>DSM Grup</Link>
                  </div>
                  <div>
                    <Link className="banfInfo__link" id="bandInfo__wrapper__left--link4" to={''} target='_blank'>KVK ve Gizlilik Politikası</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default RegFooter;