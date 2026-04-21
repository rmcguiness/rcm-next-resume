import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../lib/animations";

export default function Skills() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          <SkillCard
            title="Frontend"
            skills={["TypeScript", "JavaScript", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]}
            color="blue"
          />
          <SkillCard
            title="Backend"
            skills={["Node.js", "PHP", "Python"]}
            color="green"
          />
          <SkillCard
            title="Databases"
            skills={["PostgreSQL", "Supabase"]}
            color="purple"
          />
          <SkillCard
            title="Tools & Practices"
            skills={["Git", "Jest", "Figma", "CI/CD", "Docker"]}
            color="orange"
          />
        </motion.div>
      </div>
    </section>
  );
}

const colorMap = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
} as const;

function SkillCard({
  title,
  skills,
  color,
}: {
  title: string;
  skills: string[];
  color: keyof typeof colorMap;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 border border-slate-200"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
