import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

export default function Education() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-50 rounded-xl px-8 py-6 border border-slate-200"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Education</h2>
            <p className="text-lg text-blue-600 font-medium">
              Lehigh University
            </p>
            <p className="text-slate-700">
              BS Double Major: Computer Science & Economics
            </p>
          </div>
          <div className="mt-3 md:mt-0 md:text-right">
            <p className="font-medium text-slate-600">
              January 2018 - May 2021
            </p>
            <p className="text-sm text-slate-500">Bethlehem, PA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
