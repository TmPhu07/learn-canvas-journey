import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { JourneySection } from "@/components/portfolio/JourneySection";
import { SummarySection } from "@/components/portfolio/SummarySection";
import { profile } from "@/data/portfolioData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trần Minh Phú · Portfolio Công nghệ số & AI" },
      {
        name: "description",
        content:
          "Digital Learning Journal của Trần Minh Phú — nhật ký học tập số môn Nhập môn Công nghệ số & Trí tuệ nhân tạo.",
      },
      { property: "og:title", content: "Trần Minh Phú · Portfolio Công nghệ số & AI" },
      {
        property: "og:description",
        content:
          "Nhật ký học tập số ghi lại hành trình, bài tập và sản phẩm cá nhân môn Nhập môn Công nghệ số & Trí tuệ nhân tạo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <JourneySection />
        <SummarySection />
      </main>
      <footer className="border-t border-border px-4 py-10 text-center">
        <p className="font-display text-lg font-bold gradient-ocean-text">{profile.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          MSSV {profile.studentId} · {profile.major}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Digital Learning Journal · Nhập môn Công nghệ số & Trí tuệ nhân tạo
        </p>
      </footer>
    </div>
  );
}
