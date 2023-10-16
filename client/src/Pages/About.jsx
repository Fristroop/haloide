import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <h1 className="text-center">Hakkımızda</h1>
            <hr />
            <div className="mb-5"></div>

            <div className="mb-5">
              <h3 className="mb-3">Halo Edebiyat Dergisi Nedir?</h3>
              <p className="text-muted fs-5">
                Halo Edebiyat Dergisi, Pamukkale Üniversitesi İngiliz Dili ve
                Edebiyatı bölümünün aylık fikir, sanat ve edebiyat dergisidir.
                Öğrenciler okul dışında birikimlerini sunarak dergimizde
                eserleriyle yer alır ve kendilerini geliştirme fırsatı yakalar.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="mb-3">Biz Kimiz?</h3>
              <p className="text-muted fs-5">
                Bizler, Pamukkale Üniversitesi İngiliz Dili ve Edebiyatı bölümü
                öğrencileriyiz. Bölümümüzden esinlenerek her ay sanat ve
                edebiyat konuları çerçevesinde içerikler üretiyor,
                öğrendiklerimizi paylaşıp öğretmeyi ve farkındalık kazandırmayı
                amaçlıyoruz.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="mb-3">Kimler Katılabilir?</h3>
              <p className="text-muted fs-5">
                Dergimizin kapıları sadece İngiliz Dili ve Edebiyatı bölümü
                öğrencilerine değil, edebiyata ilgisi olan herkese açıktır! Eğer
                isterseniz her ay yazarlık yapmak için başvurabilir, isterseniz
                konuk yazar olarak başvurabilir ve dergiye arada sırada
                yazabilirsiniz.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="mb-3">
                Yazar ekibine dahil olmak istiyorum, nasıl başvurabilirim?
              </h3>
              <p className="text-muted fs-5">İki ayrı yazar grubumuz mevcut:</p>
              <h4>1- Kalıcı Yazarlar: Dergi</h4>
              <p className="text-muted fs-5">
                ekibine dahil olmak isteyen ve her ay yazı yazmaya gönüllü olan
                arkadaşımız öncelikle bizlerle bir aylık bir denemece sürecine
                dahil oluyor. Böylece arkadaşımız burada, dergi nasıl işliyor,
                neler yapıyoruz, derginin çıkışı ve sistemi nasıl ilerliyor
                hepsine şahit olmuş oluyor. Ay sonunda yaptığımız toplantılarda
                her geçen ayımızı değerlendiriyoruz ve kendisi bizimle devam
                edip etmeyeceğini bildiriyor. Eğer devam edecek olursak artık
                kalıcı yazarımız oluyor ve ekibimize dahil oluyor!
              </p>

              <h4>2- Konuk Yazarlar</h4>
              <p className="text-muted fs-5">
                {" "}
                Dergi ekibine dahil olmak yerine “benim yoğunluğum var/sizin
                yoğunluğunuza ayak uyduramam ama arada sırada temaya uygun
                yazılar yazmak isterim” diyen arkadaşlarımız ise konuk
                yazarlarımız oluyor; zira biz sizleri misafir etmekten de keyif
                alıyoruz 😊 Bizlere Instagram sayfamızdan yahut mail
                adresimizden ulaşabilir, öneri ve isteklerinizi dile
                getirebilirsiniz!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
