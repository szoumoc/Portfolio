
interface AboutData {
  heading: string;
  body: string;
  updated_at: string;
}

interface AboutSectionProps {
  data?: AboutData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {data?.heading || "Passionate Developer & Problem Solver"}
            </h3>
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              {data?.body ? (
                <p>{data.body}</p>
              ) : (
                <>
                  <p>
                    I'm a full-stack developer with a passion for creating innovative digital solutions. 
                    With expertise in modern web technologies, I enjoy turning complex problems into 
                    simple, beautiful, and intuitive designs.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Django', 'PostgreSQL'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-lg p-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
