import { createFileRoute } from "@tanstack/react-router";
import foundersImg from "@/assets/parent-consultation.webp";
import streetImg from "@/assets/vancouver-street.webp";
import waveBg from "@/assets/wave-bg.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "關於我們 About | 頤珈國際教育" },
      { name: "description", content: "認識頤珈國際教育創辦人 Maggie 與 Katrina，30 年加拿大在地經驗，以家人之心陪伴每一位留學生。" },
      { property: "og:title", content: "關於我們 About | 頤珈國際教育" },
      { property: "og:description", content: "認識頤珈國際教育創辦人與品牌故事。" },
      { property: "og:image", content: foundersImg },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-secondary/40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            以家人之心，陪伴每一位來到加拿大的孩子
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            頤珈國際教育是一間立基於溫哥華的高端國際教育顧問品牌。我們不只是代辦，而是孩子在加拿大的家人。
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={foundersImg} alt="Maggie & Katrina" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-7 space-y-5 text-[15px] md:text-base leading-[1.9] text-foreground/80 max-w-xl">
            <SectionHeading eyebrow="Founders" title="Maggie & Katrina" />
            <p className="mt-6">在加拿大這片土地上，我們已經深耕、生活了超過 30 個年頭。</p>
            <p>我們經歷過獨自一人、背起行囊的「小留學生」時光，也走過在溫哥華成家立業、生兒育女的人生階段。</p>
            <p>因為親自走過，我們比任何人都更熟悉大溫哥華的每一寸土地、當地的文化肌理與豐富的社區資源。</p>
            <p>我們深知「環境」對孩子人格養成與潛能開發的重要性。如今，我們希望將這 30 年累積的在地經驗與教育熱忱，轉化為力量，陪伴更多來到加拿大留學、遊學的孩子。</p>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-wood-soft/40"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial grid md:grid-cols-3 gap-12">
          {[
            { t: "30 年溫哥華在地", b: "從小留學生到創業者與母親，三十年扎根在這座城市。" },
            { t: "教育為本", b: "深信環境塑造孩子，挑選最適合的學校與生活圈。" },
            { t: "陪伴式服務", b: "從申請、簽證、住宿到生活適應，全方位長期支援。" },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-serif text-2xl text-primary">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <img src={streetImg} alt="Vancouver residential street" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div>
            <SectionHeading eyebrow="Philosophy" title="教育，不只是申請一所學校" />
            <p className="mt-6 text-base text-foreground/80 leading-[1.9] max-w-lg">
              我們相信每一位孩子都值得被認識、被理解。從學業規劃到生活適應，我們以家庭般的溫度，協助孩子在異鄉建立自信、獨立與歸屬感。
            </p>
            <blockquote className="mt-10 border-l-2 border-wood pl-6 font-serif text-2xl text-primary leading-snug max-w-lg">
              「我們希望孩子不只走出去，更能安心地走得更遠。」
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
