import React, { useState } from 'react';
import { MapPin, Users, Book, HeartPulse, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Map } from 'lucide-react';
import GallerySection from './components/GallerySection';
import CEOLetter from './components/CEOLetter';
import Hero from './components/Hero';
import Team from './components/TeamSection';
import emailjs from 'emailjs-com'; // For sending emails

// Initialize EmailJS (replace with your credentials)
emailjs.init('eKByXxFaEXFPUigzF');

// Color palette
const colors = {
  red: '#FF4136',
  pink: '#FF1493',
  green: '#2ECC40',
  blue: '#0074D9',
  white: '#FFFFFF',
};

const Logo = () => (
  <img src="/peace_logo.png" alt="PaceCare Association Logo" width="120" height="80" />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#programs" className="hover:text-red-500">Programs</a></li>
            <li><a href="#team" className="hover:text-red-500">Team</a></li>
            <li><a href="#gallery" className="hover:text-red-500">Gallery</a></li>
            <li><a href="#impact" className="hover:text-red-500">Impact</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const About = () => (
  <section id="about" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About PaceCare Association</h2>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img src="/healthcareworkers3.jpg" alt="Healthcare workers in action" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <p className="text-lg mb-4 text-gray-700">PaceCare Association is a non-profit, non-governmental organization committed to revolutionizing healthcare access and education in underserved communities. Our mission is to bridge the gap between quality healthcare and those who need it most.</p>
          <p className="text-lg mb-4 text-gray-700">Founded in 2015, we have grown from a small local initiative to a recognized force in healthcare advocacy and service delivery. Our team of dedicated professionals and volunteers work tirelessly to bring about positive change in the health sector.</p>
          <a href="#" className="text-red-500 font-semibold hover:underline">Learn more about our history</a>
        </div>
      </div>
    </div>
  </section>
);

const ProgramCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 border-t-4" style={{ borderColor: color }}>
    <Icon size={48} style={{ color }} className="mb-4" />
    <h3 className="text-xl font-semibold mb-2" style={{ color }}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Programs = () => (
  <section id="programs" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProgramCard
          icon={MapPin}
          title="Healthcare Access"
          description="Bringing medical services to hard-to-reach communities through mobile clinics and telemedicine."
          color={colors.red}
        />
        <ProgramCard
          icon={HeartPulse}
          title="Surgical Care"
          description="Improving access to essential surgical procedures in rural areas through partnerships with local hospitals."
          color={colors.pink}
        />
        <ProgramCard
          icon={Users}
          title="Capacity Building"
          description="Training healthcare workers and providing resources to strengthen local healthcare systems."
          color={colors.green}
        />
        <ProgramCard
          icon={Book}
          title="Health Education"
          description="Promoting health literacy and advocating for better health policies to create lasting change."
          color={colors.blue}
        />
      </div>
    </div>
  </section>
);

const ImpactCounter = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-blue-600 mb-2">{value}+</p>
    <p className="text-lg">{label}</p>
  </div>
);

const Impact = () => (
  <section id="impact" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <ImpactCounter value="100,000" label="Patients Treated" />
        <ImpactCounter value="500" label="Surgeries Performed" />
        <ImpactCounter value="1,000" label="Healthcare Workers Trained" />
        <ImpactCounter value="50" label="Communities Served" />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <p className="text-lg italic mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

const Testimonials = () => (
  <section className="bg-blue-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          quote="PaceCare Association's mobile clinic saved my life. I couldn't afford to travel for treatment, but they brought healthcare right to our village."
          author="Maria S., Rural Community Member"
        />
        <TestimonialCard
          quote="The training I received from PaceCare has dramatically improved my ability to serve my patients. Their capacity building program is truly transformative."
          author="Dr. James O., Local Healthcare Provider"
        />
        <TestimonialCard
          quote="Thanks to PaceCare's advocacy, our community now has a fully equipped health center. Their commitment to policy change is making a real difference."
          author="Chief Amina L., Community Leader"
        />
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I donate to PaceCare Association?",
      answer: "You can donate through our website, by mail, or by contacting our donations team. We accept various payment methods to make it convenient for our supporters."
    },
    {
      question: "How can I volunteer with PaceCare Association?",
      answer: "We welcome volunteers with various skills. You can apply through our website or contact our volunteer coordinator for more information on current opportunities."
    },
    {
      question: "Where does PaceCare Association operate?",
      answer: "We primarily operate in underserved rural and urban areas across the country, with plans to expand our reach internationally in the coming years."
    },
    {
      question: "How is my donation used?",
      answer: "Your donation goes directly towards our programs, including mobile clinics, surgical care, training healthcare workers, and health education initiatives. We ensure maximum impact with minimal overhead costs."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .send('service_gnhn3se', 'template_kzfplpm', formData)
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email.', error);
          setIsError(true);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
            <p className="text-lg mb-4 text-gray-700">
              We’d love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" />
                <p className="text-gray-700">info@pacecare.org</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" />
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Map className="text-blue-600" />
                <p className="text-gray-700">123 Tiko Street, South West, HC 12345</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {isSuccess && (
                <p className="text-green-600 mt-2">Message sent successfully!</p>
              )}
              {isError && (
                <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-blue-600 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <Logo />
          <p className="mt-2">Bringing healthcare to every corner.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Programs</a></li>
            <li><a href="#" className="hover:underline">Donate</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <p>123 Tiko Street</p>
          <p>South West, HC 12345</p>
          <p>Phone: (+237) 673-018-437</p>
          <p>Email: info@pacecare.org</p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/profile.php?id=100093901872968" className="hover:text-blue-200"><Facebook /></a>
            <a href="#" className="hover:text-blue-200"><Twitter /></a>
            <a href="#" className="hover:text-blue-200"><Instagram /></a>
            <a href="#" className="hover:text-blue-200"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 PaceCare Association. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <CEOLetter />
      <About />
      <Programs />
      <Team />
      <Impact />
      <GallerySection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;