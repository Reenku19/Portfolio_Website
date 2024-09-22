import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"

export const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: "AWS Certified Cloud Practitioner",
            org: "Amazon Web Services",
            image: c1,
            credential: "https://www.credly.com/badges/3965d051-17cf-4057-81da-c782ed984787",
        },
        {
            id: 2,
            name: "Docker Essentials",
            org: "IBM",
            image: c2,
            credential: "https://courses.cognitiveclass.ai/certificates/f33c45437e1f4e72af80c259781de815",
        },
        {
            id: 3,
            name: "AWS S3 Basics",
            org: "Coursera",
            image: c3,
            credential: "https://www.coursera.org/account/accomplishments/verify/OEI3ME81PHV9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        },
        {
            id: 4,
            name: "Python For Data Analysis",
            org: "Great Learning",
            image: c4,
            credential: "https://olympus.mygreatlearning.com/courses/47906/certificate",
        },
        {
            id: 5,
            name: "Python Fundamentals",
            org: "Great Learning",
            image: c5,
            credential: "https://www.mygreatlearning.com/certificate/VDUUAVSE",
        },
    ]

    return (
        <div className="bg-black text-white py-20" id="certification">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((certification) => (
                        <div key={certification.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
                            <img src={certification.image} alt={certification.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
                            <h3 className="text-2xl font-bold mb-2">{certification.name}</h3>
                            <p className="text-blue-400 mb-4">{certification.org}</p>
                            <a href={certification.credential} className="inline-block bg-gradient-to-r 
            from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                                rel="noopener noreferrer">Credential</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


