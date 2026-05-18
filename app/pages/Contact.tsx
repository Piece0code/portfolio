import { Mail, Linkedin, Github, MapPin, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-0 last:pb-0">
      <h3
        className="text-xl tracking-tight cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex justify-between items-center bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-neutral-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} 
        />
      </h3>
      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b37f829a-2371-4f0c-a84b-68e3396c7cd7",
          ...formData
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        toast.success("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong with the submission. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send the message. Please check your connection.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 tracking-tight">
                Let’s Work on a Real Problem
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
                If you're dealing with software engineering tasks, inventory challenges, operational inefficiencies, or data that isn’t driving decisions, 
                I can help structure and build systems that make those problems clearer and more manageable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">Email</h3>
                    <a
                      href="mailto:hello@datachain.com"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      neluwah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/nobleeluwah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      linkedin.com/in/nobleeluwah
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">GitHub</h3>
                    <a
                      href="https://github.com/nobleenia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      github.com/nobleenia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 tracking-tight">Location</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Rouen, Normandie, France.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg mb-2 tracking-tight">
                  Available for Consulting
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Available for software engineering gigs, projects inventory and operational decision systems — helping businesses reduce stockouts, avoid excess inventory, and make clearer, data-driven decisions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-neutral-900 dark:focus:border-neutral-500 outline-none transition-colors resize-none"
                    placeholder="Briefly describe your problem, your current setup, and what you're trying to improve."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="mt-6 text-sm text-neutral-550 dark:text-neutral-500">
                I typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FaqItem question="What types of projects do you work on?">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I am unrestricted, though I specialize in supply chain optimization, demand forecasting,
                inventory management, and building data-driven decision systems.
                I work on both consulting projects and full-time opportunities.
              </p>
            </FaqItem>
            
            <FaqItem question="What is your typical engagement model?">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I work on both project-based and retainer arrangements,
                depending on the scope and timeline. I'm flexible and can adapt
                to your team's needs.
              </p>
            </FaqItem>
            
            <FaqItem question="Do you offer training or workshops?">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Yes, I conduct workshops and training sessions on data science,
                machine learning, and optimization for supply chain teams.
                Contact me to discuss your specific needs.
              </p>
            </FaqItem>
            
            <FaqItem question="Who are your target clients?">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I typically work with e-commerce sellers, small businesses, 
                teams looking to improve operational decision-making. 
                I also work for enterprises (research laboratories) who need an interdiscilined software engineer
              </p>
            </FaqItem>
          </div>
        </div>
      </section>
    </div>
  );
}
