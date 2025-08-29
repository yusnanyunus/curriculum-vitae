import { FC } from 'react';

type EducationItem = {
  university: string;
  degree: string;
  years: string;
};

// Data dummy untuk pendidikan
const items: EducationItem[] = [
    {
        years: '2009 - 2014',
        degree: 'Bachelor Degree, Information Systems',
        university: 'Universitas Dipa Makassar',
    },
    {
        years: '2006 - 2009',
        degree: 'High School Diploma',
        university: 'LPP UMI Makassar',
    },
    {
        years: '2003 - 2006',
        degree: 'Junior High School Diploma',
        university: 'Islam Athirah Makassar',
    },
    {
        years: '1997 - 2003',
        degree: 'Elementary School Diploma',
        university: 'Negeri Patompo Makassar',
    },
];

export default function Education() {
    return (
<div id="education" className="bg-[#cfcfcf] min-h-screen py-10">
    <section className="relative mx-auto max-w-5xl min-h-screen py-18 px-6 md:px-21">
      {/* garis tengah penuh */}
      <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-400" />
      <h2 className="md:hidden text-4xl font-bold text-center text-gray-800 uppercase tracking-widest mb-2">
        Education
      </h2>

      {/* Mengatur jarak (gap) yang berbeda: rapat di mobile, jauh di desktop */}
      <div className="flex flex-col gap-y-0 md:gap-y-20">
        {items.map((ed, i) => (
          <div
            key={ed.years}
            className={`grid grid-cols-1 md:grid-cols-[1fr_2rem_1fr] items-center 
              ${i === 0 ? "mt-20 md:mt-0" : ""} 
              ${i === items.length - 1 ? "mb-20 md:mb-0" : ""}`}
          >
            {/* Mengatur urutan item agar item genap di kiri dan ganjil di kanan */}
            {i % 2 === 0 ? (
              <>
                <div className="justify-self-end w-full max-w-xl">
                  <Card ed={ed} />
                </div>
                <CenterDot />
                <div />
              </>
            ) : (
              <>
                <div />
                <CenterDot />
                <div className="justify-self-start w-full max-w-xl">
                  <Card ed={ed} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
</div>
    );
};

function Card({ ed }: { ed: EducationItem }) {
  return (
    <div className="rounded-2xl border bg-white p-3 shadow-md boxEdu">
      <p className="text-sm text-gray-500">{ed.years}</p>
      <h3 className="mt-1 text-xl font-bold leading-6">{ed.degree}</h3>
      <p className="mt-1 text-gray-700">{ed.university}</p>
    </div>
  );
}

function CenterDot() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="hidden md:block h-5 w-5 rounded-full bg-[#2303a3] ring-4 ring-white shadow animate-bounce" />
    </div>
  );
}