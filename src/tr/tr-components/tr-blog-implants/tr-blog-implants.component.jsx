import { Fragment, useEffect } from "react";
import "./tr-blog-implants.style.scss";
import { ReactComponent as Check } from "../../../assets/check-1.svg";
const TrBlogImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="dental-implants">
        <h1 className="dental-implants-header">
          DİŞ İMPLANTLARI SONRASI BAKIM
        </h1>
        <div className="dental-implants-wrap">
          <div className="dental-implants-image-container">
            <img src={require("../../../assets/implant.jpg")} />
          </div>
          <div className="dental-implants-container">
            <h3>Diş İmplantları Sonrası Bakım</h3>
            <p>
              Tedaviniz tamamlandıktan sonra biraz ağrınız olabilir; Ancak
              ağzınız ağrıyabileceği için sorun olmaz. Size ağrı kesiciler veya
              antibiyotikler reçete edildiğinden, ağrıyla başa çıkmanıza
              yardımcı oldukları için bunları düzenli olarak kullanmaya lütfen
              dikkat edin.
            </p>
            <p>
              Diş İmplantları ile tedaviniz tamamlandıktan sonra, ilk 24 saat
              mümkün olduğunca ameliyat bölgesine bir paket veya buz küpleri
              şeklinde buz uygulamanız şişmeyi önleyeceği ve yardımcı olacağı
              için önemlidir. şifadasın.
            </p>
            <p>
              Tuzlu su da özellikle ilk hafta iyileşme döneminde çok faydalıdır,
              bu nedenle lütfen bir bardak ılık suya bir çay kaşığı tuz koyun ve
              mümkün olduğunca gargara yapın.
            </p>
            <p>
              İlk hafta dişlerinizi fırçalamak sizin için zor olabilir, bu
              nedenle su içmek ağzınızı temiz tutmanıza yardımcı olacaktır. İlk
              haftadan sonra gargara kullanabilirsiniz. Ağız çok hızlı
              iyileştiği için ağzınız normale döndüğünde tekrar dişlerinizi
              fırçalayabilirsiniz.
            </p>
          </div>
        </div>

        <div className="dental-implants-desc">
          <p>
            <Check />
            İlk 24 saat içinde, şişlik seviyesini artırabileceğinden doğrudan
            güneş ışığından kaçının.
          </p>
          <p>
            <Check />
            24 saat boyunca sıcak duştan da kaçınılmalıdır.
          </p>
          <p>
            <Check />
            Su enfeksiyona neden olabileceğinden deniz ve yüzme havuzundan
            kaçının.
          </p>
          <p>
            <Check />
            Lütfen ilk 48 saat çok sıcak veya çok soğuk içecekler içmeyin, aksi
            halde hassasiyet hissedebilirsiniz.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default TrBlogImplants;
