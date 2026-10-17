const projects = [
  {
    number: "01",
    title: "수업 실습 프로젝트",
    description: "Next.js와 MongoDB를 활용한 웹 개발 실습",
    tags: ["Next.js", "MongoDB"],
    github: "https://github.com/hwj634/myapp2",
    demo: "https://myapp2-brown.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf0] px-5 py-8 text-[#51452f] sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* 상단 메뉴 */}
        <header className="flex items-center justify-between border-b border-[#eadfca] pb-5">
          <a href="#" className="text-[#e9b928]">
            한우정<span className="text-[#e9b928]">.프로젝트 포트폴리오🐰</span>
          </a>

          <a
            href="#projects"
            className="rounded-full bg-[#fff0a8] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
          >
            프로젝트 보기 ↗
          </a>
        </header>

        {/* 자기소개 */}
        <section className="grid items-center gap-8 py-16 sm:grid-cols-[1.2fr_0.8fr] sm:py-24">
          <div>
            <span className="inline-block rounded-full border border-[#eadfca] bg-white px-4 py-2 text-sm">
              ✨ MY LITTLE PORTFOLIO
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              안녕하세요
              <br />
              한우정입니다<span className="text-[#e9b928]">.</span>
              <br />
              <span className="text-[#d4a51b]">배우고 있어요</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-[#786c58]">
              새로운 걸 배우고 웹 개발 프로젝트가 너무 재밌어요
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-[#51452f] px-5 py-3 font-bold text-white transition hover:bg-[#766344]"
              >
                프로젝트 보기 →
              </a>

              <a
                href="https://github.com/hwj634"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#dfd2ba] bg-white px-5 py-3 font-bold transition hover:bg-[#fff2c7]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* 우사기 느낌의 장식 영역 */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="flex aspect-square flex-col items-center justify-center rounded-[3rem] border-2 border-[#f0dfa1] bg-[#fff0a8] p-6 text-center shadow-[8px_8px_0px_#f0dfa1]">
              <div className="text-8xl" aria-label="토끼 장식">
                🐰
              </div>
              <p className="mt-5 text-2xl font-black">내가 여태 한 것들</p>
              <p className="mt-2 text-sm text-[#786c58]"></p>
              <div className="mt-5 flex gap-2 text-xl">
                <span>⭐</span>
                <span>🌼</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="border-t border-[#eadfca] py-10">
          <p className="text-sm font-bold tracking-widest text-[#a18b62]">
            WHAT I AM LEARNING
          </p>
          <h2 className="mt-2 text-2xl font-black">요즘 배우는 것들</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Next.js",
              "보안 운영체제",
              "MongoDB",
              "JavaScript",
              "보안 알고리즘",
              "웹서버 보안 프로그래밍",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#eadfca] bg-white px-4 py-2 text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 프로젝트 목록 */}
        <section id="projects" className="scroll-mt-8 py-12">
          <p className="text-sm font-bold tracking-widest text-[#a18b62]">
            MY PROJECTS
          </p>
          <h2 className="mt-2 text-3xl font-black"></h2>
          <p className="mt-3 text-[#786c58]">
            수업에서 배운 내용을 바탕으로 진행한 프로젝트입니다. Next.js와
            MongoDB를 활용하여 웹 개발 실습을 진행했습니다.
          </p>

          <div className="mt-7 grid gap-5">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-3xl border border-[#eadfca] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#fff0a8] px-3 py-1 text-sm font-black">
                    PROJECT {project.number}
                  </span>
                  <span className="text-sm text-[#8b7b5f]">
                    WEB DEVELOPMENT
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black">{project.title}</h3>
                <p className="mt-3 text-[#786c58]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#f7f2e7] px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[#51452f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#766344]"
                  >
                    GitHub 저장소 ↗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-[#dfd2ba] px-4 py-3 text-sm font-bold transition hover:bg-[#fff2c7]"
                  >
                    배포 사이트 ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 하단 */}
        <footer className="mt-10 border-t border-[#eadfca] py-7 text-center text-sm text-[#8b7b5f]"></footer>
      </div>
    </main>
  );
}
