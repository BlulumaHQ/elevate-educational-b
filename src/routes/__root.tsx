import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.3em] text-wood uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl text-primary">頁面不存在</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          您要尋找的頁面已不存在或已被移動。
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-navy-deep"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-primary">頁面載入發生問題</h1>
        <p className="mt-3 text-sm text-muted-foreground">請重新整理或返回首頁。</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy-deep"
          >
            重試
          </button>
          <a href="/" className="border border-border bg-background px-5 py-2.5 text-sm">
            返回首頁
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      {
        name: "description",
        content:
          "頤珈國際教育提供加拿大溫哥華留學、遊學、寄宿家庭、學生簽證與在地生活支援服務。30 年加拿大在地經驗，陪伴孩子安心成長。",
      },
      { name: "author", content: "Elevate International Education" },
      { property: "og:title", content: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      {
        property: "og:description",
        content:
          "30 年加拿大在地經驗，陪伴孩子安心融入溫哥華生活與教育環境。",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Elevate International Education" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      { name: "description", content: "Elevate Vancouver is a premium Canadian education consultancy website for Taiwanese families." },
      { property: "og:description", content: "Elevate Vancouver is a premium Canadian education consultancy website for Taiwanese families." },
      { name: "twitter:description", content: "Elevate Vancouver is a premium Canadian education consultancy website for Taiwanese families." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6183ccc7-3e89-421a-9a75-e62d8017f9a1/id-preview-c676a62a--d212407f-e13d-46e8-9e91-afd43f82dc00.lovable.app-1779413004391.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6183ccc7-3e89-421a-9a75-e62d8017f9a1/id-preview-c676a62a--d212407f-e13d-46e8-9e91-afd43f82dc00.lovable.app-1779413004391.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Noto+Sans+TC:wght@300;400;500;600&family=Noto+Serif+TC:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
