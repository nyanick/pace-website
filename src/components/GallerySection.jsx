import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const albums = [
    {
      id: 1,
      title: "Mobile Clinics",
      description: "Our mobile healthcare units bringing medical services to remote areas",
      coverImage: "/gallery/image11.jpg",
      images: [
        "/gallery/image12.jpg",
        "/gallery/image13.jpg",
        "/gallery/image14.jpg",
        "/gallery/image15.jpg"
      ]
    },
    {
      id: 2,
      title: "Surgical Care Program",
      description: "Life-changing surgeries provided to those in need",
      coverImage: "/gallery/image1.jpg",
      images: [
        "/gallery/image1.jpg",
        "/gallery/image2.jpg",
        "/gallery/image3.jpg"
      ]
    },
    {
      id: 3,
      title: "Healthcare Training",
      description: "Training sessions for local healthcare workers",
      coverImage: "/gallery/image4.jpg",
      images: [
        "/gallery/image4.jpg",
        "/gallery/image5.jpg",
        "/gallery/image6.jpg",
        "/gallery/image7.jpg"
      ]
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Health education and awareness programs",
      coverImage: "/gallery/image8.jpg",
      images: [
        "/gallery/image8.jpg",
        "/gallery/image9.jpg",
        "/gallery/image10.jpg"
      ]
    }
  ];

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={32} />
      </button>
      <img 
        src={image} 
        alt="Gallery" 
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );

  const AlbumView = ({ album, onBack }) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft /> Back to Albums
        </button>
        <h3 className="text-2xl font-bold">{album.title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {album.images.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`${album.title} ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View Image</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Photo Gallery</h2>
        
        {!selectedAlbum ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div 
                key={album.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedAlbum(album)}
              >
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
                  <p className="text-gray-600 text-sm">{album.description}</p>
                  <p className="text-blue-600 mt-2 text-sm">{album.images.length} photos</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AlbumView 
            album={selectedAlbum} 
            onBack={() => setSelectedAlbum(null)} 
          />
        )}

        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;