import React from "react";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"


export const Achievements = () => {
    const achievements = [
        {
            id: 1,
            name: "2nd PUC College Topper ",
            org: "Vidya Sankaar PU College",
            image: a1,
        },
        {
            id: 2,
            name: "University 3rd Rank 2022 ",
            org: "Bengaluru City University",
            image: a2,
        },
        {
            id: 3,
            name: "NSS Republic Day Parade",
            org: "Government of Karnataka",
            image: a3,
        },
       
    ]

    return (
        <div className="bg-black text-white py-30" id="achievement">
            <div className="container mx-auto px-6 md:px-12 lg:px-18">
                <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="bg-black p-4 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
                            <img src={achievement.image} alt={achievement.name} className="rounded-md mb-4 w-full
               h-100 object-cover" />
                            <h3 className="text-2xl font-bold mb-2">{achievement.name}</h3>
                            <p className="text-blue-400 mb-4">{achievement.org}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


