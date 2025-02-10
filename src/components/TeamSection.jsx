import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TeamMember = ({ name, role, bio, image, onClick, isCEO }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 cursor-pointer ${
      isCEO ? 'transform scale-100 shadow-xl border-2 border-blue-400' : ''
    }`}
  >
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-top object-center"
      />
    </div>
    <div className="p-6">
      <h3 className={`font-semibold mb-2 ${isCEO ? 'text-1.5xl text-blue-600' : 'text-xl text-blue-600'}`}>
        {name}
      </h3>
      <p className={`font-medium mb-3 ${isCEO ? 'text-lg text-red-500' : 'text-red-500'}`}>
        {role}
      </p>
      <p className="text-gray-600 line-clamp-3">{bio}</p>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg max-w-3xl w-full mx-auto shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const TeamMemberModal = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{member.name}</h2>
            <p className="text-red-500 font-medium mb-4">{member.role}</p>
            <div className="prose max-w-none">
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const teamMembers = [
    {
      name: "Dr. Nelson Atabong",
      role: "Executive Director",
      bio: "A medical doctor with over half a decade experience in community outreach in hard to reach communities, passionate about global health and surgical care, with keen interest in improving standard healthcare in rural communities.",
      image: "/team/ceo_resized.jpg",
      isCEO: true
    },
    {
      name: "Ngamlye Boland Florence-Liz",
      role: "Project Coordinator",
      bio: "Ngamlye Boland Florence-Liz holds a Bachelor of Science in Biomedical science and is currently pursuing a Master's degree in Public Health System Management. Her dedication to making a difference is evident through her volunteer work at the Pacecare Foundation, where she contributes her time and skills to support community health initiatives. In 2024, Ngamlye was crowned Miss FHS-UB, showcasing her talents and passion as a Model/Pageant Queen. With a commitment to personal and professional growth, she is ready to expand her profile with new experiences and achievements as time progresses.",
      image: "/team/project_cord.jpg"
    },
    {
      name: "Mabel Kamz",
      role: "Corporate Communicator and Publicist",
      bio: "Mabel Kamz is a professional corporate communicator and publicist with extensive experience in the field. With several years of expertise, she excels in crafting compelling narratives and managing public relations strategies that elevate brands and foster strong relationships with stakeholders. Mabel's commitment to excellence and her strategic approach make her a valuable asset in any communication initiative.",
      image: "/team/pr.jpg"
    },
    {
      name: "Nkemnguatem Juliet",
      role: "Financial Secretary",
      bio: "Nkemnguatem Juliet is a dedicated and motivated professional with a robust background in International Relations, Project Management, and Human Resources. She is passionate about serving humanity and strives to make a positive impact in her community. With her strong organizational skills and commitment to excellence, Juliet effectively manages financial operations while contributing to the overall success of her team.",
      image: "/team/financial_sect.jpg"
    },
    {
      name: "NGOH NDOBO BIDIE MARIE TELMA",
      role: "Social Media Manager",
      bio: "NGOH NDOBO BIDIE MARIE TELMA is a dynamic professional currently pursuing a Master's degree in Midwifery. Alongside her studies, she serves as a part-time teacher at Veracity Higher Institute in Buea, where she shares her knowledge and passion for education. In addition to her teaching role, Marie Telma is a skilled hair stylist and a talented video editor, showcasing her creativity and versatility in various fields. As a Social Media Manager, she leverages her diverse skill set to enhance online engagement and promote positive brand visibility.",
      image: "/team/social_media.jpg"
    }
  ];

  const ceo = teamMembers.find(member => member.isCEO);
  const otherMembers = teamMembers.filter(member => !member.isCEO);

  return (
    <section id="team" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Our Leadership Team</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the dedicated professionals who drive our mission to improve healthcare access and education in underserved communities.
        </p>
        
        <div className="relative">
          {/* CEO in center */}
          <div className="max-w-lg mx-auto mb-12">
            <TeamMember
              {...ceo}
              onClick={() => setSelectedMember(ceo)}
              isCEO={true}
            />
          </div>
          
          
          {/* Other team members in a circle */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {otherMembers.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <TeamMemberModal 
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};

export default Team;