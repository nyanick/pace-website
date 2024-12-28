import React from 'react';

const TeamMember = ({ name, role, bio, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{name}</h3>
      <p className="text-red-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Nelson Atabong",
      role: "Executive Director",
      bio: "With over 15 years of experience in healthcare management, Dr. Nelson leads our strategic initiatives and oversees all program operations.",
      image: "/gallery/image1.jpg"
    },
    {
      name: "Dr. Yanick Che",
      role: "Medical Director",
      bio: "A skilled surgeon with extensive experience in rural healthcare, Dr. Chen supervises our medical programs and surgical initiatives.",
      image: "/gallery/image2.jpg"
    },
    {
      name: "Agbor Yannick",
      role: "Community Outreach Director",
      bio: "Emily brings 10 years of experience in public health and community engagement, leading our grassroots initiatives.",
      image: "/gallery/image3.jpg"
    },
    {
      name: "Dr. Atabong Nelson",
      role: "Training Program Director",
      bio: "An experienced medical educator, Dr. Okonjo heads our capacity building programs and healthcare worker training initiatives.",
      image: "/gallery/image3.jpg"
    }
  ];

  return (
    <section id="team" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Our Leadership Team</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the dedicated professionals who drive our mission to improve healthcare access and education in underserved communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;