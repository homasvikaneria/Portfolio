// Sujal_portfolio/src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, MapPin, User, Phone } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [state, handleSubmit] = useForm("xldjogoz");

  const contactDetails = [
    {
      icon: <User className="w-6 h-6 text-[#ff3399]" />,
      title: 'Name',
      value: 'Homasvi Kaneria',
    },
    {
      icon: <Mail className="w-6 h-6 text-[#00ffcc]" />,
      title: 'Email',
      value: 'homasvi.kaneria.cg@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#ff3399]" />,
      title: 'Phone',
      value: '+91 12345 67890',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00ffcc]" />,
      title: 'Location',
      value: 'Ahmedabad, Gujarat, India',
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section ref={ref} className="min-h-screen py-24 bg-[#0e0517]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
          >
            <div className="space-y-6">
              {contactDetails.map((info, i) => (
                <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
                  <motion.div
                    variants={fadeUp}
                    custom={i + 2}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="bg-[#1a1a2e]/60 border border-white/10 backdrop-blur-md p-4 rounded-2xl hover:shadow-[0_0_20px_#ff3399] transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-[#151525]">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-400">{info.title}</h4>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={6}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a2e]/60 border border-white/10 backdrop-blur-md p-8 rounded-2xl text-white hover:shadow-[0_0_20px_#00ffcc] transition duration-300"
            >
              {state.succeeded ? (
                <p className="text-[#00ffcc] text-center text-lg font-semibold">
                  Thanks for reaching out!
                </p>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#151525] border border-[#2c2c3e] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-[#151525] border border-[#2c2c3e] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00ffcc] transition-colors h-32"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
