import { Fragment } from "react";
import { type ResumeData } from "@/app/lib/resume-data";

export default function SyntaxHighlighter({ data }: { data: ResumeData }) {
  let lineNum = 0;
  const lines: React.ReactNode[] = [];

  function addLine(content: React.ReactNode, indent = 0) {
    lineNum++;
    const num = lineNum;
    lines.push(
      <div key={num} className="flex hover:bg-white/5">
        <span className="w-12 text-right pr-4 text-slate-600 select-none shrink-0 text-xs leading-6">
          {num}
        </span>
        <span
          className="leading-6"
          style={{ paddingLeft: `${indent * 1.25}rem` }}
        >
          {content}
        </span>
      </div>,
    );
  }

  function comment(text: string, indent = 0) {
    addLine(<span className="text-slate-500 italic">// {text}</span>, indent);
  }

  function keyword(text: string) {
    return <span className="text-purple-400">{text}</span>;
  }

  function type(text: string) {
    return <span className="text-yellow-300">{text}</span>;
  }

  function prop(text: string) {
    return <span className="text-blue-300">{text}</span>;
  }

  function str(text: string) {
    return <span className="text-green-400">&quot;{text}&quot;</span>;
  }

  function punct(text: string) {
    return <span className="text-slate-400">{text}</span>;
  }

  // Header comments
  comment("resume.ts — Ryan McGuiness");
  comment("View this resume as a website at rmcguiness.com");
  addLine(null);

  // Interface definition
  addLine(
    <>
      {keyword("interface")} {type("Resume")} {punct("{")}
    </>,
  );
  addLine(
    <>
      {prop("name")}
      {punct(":")} {type("string")}
      {punct(";")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("title")}
      {punct(":")} {type("string")}
      {punct(";")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("contact")}
      {punct(":")} {punct("{")} {prop("email")}
      {punct(":")} {type("string")}
      {punct(";")} {prop("phone")}
      {punct(":")} {type("string")}
      {punct(";")} {prop("github")}
      {punct(":")} {type("string")} {punct("};")}{" "}
    </>,
    1,
  );
  addLine(
    <>
      {prop("summary")}
      {punct(":")} {type("string")}
      {punct(";")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("experience")}
      {punct(":")} {type("Experience")}
      {punct("[];")}{" "}
    </>,
    1,
  );
  addLine(
    <>
      {prop("skills")}
      {punct(":")} {type("Record")}
      {punct("<")}
      {type("string")}
      {punct(",")} {type("string")}
      {punct("[]>;")}{" "}
    </>,
    1,
  );
  addLine(
    <>
      {prop("projects")}
      {punct(":")} {type("Project")}
      {punct("[];")}{" "}
    </>,
    1,
  );
  addLine(
    <>
      {prop("education")}
      {punct(":")} {type("Education")}
      {punct(";")}
    </>,
    1,
  );
  addLine(punct("}"));
  addLine(null);

  // Data object
  addLine(
    <>
      {keyword("const")} {prop("resume")}
      {punct(":")} {type("Resume")} {punct("=")} {punct("{")}
    </>,
  );

  // Simple string fields
  addLine(
    <>
      {prop("name")}
      {punct(":")} {str(data.name)}
      {punct(",")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("title")}
      {punct(":")} {str(data.title)}
      {punct(",")}
    </>,
    1,
  );

  // Contact
  addLine(
    <>
      {prop("contact")}
      {punct(":")} {punct("{")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("email")}
      {punct(":")} {str(data.contact.email)}
      {punct(",")}
    </>,
    2,
  );
  addLine(
    <>
      {prop("phone")}
      {punct(":")} {str(data.contact.phone)}
      {punct(",")}
    </>,
    2,
  );
  addLine(
    <>
      {prop("github")}
      {punct(":")} {str(data.contact.github)}
      {punct(",")}
    </>,
    2,
  );
  addLine(punct("},"), 1);

  // Summary
  addLine(
    <>
      {prop("summary")}
      {punct(":")} {str(data.summary)}
      {punct(",")}
    </>,
    1,
  );

  // Experience
  addLine(null);
  comment("5 years at Perficient across 2 roles", 1);
  addLine(
    <>
      {prop("experience")}
      {punct(":")} {punct("[")}
    </>,
    1,
  );
  data.experience.forEach((job, jobIdx) => {
    addLine(punct("{"), 2);
    addLine(
      <>
        {prop("role")}
        {punct(":")} {str(job.role)}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {prop("company")}
        {punct(":")} {str(job.company)}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {prop("location")}
        {punct(":")} {str(job.location)}
        {punct(",")}
      </>,
      3,
    );
    if (job.period) {
      addLine(
        <>
          {prop("period")}
          {punct(":")} {str(job.period)}
          {punct(",")}
        </>,
        3,
      );
    }
    addLine(
      <>
        {prop("highlights")}
        {punct(":")} {punct("[")}
      </>,
      3,
    );
    job.highlights.forEach((h, i) => {
      addLine(
        <>
          {str(h)}
          {i < job.highlights.length - 1 ? punct(",") : null}
        </>,
        4,
      );
    });
    addLine(punct("],"), 3);
    addLine(
      <>
        {punct("}")}
        {jobIdx < data.experience.length - 1 ? punct(",") : null}
      </>,
      2,
    );
  });
  addLine(punct("],"), 1);

  // Skills
  addLine(null);
  addLine(
    <>
      {prop("skills")}
      {punct(":")} {punct("{")}
    </>,
    1,
  );
  const skillEntries = Object.entries(data.skills);
  skillEntries.forEach(([category, items], catIdx) => {
    addLine(
      <>
        {prop(category)}
        {punct(":")} {punct("[")}
        {items.map((s, i) => (
          <Fragment key={s}>
            {str(s)}
            {i < items.length - 1 ? <>{punct(",")} </> : null}
          </Fragment>
        ))}
        {punct("]")}
        {catIdx < skillEntries.length - 1 ? punct(",") : null}
      </>,
      2,
    );
  });
  addLine(punct("},"), 1);

  // Projects
  addLine(null);
  addLine(
    <>
      {prop("projects")}
      {punct(":")} {punct("[")}
    </>,
    1,
  );
  data.projects.forEach((project, pIdx) => {
    addLine(punct("{"), 2);
    addLine(
      <>
        {prop("name")}
        {punct(":")} {str(project.name)}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {prop("url")}
        {punct(":")} {str(project.url)}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {prop("description")}
        {punct(":")} {str(project.description)}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {prop("stack")}
        {punct(":")} {punct("[")}
        {project.stack.map((s, i) => (
          <Fragment key={s}>
            {str(s)}
            {i < project.stack.length - 1 ? <>{punct(",")} </> : null}
          </Fragment>
        ))}
        {punct("]")}
        {punct(",")}
      </>,
      3,
    );
    addLine(
      <>
        {punct("}")}
        {pIdx < data.projects.length - 1 ? punct(",") : null}
      </>,
      2,
    );
  });
  addLine(punct("],"), 1);

  // Education
  addLine(null);
  addLine(
    <>
      {prop("education")}
      {punct(":")} {punct("{")}
    </>,
    1,
  );
  addLine(
    <>
      {prop("school")}
      {punct(":")} {str(data.education.school)}
      {punct(",")}
    </>,
    2,
  );
  addLine(
    <>
      {prop("degree")}
      {punct(":")} {str(data.education.degree)}
      {punct(",")}
    </>,
    2,
  );
  addLine(
    <>
      {prop("period")}
      {punct(":")} {str(data.education.period)}
      {punct(",")}
    </>,
    2,
  );
  addLine(
    <>
      {prop("location")}
      {punct(":")} {str(data.education.location)}
      {punct(",")}
    </>,
    2,
  );
  addLine(punct("},"), 1);

  addLine(punct("};"));
  addLine(null);
  addLine(
    <>
      {keyword("export default")} {prop("resume")}
      {punct(";")}
    </>,
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-sm font-mono">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="rounded-xl border border-slate-700/50 bg-[#161b22] overflow-hidden shadow-2xl">
          {/* Editor tab bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-slate-400 text-xs">resume.ts</span>
            <span className="ml-auto text-slate-600 text-xs">TypeScript</span>
          </div>
          {/* Code content */}
          <div className="p-4 overflow-x-auto">{lines}</div>
        </div>
      </div>
    </div>
  );
}
