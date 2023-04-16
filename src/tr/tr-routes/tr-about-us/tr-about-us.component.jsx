import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import "./tr-about-us.style.scss";
import { ReactComponent as Check } from "../../../assets/check-2.svg";
const TrAboutUs = () => {
  const [n, setN] = useState(0);
  const galleryRef = useRef();
  const svgRight = useRef();
  const svgLeft = useRef();
  const modal = useRef();
  const modalImage = useRef();
  const overlay = useRef();
  const svgIcon = (num) => {
    switch (num) {
      case 10:
        svgRight.current.style.fill = "#000";
        break;
      case 1:
        svgLeft.current.style.fill = "#000";
        svgRight.current.style.fill = "#fff";
        break;
      default:
        svgRight.current.style.fill = "#fff";
        svgLeft.current.style.fill = "#fff";
        break;
    }
  };
  const openModal = (e) => {
    if (e.target.localName === "img") {
      let num = parseInt(e.target.id);
      setN(num);
      modal.current.classList.remove("hidden");
      overlay.current.classList.remove("hidden");
      modalImage.current.style.backgroundImage = `url(${e.target.src})`;
      svgIcon(num);
    }
  };
  const modalToRight = () => {
    if (n < 10) {
      let num = n + 1;
      setN(num);
      modalImage.current.style.backgroundImage = `url(${
        galleryRef.current.childNodes[num - 1]?.src
      })`;
      svgIcon(num);
    }
  };
  const modalToLeft = () => {
    if (n > 1) {
      let num = parseInt(n) - 1;
      setN(num);
      modalImage.current.style.backgroundImage = `url(${
        galleryRef.current.childNodes[num - 1].src
      })`;
      svgIcon(num);
    }
  };
  const closeModal = () => {
    modal.current.classList.add("hidden");
    overlay.current.classList.add("hidden");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const eventListenerFunc = (e) => {
      if (e.key === "ArrowRight") {
        modalToRight();
      } else if (e.key === "ArrowLeft") {
        modalToLeft();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", eventListenerFunc);
    return () => window.removeEventListener("keydown", eventListenerFunc);
  });
  return (
    <Fragment>
      <div className="about-us">
        <div className="about-wrap">
          <div className="about-container-1">
            <div className="about-header">KLİNİĞİMİZ</div>
            <div className="about-us-gallery">
              <div
                className="about-us-gallery-container"
                ref={galleryRef}
                onClick={openModal}
              >
                <img
                  id="1"
                  width="123"
                  height="183"
                  alt="clinic"
                  src={require("../../../assets/clinic-1.jpg")}
                />
                <img
                  id="2"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-2.jpg")}
                />
                <img
                  id="3"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-3.jpg")}
                />
                <img
                  id="4"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-4.jpg")}
                />
                <img
                  id="5"
                  width="276"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-5.jpg")}
                />
                <img
                  id="6"
                  width="138"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-6.jpg")}
                />
                <img
                  id="7"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-7.jpg")}
                />
                <img
                  id="8"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-8.jpg")}
                />
                <img
                  id="9"
                  width="275"
                  height="184"
                  alt="clinic"
                  src={require("../../../assets/clinic-9.jpg")}
                />
                <img
                  id="10"
                  width="150"
                  height="200"
                  alt="clinic"
                  src={require("../../../assets/clinic-10.jpg")}
                />
              </div>
            </div>
          </div>
          <div className="about-container-2">
            <div className="about-header">TAKIMIMIZ</div>
            <div className="about-us-team">
              <div className="about-team-wrap">
                <h3 className="about-team-header">Ahmet Mert Nalbantoğlu</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Periodontology</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      Hacettepe Üniversitesi Diş Hekimliği Fakültesi /
                      Cumhuriyet Üniversitesi Diş Hekimliği Fakültesi
                      Periodontoloji Anabilim Dalı
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Diş Eti Hastalığı Tedavisi / Ameliyatsız Periodontal
                      Tedavi / Lazer Tedavisi / Cerrahi Periodontal Tedavi /
                      Kemik Greftleme ve Periodontal Doku Rejenerasyonu /
                      Periodontal Bakım / Tekrar Sakız Tedavisi / Ağız Hijyeni /
                      Hava Akışı Tedavisi
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Deniz Yanık</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Endodonti</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      İstanbul Üniversitesi Diş Hekimliği Fakültesi / Akdeniz
                      Üniversitesi Diş Hekimliği Fakültesi Endodonti Anabilim
                      Dalı
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Vital ve Devital Dişlerin Kanal Tedavisi / Tekrar Tedavisi
                      / Kronik Apikal Lezyonların Tedavisi /
                      Endodontik-Periyodonal Lezyonlu Dişlerin Tedavisi /
                      Devital Diş Beyazlatma / Vital Diş Beyazlatma / İç-Dış Kök
                      Rezorpsiyon Tedavisi / Anatomik Çeşitlilikteki Dişlerin
                      Tedavisi / Diş Travma Tedavisi / Lazer Destekli Endodontik
                      Tedaviler
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Burak Kale</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Ortodonti</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      Akdeniz Üniversitesi Diş Hekimliği Fakültesi – Ortodonti
                      (PhD) – İstanbul Üniversitesi, Diş Hekimliği Fakültesi
                      (DDS)
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Sınıf I, II ve III Maloklüzyon / Hızlı Maksiller
                      Genişletme-Alt RAMEC / Geçici Ankraj Cihazları / Titanyum
                      Mini Plakalar / Ortognatik Cerrahi / Ortodontik Diş
                      Hareketini Hızlandıran / Şeffaf Hizalayıcılar (Invisalign)
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Beyza Ballı Akgöl</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Pedodonti</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      İstanbul Üniversitesi Diş Hekimliği Fakültesi / İstanbul
                      Üniversitesi Çocuk Diş Hekimliği Anabilim Dalı
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Koruyucu Uygulamalar / Fissur Sealents / Florür Uygulaması
                      / Ekstraksiyon / Dolgular / Vital Pulp Tedavileri / Vital
                      ve Devital Dişlerin Kanal Tedavisi / Dental Travma
                      Tedavisi / Uzay Bakımcılar / Pediatrik Kuronlar / Sedasyon
                      ve Genel Anestezi Altında Diş Tedavileri
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Ramazan Köymen</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Ağız Diş ve Çene Cerrahisi</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      Gazi Üniversitesi, Diş Hekimliği Fakültesi / Gülhane
                      Askeri Tıp Akademisi, Diş Hekimliği Bilimleri Merkezi,
                      Ağız, Diş, Çene Hastalıkları ve Cerrahisi AD. –ANKARA /
                      Gülhane Askeri Tıp Akademisi, Diş Hekimliği Bilimleri
                      Merkezi, Ağız, Diş, Çene Hastalıkları ve Cerrahisi AD.
                      –ANKARA / Gülhane Askeri Tıp Akademisi, Diş Hekimliği
                      Bilimleri Merkezi, Ağız, Diş, Çene Hastalıkları ve
                      Cerrahisi AD / Gülhane Askeri Tıp Akademisi Diş Hekimliği
                      Bilimleri Merkezi, Ağız, Diş, Çene Hastalıkları ve
                      Cerrahisi Ana Bilim Dalı /Antalya Bilim Üniversitesi, Ağız
                      Diş ve Çene Cerrahisi Ana Bilim Dalı
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Dental implantlar / Minimal invaziv implant uygulamaları
                      Çenelerdeki asimetriler ve Ortognatik Cerrahi /
                      Temporamanbibular eklem rahatsızlıkları ve tedavisi / Çene
                      kırıkları ve tedavileri / Çene kistleri ve tedavileri /
                      preprotetik cerrahi tedavileri / Sinir yaralanmaları ve
                      tedavileri
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Kerem Yılmaz</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Protez</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      Gazi Üniversitesi Diş Hekimliği Fakültesi / Ankara
                      Üniversitesi Diş Hekimliği Fakültesi – Protetik Diş
                      Tedavisi Anabilim Dalı​
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Estetik Diş Hekimliği / İmplant Diş Hekimliği / Hareketli
                      ve Sabit Protezler, Tam Seramik / Metal bazlı seramik /
                      Laminat / Inley-Onlay / Kısmi Adeziv Fiber ve Post Core
                      Tabanlı Protez Kuron ve Köprüler / Gülüş Tasarımı /
                      Aşınmış Diş Tedavileri / Oklüzal Ateller / Yumuşak ve Sert
                      Liner Uygulamaları, CAD/CAM Protezler / Üst Protezler /
                      Teleskopik Protezler.
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-team-wrap">
                <h3 className="about-team-header">Seher KAYA</h3>
                <div className="about-team-container">
                  <div className="about-team-row-1">
                    <h4>Uzmanlık</h4>
                    <div>Restoratif ve Operatif Diş Hekimliği</div>
                  </div>
                  <div className="about-team-row-2">
                    <h4>Derece</h4>
                    <div>
                      Süleyman Demirel Üniversitesi, Diş Hekimliği Fakültesi,
                      Cumhuriyet Üniversitesi, Diş Hekimliği Fakültesi,
                      Restoratif ve Operatif Diş Hekimliği Anabilim Dalı.
                    </div>
                  </div>
                  <div className="about-team-row-3">
                    <h4>Eğitim</h4>
                    <div>
                      Estetik Diş Hekimliği / Beyazlatma / Kompozit
                      Restorasyonlar Dolgular / Kompozit Laminat Kaplamalar /
                      Seramik Laminat Kaplamalar / Gülümse Tasarımı / Inley -
                      Onley / Kanal Tedavisi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-container-3">
            <div className="about-header">TEKNOLOJİMİZ</div>
            <div className="about-tech-wrap">
              <div className="about-tech-container">
                <div>Straumann</div>
                <div>3M</div>
                <div>Invisiling</div>
                <div>Vita</div>
                <div>E-max</div>
                <div>Zirconium</div>
                <div>Dentsply-Sirona</div>
                <div>Astra</div>
              </div>
              <div className="about-tech-container-2">
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>ORTHOPHOS SL 3D</h3>
                    <div>
                      Işık dönüşümünü atlayan ve dolayısıyla daha fazla görüntü
                      bilgisi sağlayan DCS (Doğrudan Dönüştürme Sensörü)
                      teknolojisi sayesinde, eşsiz keskinlikte görüntüler elde
                      edilmektedir. Net katman teknolojisi otomatik olarak
                      panoramik eğriyi hastanın anatomik özelliklerine uyarlar
                      ve böylece tüm çenenin daima net katmanda kalmasını
                      sağlar.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>ORTHOPHOS SL 2D</h3>
                    <div>
                      Oklüzal ısırma bloğu ve sezgisel EasyPad ile otomatik
                      konumlandırma stabilite sağlar Bitewing (ısırtma), sinüs
                      veya Sefalometri görüntüleri için, sol veya sağ
                      sefalometri kolları opsiyonel olarak herhangi bir zamanda
                      uyarlanabilir.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>HELIODENT PLUS</h3>
                    <div>
                      Heliodent Plus, Sensörler, görüntüleme plakaları veya film
                      için doğru ayarları hataya olanak bırakmadan sağlayan
                      medya dedektörü gibi akıllı aletler veya aralarından seçim
                      yapabilecen farklı ünite kontrol opsiyonları, içeren çok
                      yönlü ve akıllı bir ünite tasarımı sunar.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>PERIAPICAL XRAY</h3>
                    <div>
                      En yaygın diş hastalıklarının teşhisine yardımcı olmak
                      için hayati bilgiler sağlayarak dişlerin tüm kronunu ve
                      kökünü gösterir; özellikle diş çürüğü, periodontal kemik
                      kaybı ve diş eti hastalığını. Restorasyonların durumu, diş
                      taşı veya tartar varlığı, gömülü dişler, kırık diş
                      parçaları, diş ve kemik anatomisindeki varyasyonlar gibi
                      ek önemli bulgular da tespit edilebilir.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SIRONA XIOS SCAN</h3>
                    <div>
                      Xios Scan, daha iyi, daha güvenli ve daha hızlı bir
                      ağıziçi teşhis için röntgen üniteleri ve yazılımıyla
                      sorunsuz bir şekilde çalışır.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>3M ESPE ELİPAR</h3>
                    <div>
                      3M Espe Elipar yüksek performanslı LED ışıklı
                      polimerizasyon cihazı sayesinde, restorasyonlarımızın
                      -merkezden çevreye ve yüzeyden kavital diplere- derin ve
                      eş oranlı bir biçimde gerçekleşmesini sağlar.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SİROLASER BLUE</h3>
                    <div>
                      970-nm diyot periodontoloji ve endodonti alanlarında
                      bakteri seviyelerini azaltmak için kullanılır.
                      Komplikasyonsuz iyileşmeyi mümkün kıldığı ve operasyon
                      sonrası yara ağrısını azalttığı için hastalarımızın
                      memnuniyetini sağlanmaktadır. Sütür kullanımı ihtiyacını
                      genellikle ortadan kaldırır ve bu sayede cerrahi yaraların
                      çoğunlukla iz kalmadan iyileşmesini sağlar. Sağladığı bir
                      diğer avantaj da endodonti, periodonti ya da cerrahi
                      tedavi sonrasında antibiyotik kullanımı gereksinimi de
                      ortadan kaldırabilmesidir.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>AIRFLOW</h3>
                    <div>
                      Airflow aleti jet spreyle diş yüzeyindeki siyah plağı
                      temizleyerek diş renginin 1-2 ton daha açılmasını sağlar.
                      Bu sistem ile en zor bölgeleri temizlemek mümkündür. Diş
                      eti cepleri dahil 10 mm.ye kadar temizler.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SİRONA CEREC MC XL</h3>
                    <div>
                      nLab MC XL diş laboratuarına için birçok üretim
                      seçenekleri ile hızlı ıslak freze ve taşlama birimdir. Bu
                      yüksek hız ve hassasiyet yararlanabilir ve sadece bir kaç
                      adımda kusursuz ürünler elde edilebilir.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>SIRONA INEOS X5</h3>
                    <div>
                      Yeni nesil CAD / CAM tarayıcı diş laboratuarında tüm
                      dijitalleştirme görevlerini kapsar. Diş laboratuarı için
                      çok yönlü halde çalışma esnekliği ve yeni fonksiyonlar ile
                      çok kısa sürede, son derece hassas ölçümleri birleştirir.
                    </div>
                  </div>
                </div>
                <div className="tech-wrapper">
                  <div className="tech-container">
                    <h3>‘Zoom’ Tooth Whitening</h3>
                    <div>
                      Diğer beyazlatma yöntemleriyle kıyaslandığında ‘Zoom’ diş
                      beyazlatma daha hızlı (bir saat içinde) ve daha etkili
                      sonuç verir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal hidden" ref={modal}>
        <div className="modal-btn-left" onClick={modalToLeft}>
          <Check ref={svgLeft} />
        </div>
        <div className="image-container" id="" ref={modalImage}></div>
        <button className="btn--close-modal" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-btn-right" onClick={modalToRight}>
          <Check ref={svgRight} />
        </div>
        <div className="modal-num">{n} / 10</div>
      </div>
      <div className="overlay hidden" onClick={closeModal} ref={overlay}></div>
    </Fragment>
  );
};
export default TrAboutUs;
