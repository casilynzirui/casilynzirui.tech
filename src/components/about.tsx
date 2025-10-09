export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#F7EEE9]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold mb-12 text-[#5d3136]">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              I'm passionate about creating digital experiences that blend technology with creativity. 
              My journey spans across web development, design, and exploring the latest in tech innovation.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me experimenting with new frameworks, contributing to open source projects, 
              or sharing insights about the ever-evolving world of web development.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#5d3136]">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-[#5d3136] text-white rounded-full text-sm">GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}