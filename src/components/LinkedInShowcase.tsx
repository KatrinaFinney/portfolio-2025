const posts = [
    {
      title: "UML diagrams, explained in conversation",
      activityId: "7417239634910334977",
      link:
        "https://www.linkedin.com/posts/katrina-finney_i-ran-into-jamison-norwood-at-the-pyatl-meetup-activity-7417239634910334977-Qeg_",
    },
    {
      title: "My go-to developer tool: VS Code",
      activityId: "7391155605375340544",
      link:
        "https://www.linkedin.com/posts/katrina-finney_devrel-webdev-developertools-activity-7391155605375340544-braa",
    },
    {
      title: "Why tiny commits save debugging time",
      activityId: "7386079418722447360",
      link:
        "https://www.linkedin.com/posts/katrina-finney_sugarybytes-cleancode-softwareengineering-activity-7386079418722447360-PftI",
    },
  ];
  
  export default function LinkedInShowcase() {
    return (
      <section
        className="bg-gray-800/70 py-14 sm:py-20"
        aria-labelledby="linkedin-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-semibold tracking-[0.3em] text-purple-300">
            TEACHING IN PUBLIC
          </p>
  
          <h2
            id="linkedin-heading"
            className="gradient-text mt-3 text-center text-3xl font-bold sm:text-4xl"
          >
            Technical content & conversations
          </h2>
  
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-gray-300">
            I translate engineering ideas into practical, approachable
            lessons through demos, videos, and community conversations.
          </p>
  
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.activityId}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-xl"
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.activityId}`}
                  title={post.title}
                  className="h-[420px] w-full border-0 bg-white sm:h-[500px]"
                  loading="lazy"
                  allowFullScreen
                />
  
                <div className="p-4">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-300"
                  >
                    Open on LinkedIn ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
