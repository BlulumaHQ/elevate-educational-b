import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, FileCheck, Plane, Home as HomeIcon, HeartHandshake, Sparkles } from "lucide-react";
import schoolImg from "@/assets/precise-school-application.webp";
import homestayImg from "@/assets/homestay.webp";
import campusImg from "@/assets/office-mentorship.webp";
import streetImg from "@/assets/vancouver-street.webp";
import medicalImg from "@/assets/medical-insurance.webp";
import airportImg from "@/assets/airport-pickup.webp";
import settlingImg from "@/assets/settling-in.webp";
import consultImg from "@/assets/parent-consultation.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "服務內容 Services | 頤珈國際教育" },
      {
        name: "description",
        content: "頤珈國際教育提供從學校申請、學生簽證、寄宿家庭、接機、醫療保險到生活安頓的全方位留學支援服務。",
      },
      { property: "og:title", content: "服務內容 Services | 頤珈國際教育" },
      { property: "og:image", content: schoolImg },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    num: "01",
    t: "學校精準申請",
    img: schoolImg,
    b: "從學校研究、申請文件、面試輔導到入學註冊，量身規劃孩子最適合的學校。",
    steps: ["背景評估 / 學校研究", "文件與作品準備", "申請送件與面試輔導", "入學註冊與課程選擇"],
  },
  {
    num: "02",
    t: "學生簽證辦理",
    img: campusImg,
    b: "全程協助學生簽證、長期居留與相關文件，讓出國流程更安心。",
    steps: ["資格評估", "文件清單與表單", "提交與追蹤", "落地後續支援"],
  },
  {
    num: "03",
    t: "寄宿家庭媒合",
    img: homestayImg,
    b: "親自篩選溫暖、友善、文化包容的加拿大寄宿家庭，定期回訪。",
    steps: ["家庭背景審核", "個性與飲食匹配", "定期關懷追蹤", "問題即時處理"],
  },
  {
    num: "04",
    t: "機場接機與安頓",
    img: airportImg,
    b: "由顧問或合作司機親自接機，協助首日入住與初步生活定向。",
    steps: ["航班追蹤", "專人接機", "入住協助", "城市定向導覽"],
  },
  {
    num: "05",
    t: "醫療保險協助",
    img: medicalImg,
    b: "協助申請 BC 省醫療保險與私人保險，提供完整海外醫療保障。",
    steps: ["BC MSP 申請", "私人保險方案", "就醫陪同協助", "緊急聯絡支援"],
  },
  {
    num: "06",
    t: "生活安頓服務",
    img: settlingImg,
    b: "手機、銀行、交通卡與生活用品準備，協助孩子快速融入加拿大日常。",
    steps: ["手機門號開通", "銀行帳戶開戶", "交通卡與路線", "生活用品採買"],
  },
  {
    num: "07",
    t: "家長諮詢服務",
    img: consultImg,
    b: "提供家長定期回報與即時溝通，讓您隨時掌握孩子的學習與生活狀況。",
    steps: ["成績與生活回饋", "緊急聯絡窗口", "親子諮詢支援"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-secondary/40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            從規劃到落地，全方位的陪伴
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            我們提供一站式的高端留學顧問服務，從學業到生活的每一個環節都為孩子細心安排。
          </p>
        </div>
      </section>

      {/* Service Flow */}
      <section
        className="py-24 md:py-32 bg-background border-y border-navy/10"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-4">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">六步驟，安心抵達</h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">從第一次諮詢到孩子順利落地，我們陪伴每一步。</p>
          </div>

          <ol className="grid gap-y-12 md:grid-cols-6 md:gap-x-2 relative">
            {[
              { Icon: Search, n: "01", t: "免費諮詢", d: "了解孩子背景與家庭目標" },
              { Icon: FileCheck, n: "02", t: "規劃方案", d: "量身設計學校與課程路徑" },
              { Icon: HomeIcon, n: "03", t: "申請送件", d: "學校申請、寄宿家庭媒合" },
              { Icon: Plane, n: "04", t: "簽證與行前", d: "簽證、保險、行前說明" },
              { Icon: HeartHandshake, n: "05", t: "落地安頓", d: "接機、開戶、生活定向" },
              { Icon: Sparkles, n: "06", t: "長期陪伴", d: "定期回報、緊急支援" },
            ].map((s, i, arr) => (
              <li
                key={s.n}
                className="relative flex md:flex-col items-start md:items-center text-center gap-5 md:gap-4"
              >
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-navy/20 bg-ivory flex items-center justify-center text-navy">
                  <s.Icon size={26} strokeWidth={1.4} />
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight size={18} className="hidden md:block absolute top-9 -right-3 text-wood/60" />
                )}
                <div className="md:mt-2">
                  <p className="text-[11px] tracking-[0.28em] text-wood uppercase">{s.n}</p>
                  <p className="font-serif text-xl md:text-2xl text-primary mt-2">{s.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[14rem]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background">
        {services.map((s, i) => (
          <div key={s.num} className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
            <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={s.img} alt={s.t} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div className="md:col-span-6">
                <p className="font-serif text-3xl text-wood/80">{s.num}</p>
                <h2 className="font-serif text-3xl md:text-5xl text-primary mt-3 leading-tight">{s.t}</h2>
                <p className="mt-5 text-base text-foreground/80 leading-[1.9] max-w-lg">{s.b}</p>
                <ul className="mt-8 space-y-3 max-w-md">
                  {s.steps.map((step, idx) => (
                    <li key={step} className="flex items-baseline gap-4 text-sm text-foreground/80">
                      <span className="font-serif text-wood text-base">0{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 md:py-32 bg-navy text-cream">
        <div className="container-editorial text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">想了解最適合孩子的方案？</h2>
          <p className="mt-5 max-w-xl mx-auto text-cream/80">先預約一場免費諮詢，讓我們認識您與孩子的需求。</p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 mt-10 bg-cream text-navy px-8 py-4 text-sm tracking-wide hover:bg-cream/90 transition-colors"
          >
            預約免費諮詢 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
