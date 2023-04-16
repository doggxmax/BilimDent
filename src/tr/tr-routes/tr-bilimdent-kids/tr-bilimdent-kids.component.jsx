import { Fragment, useEffect } from "react";
import "./tr-bilimdent-kids.style.scss";
import { ReactComponent as Kids1 } from "../../../assets/kids-1.svg";
import { ReactComponent as Kids2 } from "../../../assets/kids-2.svg";
import { ReactComponent as Kids3 } from "../../../assets/kids-3.svg";
import { ReactComponent as Kids4 } from "../../../assets/kids-4.svg";
import { ReactComponent as Kids5 } from "../../../assets/kids-5.svg";
import { ReactComponent as Kids6 } from "../../../assets/kids-6.svg";
import { ReactComponent as Kids7 } from "../../../assets/kids-7.svg";
import { ReactComponent as Kids8 } from "../../../assets/kids-8.svg";
import { ReactComponent as Kids9 } from "../../../assets/kids-9.svg";
import { ReactComponent as Kids10 } from "../../../assets/kids-10.svg";
import { ReactComponent as Check } from "../../../assets/check-1.svg";
const TrBilimDentKids = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" }, 0, 0);
  });
  return (
    <Fragment>
      <div className="bilimdent-kids">
        <div className="bilim-dent-kids-header">
          BİLİM<span>DENT</span> ÇOCUK
        </div>
        <div className="bilimdent-kids-wrap">
          <div className="bilimdent-kids-container">
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids1 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>PEDODONTİ NEDİR?</h3>
                <p>
                  Pedodonti diğer bir deyişle Çocuk Diş Hekimliği 0-13 yaş arası
                  çocukların hem süt hem de kalıcı dişlerinin sağlıklı bir
                  şekilde korunmasını, çürük, travma, kalıtımsal ya da benzeri
                  etkenlerin bu dişlerde neden olduğu sorunların giderilmesi
                  amacına yönelik çalışan diş hekimliğinin bir dalıdır. Bebeklik
                  çağından başlayarak çocukların ağız-diş sağlığının ve çene-yüz
                  bölgesi gelişiminin takibi, tedavisi ve koruyucu önlemler
                  alınması Pedodontinin çalışma alanını oluşturur.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids2 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>ÇOCUKLARDA İLK DİŞ MUAYENESİ</h3>
                <p>
                  Çocuklarda ilk diş hekimi muayenesinin, ilk süt dişi sürmesini
                  takiben uzman bir çocuk diş hekimi tarafından yapılması
                  önerilir. Günümüzde birçok erişkinde karşılaştığımız “Diş
                  Hekimi Korkusu” nun çocuğunuzda gelişmemesi için ilk diş
                  hekimi muayenesinin yapıldığı zaman ve yapan diş hekimi büyük
                  önem taşımaktadır. Düzenli olarak altı ayda bir yapılan
                  muayeneler sayesinde hem çocukların diş gelişimi, ağız hijyen
                  durumu ve dişlerde var olabilecek çürükler teşhis edilebilir
                  hem de erken dönemde teşhis edilen çürük dişler tedavi edilir
                  ve çürük riski önlenebilir.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids3 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>BEBEKLERDE DİŞ SÜRME DÖNEMİ</h3>
                <p>
                  Kemik içinde gelişim sürecini tamamlayan süt dişleri 4. ve 7.
                  aylar arasında diş eti yüzüne doğru hareket ederek ağız içinde
                  görülmeye başlar. 2,5-3 yaşında ağızda toplamda 20 adet süt
                  dişi bulunur. Bu dişler alt çenede 10, üst çenede 10 olacak
                  şekilde tamamlanır. Bebeklerde diş çıkarma süreci; bebeğin
                  kişisel özellikleri, genetik yapısı, aile öyküsü, beslenme
                  düzeyi gibi çok farklı faktörlerle ilişkili olması nedeni ile
                  her bebekte farklı seyretmektedir. Her bebeğin gelişimi de
                  aynı olmadığı için diş çıkarma dönemleri de farklılık
                  gösterir.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-outer">
              <div className="bilimdent-kids-outer-container">
                <h4 className="bilimdent-kids-outer-head">
                  Bebeklerde en sık görülen döküntü belirtileri şunlardır :
                </h4>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Ateş ve ishal</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Huysuzluğun artması</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Gece uyanma ve ağlama seansları</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Salya ve tükürükte artış</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Huzursuzluk ve ağlama nöbetleri</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>İştahsızlık ve beslenmeyi reddetme</div>
                </div>
                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Ağız çevresinde döküntüler</div>
                </div>

                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Ellerini ısırma</div>
                </div>

                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Hafif öksürük</div>
                </div>

                <div className="bilimdent-kids-outer-description">
                  <Check />
                  <div>Her şeyi ağzına götürme isteği</div>
                </div>
              </div>
              <div className="bilimdent-kids-outer-desc">
                Toplumda süt dişlerine geçici diş olarak yaklaşılmaktadır. Fakat
                unutulmamalıdır ki süt dişleri yaklaşık 10-12 yıl ağızda işlev
                görmekte ve daimi dişlerin düzgün gelişimi için çok önemli bir
                rol üstlenmekte ve daimi dişlerin yerlerini korumaktadırlar.
                Çocuğun beslenmesinde ve konuşma sırasında sesleri doğru
                çıkarmasında süt dişlerinin önemi büyüktür. Aynı zamanda çocuğun
                estetik görünümü için de sağlıklı süt dişlerinin düşme zamanına
                kadar ağızda bulunması önemlidir. Bu nedenle bebeklerde ağız
                içinde dişler görülür görülmez diş hekimi kontrolü yapılmalı ve
                hekimin önerileri doğrultusunda ağız hijyeni sağlanmalıdır.
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids4 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>PRİMER DİŞ TEDAVİLERİ</h3>
                <p>
                  Özellikle küçük yaşlardaki çocukları diş hekimi koltuğuna
                  oturtup, tedavi yapmak çok kolay olmamaktadır. Bazen çocuk diş
                  hekimleri (pedodontist) bile, bu ağrılı dişlerin tedavilerini
                  çocuk uyum göstermediği için koltukta gerçekleştiremez ve
                  tedavi genel anestezi altında olmak zorunda kalır. Tüm bu
                  zorluklar göz önüne alınarak ilk süt dişlerinin sürmesinden
                  itibaren ağız ve diş bakımına büyük özen gösterilmelidir. Süt
                  dişlerinin erken kaybı, özellikle arka azı bölgelerinde
                  sürekli dişlenme sırasında bazı sorunlara neden olmaktadır.
                  Çünkü dişin kaybedildiği boşluğa doğru komşu dişler zaman
                  içerisinde kayarak bu yerin kapanmasına neden olup ileride
                  yerine gelecek olan sürekli dişin süremeyip gömülü kalmasına
                  ya da farklı bir yerden sürerek hatalı kapanışların
                  gerçekleşmesine neden olabilir. Bu gibi durumlarda da ileride
                  ortodontik tedavi (tel tedavisi) gereksinmesi kaçınılmaz olur.
                  Çeşitli nedenlerle erken bir süt dişi çekimi yapılmak zorunda
                  kalınırsa, çekim boşluğunun yanındaki dişlerin kayması sonucu
                  yerin kapanmasını önlemek için, sabit/hareketli yer tutucu
                  apareyler yapılmalıdır.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids5 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>ÇOCUKLARDA DİŞ ÇÜRÜME NEDENLERİ</h3>
                <p>
                  Süt dişleri kalıcı dişlere oranla daha çok organik madde
                  içerirler, bu nedenle çürümeye daha yatkınlardır, daha kolay
                  çürürler ve meydana gelen diş çürükleri de hızlıca
                  ilerleyebilir. Çocuklar, çürüğün erken döneminde görülebilen
                  soğuk sıcak hassasiyeti ve hafif ağrı gibi sinyalleri
                  zamanında yorumlayamazlar. Olayı ancak dayanılamayacak kadar
                  ağrı olmasında fark ederler ki bu durumda çok geç kalınmış
                  olabilir. Çocuklar ağız bakımına yetişkinler kadar dikkat
                  edemezler. Çocuğun el becerisi, merakı ve ebeveynin tutumu diş
                  fırçalama alışkanlığını belirler. Çocukların el yetenekleri
                  gelişene kadar dişler ebeveyn eşliğinde ve ebeveyn yardımıyla
                  fırçalanmalıdır. Özellikle gece uyku esnasında tükürük akışı
                  azalacağı için dişler daha kolay çürüyebilmektedir. Bu nedenle
                  uyumadan önce dişler fırçalanmalı, su dışında herhangi bir şey
                  yenilip içilmemelidir. Özellikle annelerin sıklıkla yaptığı
                  bir hata da emzik ya da biberonu şeker, reçel vb. gibi
                  gıdalara batırarak çocuklara vermeleri veya uyku aralarında
                  şekerli süt, meyve suyu gibi gıdalara alıştırmalarıdır. Bu
                  beslenme şekilleri erken çocukluk çağı çürüklerine neden
                  olabilmektedir. Çürük oluşumu engellenebilir mi? Çürüğü
                  tamamen engelleyebilecek bir aşı ya da ilaç henüz
                  geliştirilemedi. Ancak, çürük sayısını azaltmaya yönelik bazı
                  malzemeler günümüzde kullanılmaktadır, bunlardan birisi;
                  "fissür örtücü" dediğimiz malzemedir. Diş çürükleri genellikle
                  azı ve küçük azı dişlerinin, çiğneyici yüzlerinde bulunan
                  "fissür" adı verilen oluklarda başlar. Fissür örtücüler ile
                  olukların üzeri kapatılıp, o bölgeye bakterilerin, besin
                  artığı’nın sızması engellenerek çürük başlaması önlenir. Bu
                  işlem, 6 yaşından itibaren çıkan kalıcı azı ve küçük azı
                  dişlerine de uygulanabilir. Çürüğü engellemenin başka bir yolu
                  da dişlerin çürüğe karşı direncini artırmaktır. Dişlere
                  yüzeysel florür uygulanması suretiyle bu direnç kazandırılır.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids6 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>ÇOCUKLARDA DİŞ KIRIKLARI</h3>
                <p>
                  Diş kırılmışsa öncelikle soğukkanlı olmalısınız ki yanlış bir
                  şey yapmayın. Kanama var ise hemen temiz bir gazlı bezle yara
                  yerine kompres yapın. Dudakta yaralanma olmuş ise soğuk suyla
                  yıkayıp oraya da gazlı bezle kompres yapın. Kırık parçayı
                  bulmaya çalışın. Bu esnada parçaları nemli tutmak önemlidir.
                  Serum fizyolojik, soğuk süt ve hatta çocuğunuzun kendi
                  tükürüğü bunun için idealdir. Kırık diş parçalarının
                  kurumaması gerekir. Yoksa yapıştırılamazlar. En kısa sürede
                  diş doktoruna gidin. Bu parçalar çok kuvvetli ajanlar ile
                  (bonding) yerlerine yapıştırılırlar ve yapılacak her kompozit
                  dolgu gibi estetik ve dayanıklı olurlar. Eğer kırık diş
                  parçası bulunamazsa , günümüzdeki kompozit ya da seramik
                  sistemler ile çok başarılı şekilde, doğal dişe benzer şekilde
                  dişin restore edilmesi mümkündür. Ağız-diş yaralanmalarında
                  kırılma görülmese dahi dişin canlılığının takibi için çocuğu
                  diş hekimine götürmek gerekmektedir.Travmaya uğrayan diş
                  canlılığını yitiriyorsa rengi gittikçe koyulaşır ve kök ucunda
                  kistik lezyonlar gelişebilir. Diş canlılığını kaybetmişse
                  kanal tedavisi yapılması gerekir. Bu da birkaç ay içinde belli
                  olur. Yine de 6 aylık rutin kontrollerde travmaya uğramış diş
                  ayrıca değerlendirilecektir.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids7 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>ÇOCUKLARDA DİŞ RENKLENMESİ</h3>
                <p>
                  Diş renklenmeleri çocukların sosyal yaşantısını ve
                  psikolojisini kötü etkileyip özgüven kaybına yol açabilir.
                  Görselliğin ön plana çıkması ve ebeveynlerin çocuklarına olan
                  hassasiyetleri, günümüzde diş renklenmelerindeki estetik
                  tedavilerin önemini arttırmaktadır. Dişlerdeki renklenmeler
                  genel olarak 3 farklı sebepten kaynaklanır; İlaca Bağlı
                  Renklenmeler; Günümüzde her bebek demir takviyesi almaktadır
                  ve demir ilaçlarının diş renklenmesi gibi yan etkileri vardır.
                  Renklenmeleri önlemek için damla formundaki ilaçlar dişlerle
                  temas etmeden direkt bebeğin yutabileceği şekilde dilin
                  gerisine damlatılmalıdır. Kromojenik Renklenmeler; Ağızdaki
                  bazı bakteriler ( kromojenik bakteriler) dişlerin en dışında
                  bulunan şeffaf zara etki ederek renklenmelere neden
                  olmaktadır. Genel olarak tüm dişleri etkileyen bu renklenmeler
                  polisaj işlemi ile temizlenebilmektedir. Ancak
                  tekrarlayabilirler. 6 ayda bir kontrol gerektirmektedir.
                  İlerleyen yaş ile birlikte renklenmelerin oranı azalır. Diş
                  Çürükleri; Başlangıç durumundaki diş çürükleri özellikle ön
                  bölgedeki dişlerde renklenme ile karıştırılabilir. Doğru tanı
                  ve takip adına kontrol randevuları çok kıymetlidir.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids8 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>ÇOCUKLAR İÇİN ŞEFFAF HİZALAYICILAR</h3>
                <p>
                  Çocuklar için telsiz ortodonti adından da anlaşılacağı üzere,
                  diş telleri kullanılmayan bir pediatrik tedavi metodudur. Halk
                  arasında diş düzeltme olarak bilinen işlemin de
                  gerçekleştirilebileceği bir alandır. Çocuklar için telsiz
                  ortodonti ağız ve çeneyi ilgilendiren birtakım problemin
                  plaklar yardımıyla çözülmesi esasına dayanmaktadır. İşlem,
                  şeffaf plak tedavisi ismiyle de bilinmektedir. Çocuklar İçin
                  Şeffaf Plak Kaç Yaşında Kullanılır? Her hasta için tek ve
                  kesin bir yaş vermek mümkün değildir. Çünkü her bireyin
                  gelişimi, büyümesi, dişlerinin çıkış yaşı ve hastalığı farklı
                  olmaktadır. Yine de plakların düzgün bir şekilde
                  yerleştirilebilmesi için ağızda belli sayıda dişin olması
                  gerekmektedir. Bu tedavide ağız içinde hem süt hem de yetişkin
                  dişlerinin birlikte bulunması bir sorun teşkil etmemektedir.
                  Çocuğun tedaviye uygun olup olmadığını, tedavinin süresini ve
                  tedaviye başlamak için en uygun yaşı ortodonti uzmanı bir diş
                  hekimi belirleyecektir.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids9 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>FİSSÜR YAPIŞTIRICI VE FLUOR UYGULAMALARI</h3>
                <p>
                  Fissür nedir? Fissür dişlerin girintili ve yarık şeklindeki
                  yüzeylerine denilmektedir. Dişlerin yüzeyindeki gelişimsel
                  olarak görülen çukurcuklar ve oluklara fissür adı verilir.
                  Fissür örtücü nedir? Diş yüzeyindeki girinti ve oyukların yani
                  füssurları örten materiyaldır. Bu işlemin uygulanmasına ise
                  fissür örtücü denilmektedir. Fissür bir nevi diş aşısı olarak
                  tanımlanabilir. Çürük oluşumunu önlemesi açısından oldukça
                  kolay, ağrısız uygulanan bir işlemdir. Bu uygulama diş hekimi
                  korkusu bulunan veya diş hekimine ilk defa giden çocuklar için
                  en ideal tedavi yöntemidir. Fissür hangi yaşlarda
                  uygulanmalıdır? Bu uygulama genelde 6 yaş dişleri denilen
                  birinci büyük azı dişleri yani kalıcı dişlere uygulanmaktadır.
                  Fakat bu zorunlu bir durum olmayıp süt dişlerine ve yine aynı
                  şekilde küçük azı dişlerine de uygulanabilir. Diğer bir
                  uygulaması ise ön veya arkada dişlerde gelişimsel oluk, yarık
                  şeklindeki oluşumlar olabilir. Bu bölgeler gıda birikimi için
                  ideal yerlerdir ve iyi bir ağız hijyeni sağlanmadığında
                  kolayca çürük oluşabilir. Bu tarz bölgelerde önlem olabilmesi
                  adına yüzeylerde çürüme gerçekleşmemesi için fissür örtücü
                  uygulanarak dişler çürükten korunabilir. Fissür örtücü
                  uygulamasında doğal diş dokusunda herhangi bir kayıp
                  yaşanmamaktadır. Uygulama sonrasında hastalar 6 aylık rutin
                  kontrol seanslarına çağrılmaktadır. Zaman içerisinde fissür
                  örtücüler aşınabilir veya yok olabilir. Bu tarz durumlarda
                  hekimin uygun görmesi durumunda yeniden fissür örtücü tedavisi
                  uygulanabilir. Bu uygulamada ana hedef özellikle çocukların
                  motor fonksiyonları tam olarak uygulanabildiği dönemde
                  dişlerini etkili fırçalayabildiği 9-10 yaşlarına kadar daha
                  kolay çürüyen azı dişlerini korumaktır. Flor uygulaması nedir?
                  Flor uygulamasını basitçe diş minesinin yapı taşını flor
                  takviyesi ile güçlendirerek dişin yapısını çürüklere karşı
                  daha güçlü hale getirilmesi olarak tanımlayabiliriz. Flor
                  uygulaması ne zaman yapılmalıdır? Flor uygulamaları her yaş
                  grubunda çocukta yapılabilir. Çocuğun çürük risk durumuna göre
                  uygulamanın gerekliliği değerlendirilir. Gerekli görülürse
                  uygulama periyotları hekimin belirleyeceği program dahilinde
                  düzenlenir. Fissür örtücü ve flor uygulaması ile hangi bölüm
                  ilgilenir? Fissür örtücü ve flor uygulaması yapmak isteyen
                  hastalarımız diş hekimliği ana bilim dalları arasında bulunan
                  pedodonti uzmanları ile görüşebilirler.
                </p>
              </div>
            </div>
            <div className="bilimdent-kids-inner">
              <div className="bilimdent-kids-icon">
                <Kids10 />
              </div>
              <div className="bilimdent-kids-desc">
                <h3>GENEL ANESTEZİ VE SEDASYON</h3>
                <p>
                  Kooperasyon sağlanamayan çok küçük yaştaki çocuklarda,
                  zihinsel, fiziksel veya tıbbi yetersizliği olan çocuklarda,
                  aşırı derecede uyumsuz, korkulu, endişeli veya iletişim
                  kurulamayan çocuk veya ergende, acil ve geniş kapsamlı diş
                  tedavisine ihtiyaç durumunda, çocuk için nitelikli bir diş
                  tedavisinin sağlanması için genel anestezi ve sedasyon
                  kullanılmasına gerek duyulabilmektedir. İşlemler ameliyathane
                  koşullarında anestezi hekimi, anestezi teknikeri, diş hekimi
                  ve yardımcısı ile ekip olarak gerçekleştirilir. Tek bir
                  seansta ağızdaki tüm işlemlerin yapılabilmesine olanak sağlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TrBilimDentKids;
