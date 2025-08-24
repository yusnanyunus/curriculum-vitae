type TimelineItem = {
  id: number;
  title: string;
  company: string;
  date: string;
};

const items: TimelineItem[] = [
  { id: 4, title: "Subject Matter Expert System Analyst", company: "PT. Hadji Kalla (Holding)", date: "Feb 2025 - Present" },
  { id: 3, title: "Application Support - Senior Analyst", company: "PT. Hadji Kalla (Holding)", date: "Mar 2021 - Jan 2025" },
  { id: 2, title: "Application Support - Analyst", company: "PT. Haka Sarana Investama", date: "Sep 2018 - Jan 2021" },
  { id: 1, title: "IT & System Support - Staff", company: "PT. Kalla Inti Karsa", date: "Feb 2015 - Sep 2018" },
];

export default function Experience() {
  return (
<div id="experience" className="bg-white-100 min-h-screen py-10">
    <section className="relative mx-auto max-w-5xl min-h-screen py-18 px-6 md:px-21">
      {/* garis tengah penuh */}
      <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-400" />
      <h2 className="md:hidden text-4xl font-bold text-center text-gray-800 uppercase tracking-widest mb-2">
        Job Experience
      </h2>
      
      {/* PERUBAHAN DI SINI */}
      {/* Mengatur jarak (gap) yang berbeda: rapat di mobile, jauh di desktop */}
      <div className="flex flex-col gap-y-0 md:gap-y-20">
        {items.map((it, i) => (
          <div
            key={it.id}
            className={`grid grid-cols-1 md:grid-cols-[1fr_2rem_1fr] items-center 
              ${i === 0 ? "mt-20 md:mt-0" : ""} 
              ${i === items.length - 1 ? "mb-20 md:mb-0" : ""}`}
          >
            {/* Mengatur urutan item agar item genap di kiri dan ganjil di kanan */}
            {i % 2 === 0 ? (
              <>
                <div className="justify-self-end w-full max-w-xl">
                  <Card it={it} />
                </div>
                <CenterDot />
                <div />
              </>
            ) : (
              <>
                <div />
                <CenterDot />
                <div className="justify-self-start w-full max-w-xl">
                  <Card it={it} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
      </div>
  );
}

function Card({ it }: { it: TimelineItem }) {
  return (
    <div className="rounded-2xl border bg-white p-3 shadow-md boxExp">
      <p className="text-sm text-gray-500">{it.date}</p>
      <h3 className="mt-1 text-xl font-bold leading-6">{it.title}</h3>
      <p className="mt-1 text-gray-700">{it.company}</p>
    </div>
  );
}

function CenterDot() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="hidden md:block h-5 w-5 rounded-full bg-[#061866] ring-4 ring-white shadow animate-pulse" />
    </div>
  );
}