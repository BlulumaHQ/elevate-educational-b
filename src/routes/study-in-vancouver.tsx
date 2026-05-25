import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import campusImg from "@/assets/hero-students-walking.webp";
import streetImg from "@/assets/vancouver-street.webp";
import schoolImg from "@/assets/school.webp";
import homestayImg from "@/assets/homestay.webp";
import waveBg from "@/assets/wave-bg.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/study-in-vancouver")({
  head: () => ({
    meta: [
      { title: "溫哥華留學 Study in Vancouver | 頤珈國際教育" },
      {
        name: "description",
        content: "認識溫哥華教育體系、公立私立學校、國際學生生活、寄宿家庭、交通與氣候，為您的留學規劃做好準備。",
      },
      { property: "og:title", content: "溫哥華留學 | 頤珈國際教育" },
      { property: "og:image", content: campusImg },
      { property: "og:url", content: "/study-in-vancouver" },
    ],
    links: [{ rel: "canonical", href: "/study-in-vancouver" }],
  }),
  component: StudyPage,
});

const overview = [
  { t: "教育體系", b: "BC 省教育以高品質聞名，公立、私立、國際學校選擇豐富，學術與課外活動並重。" },
  { t: "公立 vs 私立學校", b: "公立提供完整 IB / AP 與多元社團；私立提供小班制與更全面的升學輔導。" },
  { t: "國際學生生活", b: "多元友善的城市文化、成熟的留學生社群，協助孩子快速建立朋友圈。" },
  { t: "安全與生活", b: "全球宜居城市之一，社區治安良好，醫療與大眾運輸完善。" },
  { t: "寄宿家庭", b: "嚴選的加拿大家庭提供住宿、三餐與生活照顧，協助文化融入。" },
  { t: "交通", b: "Skytrain、巴士、海上巴士交通網絡完整，學生上下學便利安全。" },
  { t: "氣候", b: "冬季溫和多雨，夏季舒爽宜人，四季分明卻不嚴寒。" },
  { t: "社區與文化", b: "華人社區成熟、國際文化兼容，家長與學生都能感到熟悉安心。" },
];

const faqs = [
  {
    q: "幾歲可以開始到溫哥華留學？",
    a: "我們協助 國小高年級至高中、大學階段的學生，並依年齡規劃合適的學校與住宿方案。",
  },
  { q: "需要陪讀嗎？", a: "未成年學生若無家長陪同，需安排合格的監護人。我們提供合法監護人服務並協助寄宿家庭安排。" },
  { q: "公立與私立學校如何選擇？", a: "我們會依孩子個性、語言程度、升學目標與預算，協助評估最適合的方案。" },
  { q: "簽證需要多久？", a: "依季節與案件複雜度不同，一般約 4–12 週，我們會協助文件準備與追蹤。" },
  { q: "孩子英文不夠好可以嗎？", a: "可以，溫哥華有完善的 ESL/語言課程銜接，並可安排短期語言學校先行適應。" },
];

function StudyPage() {
  return (
    <>
      <section className="relative pt-32 pb-0 md:pt-40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Study in Vancouver</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-4xl">
            一座，讓孩子學習生活兩相宜的城市
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            溫哥華結合世界級的教育資源與西岸自然生活，是國際家庭最信賴的留學城市之一。
          </p>
        </div>
        <img
          src={campusImg}
          alt="Vancouver campus"
          className="w-full mt-16 aspect-[21/9] object-cover"
          loading="lazy"
        />
      </section>

      <section
        className="py-24 md:py-32 bg-background"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <SectionHeading eyebrow="Overview" title="關於溫哥華留學" />
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {overview.map((o, i) => (
              <div key={o.t} className="border-t border-border pt-6">
                <p className="font-serif text-xl text-wood">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-primary mt-2">{o.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">{o.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial grid md:grid-cols-3 gap-6">
          <img src={schoolImg} alt="Vancouver school" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          <img src={streetImg} alt="Residential street" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          <img src={homestayImg} alt="Homestay" className="w-full aspect-[4/5] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="FAQ" title="家長常見問題" />
          </div>
          <div className="md:col-span-8">
            {faqs.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border last:border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-lg md:text-xl text-primary">{q}</span>
        <ChevronDown
          size={20}
          className={`text-wood transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}
