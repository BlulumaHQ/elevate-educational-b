import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, ShieldCheck, Home, Compass, HeartHandshake, Plane, Star, Sparkles,
} from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";
import studentsWalking from "@/assets/students-walking.jpg";
import classroomMentor from "@/assets/classroom-mentor.jpg";
import homestayWarm from "@/assets/homestay-warm.jpg";
import studentsHike from "@/assets/students-hike.jpg";
import notebookDesk from "@/assets/notebook-desk.jpg";
import graduationImg from "@/assets/graduation.jpg";
import foundersImg from "@/assets/founders.jpg";
import campusImg from "@/assets/students-campus.jpg";
import sunsetImg from "@/assets/vancouver-sunset.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      { name: "description", content: "30 年加拿大在地經驗，陪伴孩子安心融入溫哥華生活與教育環境，從留學申請到海外生活，成為孩子在異鄉最堅實的後盾。" },
      { property: "og:title", content: "頤珈國際教育 | Vancouver 留學顧問" },
      { property: "og:image", content: heroStudents },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: GraduationCap, label: "學業啟航", title: "學校精準申請", body: "依孩子特質與興趣，量身規劃升學路徑。" },
  { icon: ShieldCheck, label: "通關無憂", title: "簽證全程協助", body: "專業文件準備，讓出國流程順利安心。" },
  { icon: Home, label: "溫馨落腳", title: "寄宿家庭媒合", body: "嚴選友善家庭，孩子在加拿大有第二個家。" },
  { icon: Compass, label: "在地安頓", title: "生活全面支援", body: "手機、銀行、交通與在地適應一次照顧。" },
  { icon: HeartHandshake, label: "長期陪伴", title: "成長導師同行", body: "我們是家長在加拿大的眼睛與雙手。" },
  { icon: Plane, label: "文化融入", title: "文化銜接活動", body: "幫助孩子打開世界，也擁抱自己。" },
];

const lifeMoments = [
  { img: studentsHike, caption: "週末山海探索", rot: "-3deg", tape: "left-6 -top-3" },
  { img: classroomMentor, caption: "課堂裡的小突破", rot: "2deg", tape: "right-8 -top-3" },
  { img: homestayWarm, caption: "家一樣的晚餐", rot: "-2deg", tape: "left-10 -top-3" },
  { img: graduationImg, caption: "畢業那一天", rot: "3deg", tape: "right-6 -top-3" },
];

function HomePage() {
  return (
    <>
      {/* ========== HERO — layered editorial collage ========== */}
      <section className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden paper-grain bg-[var(--cream)]">
        {/* decorative blobs */}
        <div aria-hidden className="absolute -top-24 -right-20 w-[460px] h-[460px] rounded-full bg-[var(--blush)]/40 blur-3xl" />
        <div aria-hidden className="absolute top-1/2 -left-32 w-[380px] h-[380px] rounded-full bg-[var(--sage)]/30 blur-3xl" />

        <div className="container-editorial relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* LEFT — copy */}
            <div className="lg:col-span-6 relative z-10">
              <span className="sticker mb-6" style={{ transform: "rotate(-5deg)" }}>
                <Star size={14} className="mr-1.5" /> Hello, Vancouver
              </span>
              <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.05] text-[var(--navy)] text-balance">
                陪孩子<br />
                走一段<span className="hand-underline">溫暖</span>的
                <br />留學旅程。
              </h1>
              <p className="mt-7 max-w-lg text-[15px] md:text-base text-foreground/75 leading-[1.9]">
                我們是 Maggie 與 Katrina，30 年生活在溫哥華的媽媽們。
                從學校申請、寄宿家庭，到放學後的那通電話 — 我們把每一個孩子當成自己的孩子在照顧。
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/consultation" className="inline-flex items-center gap-2 bg-[var(--navy)] text-cream px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--navy-deep)] transition-colors shadow-lg shadow-[var(--navy)]/15">
                  預約一杯咖啡的時間 <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="font-hand text-xl text-[var(--terracotta)] hover:underline underline-offset-4">
                  認識我們的故事 →
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-foreground/60">
                <div><span className="font-serif text-2xl text-[var(--navy)] normal-case tracking-normal">30+</span>　年在地經驗</div>
                <div className="h-8 w-px bg-foreground/15" />
                <div><span className="font-serif text-2xl text-[var(--navy)] normal-case tracking-normal">200+</span>　家庭信任</div>
              </div>
            </div>

            {/* RIGHT — image collage */}
            <div className="lg:col-span-6 relative h-[520px] sm:h-[600px] lg:h-[640px]">
              {/* main organic image */}
              <div className="absolute right-0 top-0 w-[75%] h-[78%] mask-blob-1 overflow-hidden">
                <img src={heroStudents} alt="Happy international students on campus" className="w-full h-full object-cover" />
              </div>
              {/* polaroid 1 */}
              <div className="absolute left-0 top-16 w-44 sm:w-52 polaroid float-slow" style={{ ['--r' as never]: "-7deg", transform: "rotate(-7deg)" }}>
                <span className="tape left-1/2 -translate-x-1/2 -top-3" />
                <img src={studentsWalking} alt="Students walking in park" className="w-full aspect-[4/5] object-cover" />
                <p className="font-hand text-center text-[var(--navy)] text-lg mt-2">First day ✨</p>
              </div>
              {/* polaroid 2 */}
              <div className="absolute left-4 sm:left-12 bottom-0 w-48 sm:w-56 polaroid float-med" style={{ ['--r' as never]: "6deg", transform: "rotate(6deg)" }}>
                <span className="tape left-6 -top-3" style={{ background: "color-mix(in oklab, var(--sage) 60%, white)" }} />
                <img src={notebookDesk} alt="Student notebook with Canadian leaf" className="w-full aspect-square object-cover" />
                <p className="font-hand text-center text-[var(--navy)] text-lg mt-2">Vancouver, fall</p>
              </div>
              {/* floating sticker */}
              <div className="absolute right-4 bottom-6 sticker float-slow" style={{ background: "var(--gold)", color: "var(--navy)", transform: "rotate(8deg)" }}>
                <Sparkles size={14} className="mr-1.5" /> like family
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOUNDER STORY — editorial scrapbook ========== */}
      <section className="relative py-24 md:py-36 paper-grain bg-[var(--cream-deep)] overflow-hidden">
        <div aria-hidden className="absolute top-20 right-10 font-hand text-[var(--wood)]/30 text-7xl rotate-[-8deg] select-none">since 1995</div>

        <div className="container-editorial grid md:grid-cols-12 gap-14 md:gap-16 items-center">
          {/* IMAGE CLUSTER */}
          <div className="md:col-span-5 relative h-[560px] md:h-[640px]">
            <div className="absolute inset-x-4 top-0 h-[78%] mask-arch overflow-hidden shadow-xl">
              <img src={foundersImg} alt="Founders Maggie and Katrina" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -right-2 bottom-6 w-44 polaroid" style={{ transform: "rotate(5deg)" }}>
              <span className="tape left-1/2 -translate-x-1/2 -top-3" />
              <img src={campusImg} alt="Vancouver campus moment" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -left-2 bottom-24 sticker" style={{ background: "var(--blush)", transform: "rotate(-10deg)" }}>
              Vancouver mamas
            </div>
          </div>

          {/* COPY */}
          <div className="md:col-span-7 relative">
            <p className="font-hand text-[var(--terracotta)] text-2xl mb-3 -rotate-2">Our story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.1] text-balance">
              我們也曾是<span className="hand-underline">小留學生</span>。
            </h2>
            <div className="mt-8 space-y-5 text-[15px] md:text-base text-foreground/80 leading-[1.95] max-w-xl">
              <p>30 年前，我們各自帶著一只行李箱來到溫哥華 — 第一次自己煮飯、第一次在大雪裡等公車、第一次想家想到睡不著。</p>
              <p>後來我們在這裡成家、生孩子、把孩子送進加拿大的學校。我們站在「學生」和「家長」兩端，知道遠在台灣的爸媽心裡，藏著多少不敢說出口的擔心。</p>
              <p>所以 <span className="font-serif italic text-[var(--terracotta)]">頤珈</span> 不只是一間留學顧問公司。我們是孩子下飛機時迎接的笑臉、是颱風夜會打電話確認的人、是畢業典禮上替家長拍照的阿姨。</p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div className="h-px flex-1 bg-[var(--wood)]/30 max-w-[80px]" />
              <p className="font-serif text-2xl italic text-[var(--navy)]">— Maggie &amp; Katrina</p>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--navy)] link-underline">
              閱讀完整故事 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STUDENT EXPERIENCE — scrapbook gallery ========== */}
      <section className="relative py-24 md:py-36 bg-[var(--cream)] paper-grain overflow-hidden">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="font-hand text-[var(--terracotta)] text-2xl -rotate-2 mb-2">Student life</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.1] max-w-2xl text-balance">
                在溫哥華長大的<br />那些<span className="hand-underline">日常風景</span>。
              </h2>
            </div>
            <p className="max-w-sm text-foreground/70 leading-[1.9] text-[15px]">
              我們記錄每一個孩子的成長 — 從第一堂英文課的緊張，到能自信地在台上 presentation 的那一刻。
            </p>
          </div>

          {/* polaroid wall */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-6">
            {lifeMoments.map((m, i) => (
              <div
                key={i}
                className="polaroid relative w-full"
                style={{ transform: `rotate(${m.rot})` }}
              >
                <span className={`tape ${m.tape}`} style={{ background: i % 2 ? "color-mix(in oklab, var(--sage) 55%, white)" : "color-mix(in oklab, var(--gold) 55%, white)" }} />
                <img src={m.img} alt={m.caption} className="w-full aspect-[4/5] object-cover" />
                <p className="font-hand text-center text-[var(--navy)] text-lg mt-2">{m.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/study-in-vancouver" className="font-hand text-2xl text-[var(--terracotta)] hover:underline underline-offset-4">
              看更多溫哥華的故事 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SERVICES — soft asymmetric cards ========== */}
      <section className="relative py-24 md:py-36 bg-[var(--wood-soft)]/55 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-16 left-1/4 w-72 h-72 rounded-full bg-[var(--sage)]/25 blur-3xl" />
        <div className="container-editorial relative">
          <div className="max-w-2xl mb-16">
            <p className="font-hand text-[var(--terracotta)] text-2xl -rotate-2 mb-2">What we do</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.1] text-balance">
              不是代辦，<br />是<span className="hand-underline">陪伴式</span>留學服務。
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-[var(--cream)] rounded-[28px] p-8 md:p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-[0_4px_24px_-12px_rgba(40,30,20,0.18)] border border-[var(--wood)]/10"
                style={{ transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.6deg"})` }}
              >
                <div className="w-14 h-14 rounded-full bg-[var(--blush)]/60 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <s.icon size={24} className="text-[var(--navy)]" strokeWidth={1.5} />
                </div>
                <p className="font-hand text-[var(--terracotta)] text-lg mb-1">{s.label}</p>
                <h3 className="font-serif text-2xl text-[var(--navy)] leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-[1.85]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[var(--navy)] link-underline">
              所有服務細節 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TRUST QUOTE BAND ========== */}
      <section className="relative py-20 md:py-28 bg-[var(--cream)] paper-grain overflow-hidden">
        <div className="container-editorial grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 relative h-[420px]">
            <div className="absolute inset-4 mask-blob-1 overflow-hidden">
              <img src={homestayWarm} alt="Homestay dinner" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 -right-2 sticker float-slow" style={{ background: "var(--gold)", transform: "rotate(8deg)" }}>
              <HeartHandshake size={14} className="mr-1.5" /> trust
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--navy)] leading-[1.35] italic text-balance">
              「Maggie 半夜還會回我的訊息。我女兒生病那天，她直接開車去學校接她。我們真的把她當家人了。」
            </p>
            <p className="mt-6 text-sm tracking-[0.2em] uppercase text-foreground/60">— 高中生家長 · 台北</p>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={sunsetImg} alt="Vancouver sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/60 via-[var(--navy-deep)]/70 to-[var(--navy-deep)]/85" />
        <div className="relative container-editorial py-24 md:py-32 text-cream text-center">
          <p className="font-hand text-2xl text-[var(--gold)] mb-4 -rotate-2 inline-block">Let’s talk</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            讓孩子安心踏出<br />未來的第一步。
          </h2>
          <p className="mt-7 max-w-xl mx-auto text-cream/85 leading-relaxed">
            從留學申請到海外生活，頤珈陪孩子穩穩走每一段。
          </p>
          <Link to="/consultation" className="inline-flex items-center gap-2 mt-10 bg-[var(--cream)] text-[var(--navy)] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white transition-colors shadow-xl">
            預約免費諮詢 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
