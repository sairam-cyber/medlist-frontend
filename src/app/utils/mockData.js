// Mock data for the healthcare application

// Image pools for random assignment - Using web URLs for doctors
const doctorImages = [
    'https://ui-avatars.com/api/?name=Dr+Rajesh+Kumar&background=4A90E2&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Anil+Sharma&background=E74C3C&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Sunita+Reddy&background=2ECC71&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Karthik+Iyer&background=9B59B6&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Pradeep+Gupta&background=F39C12&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Meera+Joshi&background=1ABC9C&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Ramesh+Patel&background=E67E22&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Kavita+Deshmukh&background=3498DB&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Ashok+Mehta&background=95A5A6&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Neha+Kapoor&background=34495E&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Priya+Sharma&background=16A085&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Anjali+Verma&background=27AE60&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Rekha+Nair&background=2980B9&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Sunita+Patel&background=8E44AD&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Kavita+Singh&background=C0392B&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Meera+Reddy&background=D35400&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Pooja+Khanna&background=7F8C8D&color=fff&size=200',
    'https://ui-avatars.com/api/?name=Dr+Shweta+Desai&background=BDC3C7&color=333&size=200',
    'https://ui-avatars.com/api/?name=Dr+Nisha+Agarwal&background=F1C40F&color=333&size=200',
    'https://ui-avatars.com/api/?name=Dr+Ritu+Malhotra&background=E8DAEF&color=333&size=200',
    'https://ui-avatars.com/api/?name=Dr+Amit+Patel&background=D5F4E6&color=333&size=200',
    'https://ui-avatars.com/api/?name=Dr+Suresh+Kumar&background=AED6F1&color=333&size=200',
    'https://ui-avatars.com/api/?name=Dr+Rajiv+Menon&background=FADBD8&color=333&size=200'
];

const medicineImages = [
    'https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Medicine',
    'https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=Pills',
    'https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=Tablets',
    'https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=Capsules',
    'https://via.placeholder.com/200x200/F39C12/FFFFFF?text=Syrup',
    'https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=Drops',
    'https://via.placeholder.com/200x200/E67E22/FFFFFF?text=Injection',
    'https://via.placeholder.com/200x200/3498DB/FFFFFF?text=Inhaler',
    'https://via.placeholder.com/200x200/F1C40F/FFFFFF?text=Vitamin',
    'https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=Supplement',
    'https://via.placeholder.com/200x200/C0392B/FFFFFF?text=Antibiotic',
    'https://via.placeholder.com/200x200/16A085/FFFFFF?text=Painkiller',
    'https://via.placeholder.com/200x200/27AE60/FFFFFF?text=Medication'
];

// Helper function to get random image
const getRandomImage = (imageArray, index) => {
    return imageArray[index % imageArray.length];
};

export const mockDoctors = [
    // Cardiologists (10)
    {
        _id: "c1",
        name: "Dr. Rajesh Kumar",
        specialty: "Cardiologist",
        experience: "15 years",
        rating: 4.8,
        fees: "₹1500",
        location: "Apollo Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Specialized in interventional cardiology with expertise in angioplasty and heart disease management.",
        image: getRandomImage(doctorImages, 0),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "c2",
        name: "Dr. Anil Sharma",
        specialty: "Cardiologist",
        experience: "20 years",
        rating: 4.9,
        fees: "₹2000",
        location: "Fortis Hospital, Mumbai",
        consultationType: "Hospital",
        languages: ["Hindi", "English", "Marathi"],
        bio: "Expert in cardiac surgery and heart transplants with international experience.",
        image: getRandomImage(doctorImages, 1),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "c3",
        name: "Dr. Sunita Reddy",
        specialty: "Cardiologist",
        experience: "12 years",
        rating: 4.7,
        fees: "₹1300",
        location: "Max Hospital, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Telugu"],
        bio: "Specialized in preventive cardiology and non-invasive cardiac procedures.",
        image: getRandomImage(doctorImages, 2),
        availability: {
            hospital: ["Monday", "Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "c4",
        name: "Dr. Karthik Iyer",
        specialty: "Cardiologist",
        experience: "18 years",
        rating: 4.8,
        fees: "₹1800",
        location: "Medanta Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Expert in electrophysiology and cardiac rhythm management.",
        image: getRandomImage(doctorImages, 3),
        availability: {
            hospital: ["Wednesday", "Friday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "c5",
        name: "Dr. Pradeep Gupta",
        specialty: "Cardiologist",
        experience: "22 years",
        rating: 4.9,
        fees: "₹2200",
        location: "AIIMS, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English"],
        bio: "Renowned for complex cardiac surgeries and valve replacements.",
        image: getRandomImage(doctorImages, 4),
        availability: {
            hospital: ["Monday", "Wednesday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "c6",
        name: "Dr. Meera Joshi",
        specialty: "Cardiologist",
        experience: "14 years",
        rating: 4.6,
        fees: "₹1400",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Specialized in pediatric cardiology and congenital heart defects.",
        image: getRandomImage(doctorImages, 5),
        availability: {
            hospital: ["Tuesday", "Thursday", "Friday"],
            timeSlots: ["11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "c7",
        name: "Dr. Ramesh Patel",
        specialty: "Cardiologist",
        experience: "16 years",
        rating: 4.7,
        fees: "₹1600",
        location: "Narayana Health, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Expert in heart failure management and cardiac rehabilitation.",
        image: getRandomImage(doctorImages, 6),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "c8",
        name: "Dr. Kavita Deshmukh",
        specialty: "Cardiologist",
        experience: "11 years",
        rating: 4.5,
        fees: "₹1200",
        location: "Manipal Hospital, Pune",
        consultationType: "Both",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Focused on women's heart health and preventive cardiology.",
        image: getRandomImage(doctorImages, 7),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM"]
        }
    },
    {
        _id: "c9",
        name: "Dr. Ashok Mehta",
        specialty: "Cardiologist",
        experience: "25 years",
        rating: 4.9,
        fees: "₹2500",
        location: "Fortis Escorts, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English", "Punjabi"],
        bio: "Pioneer in minimally invasive cardiac procedures in India.",
        image: getRandomImage(doctorImages, 8),
        availability: {
            hospital: ["Monday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "c10",
        name: "Dr. Neha Kapoor",
        specialty: "Cardiologist",
        experience: "13 years",
        rating: 4.7,
        fees: "₹1350",
        location: "Max Hospital, Delhi",
        consultationType: "Both",
        languages: ["English", "Hindi"],
        bio: "Specialized in cardiac imaging and non-invasive diagnostics.",
        image: getRandomImage(doctorImages, 9),
        availability: {
            hospital: ["Wednesday", "Friday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },

    // Gynecologists (10)
    {
        _id: "g1",
        name: "Dr. Priya Sharma",
        specialty: "Gynecologist",
        experience: "12 years",
        rating: 4.9,
        fees: "₹1200",
        location: "Fortis Hospital, Mumbai",
        consultationType: "Both",
        languages: ["Hindi", "English", "Marathi"],
        bio: "Expert in high-risk pregnancies and minimally invasive gynecological surgeries.",
        image: getRandomImage(doctorImages, 10),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "g2",
        name: "Dr. Anjali Verma",
        specialty: "Gynecologist",
        experience: "15 years",
        rating: 4.8,
        fees: "₹1400",
        location: "Apollo Hospital, Chennai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Specialized in infertility treatment and IVF procedures.",
        image: getRandomImage(doctorImages, 11),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "g3",
        name: "Dr. Rekha Nair",
        specialty: "Gynecologist",
        experience: "18 years",
        rating: 4.9,
        fees: "₹1600",
        location: "Cloudnine Hospital, Bangalore",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Malayalam"],
        bio: "Expert in maternal-fetal medicine and high-risk obstetrics.",
        image: getRandomImage(doctorImages, 12),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "g4",
        name: "Dr. Sunita Patel",
        specialty: "Gynecologist",
        experience: "10 years",
        rating: 4.7,
        fees: "₹1000",
        location: "Lilavati Hospital, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Focused on adolescent gynecology and menstrual disorders.",
        image: getRandomImage(doctorImages, 13),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "g5",
        name: "Dr. Kavita Singh",
        specialty: "Gynecologist",
        experience: "20 years",
        rating: 4.9,
        fees: "₹1800",
        location: "Max Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Renowned for laparoscopic surgeries and endometriosis treatment.",
        image: getRandomImage(doctorImages, 14),
        availability: {
            hospital: ["Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "g6",
        name: "Dr. Meera Reddy",
        specialty: "Gynecologist",
        experience: "14 years",
        rating: 4.8,
        fees: "₹1300",
        location: "Rainbow Hospital, Hyderabad",
        consultationType: "Both",
        languages: ["English", "Hindi", "Telugu"],
        bio: "Specialized in prenatal care and normal deliveries.",
        image: getRandomImage(doctorImages, 15),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM"]
        }
    },
    {
        _id: "g7",
        name: "Dr. Pooja Khanna",
        specialty: "Gynecologist",
        experience: "11 years",
        rating: 4.6,
        fees: "₹1100",
        location: "Fortis Hospital, Noida",
        consultationType: "Both",
        languages: ["English", "Hindi"],
        bio: "Expert in gynecological oncology and cancer screening.",
        image: getRandomImage(doctorImages, 16),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "g8",
        name: "Dr. Shweta Desai",
        specialty: "Gynecologist",
        experience: "16 years",
        rating: 4.8,
        fees: "₹1500",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Specialized in urogynecology and pelvic floor disorders.",
        image: getRandomImage(doctorImages, 17),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "g9",
        name: "Dr. Nisha Agarwal",
        specialty: "Gynecologist",
        experience: "13 years",
        rating: 4.7,
        fees: "₹1250",
        location: "Manipal Hospital, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Focused on PCOS management and hormonal disorders.",
        image: getRandomImage(doctorImages, 18),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "g10",
        name: "Dr. Ritu Malhotra",
        specialty: "Gynecologist",
        experience: "19 years",
        rating: 4.9,
        fees: "₹1700",
        location: "Medanta Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Expert in cosmetic gynecology and vaginal rejuvenation.",
        image: getRandomImage(doctorImages, 19),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
        }
    },

    // Orthopedic Surgeons (10)
    {
        _id: "o1",
        name: "Dr. Amit Patel",
        specialty: "Orthopedic Surgeon",
        experience: "18 years",
        rating: 4.7,
        fees: "₹2000",
        location: "Max Hospital, Bangalore",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Specialized in joint replacement surgeries and sports medicine.",
        image: getRandomImage(doctorImages, 20),
        availability: {
            hospital: ["Monday", "Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM"]
        }
    },
    {
        _id: "o2",
        name: "Dr. Suresh Kumar",
        specialty: "Orthopedic Surgeon",
        experience: "22 years",
        rating: 4.9,
        fees: "₹2500",
        location: "Fortis Hospital, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English"],
        bio: "Expert in spine surgery and complex fracture management.",
        image: getRandomImage(doctorImages, 21),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "o3",
        name: "Dr. Rajiv Menon",
        specialty: "Orthopedic Surgeon",
        experience: "15 years",
        rating: 4.8,
        fees: "₹1800",
        location: "Apollo Hospital, Chennai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Specialized in arthroscopic surgery and knee replacements.",
        image: getRandomImage(doctorImages, 22),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "o4",
        name: "Dr. Vikram Singh",
        specialty: "Orthopedic Surgeon",
        experience: "20 years",
        rating: 4.8,
        fees: "₹2200",
        location: "Medanta Hospital, Gurgaon",
        consultationType: "Hospital",
        languages: ["Hindi", "English", "Punjabi"],
        bio: "Renowned for hip replacement and trauma surgery.",
        image: getRandomImage(doctorImages, 0),
        availability: {
            hospital: ["Monday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "o5",
        name: "Dr. Arun Joshi",
        specialty: "Orthopedic Surgeon",
        experience: "17 years",
        rating: 4.7,
        fees: "₹1900",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Expert in pediatric orthopedics and deformity correction.",
        image: getRandomImage(doctorImages, 1),
        availability: {
            hospital: ["Tuesday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "o6",
        name: "Dr. Deepak Sharma",
        specialty: "Orthopedic Surgeon",
        experience: "14 years",
        rating: 4.6,
        fees: "₹1600",
        location: "Max Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Specialized in shoulder and elbow surgery.",
        image: getRandomImage(doctorImages, 2),
        availability: {
            hospital: ["Monday", "Wednesday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "o7",
        name: "Dr. Ramesh Reddy",
        specialty: "Orthopedic Surgeon",
        experience: "19 years",
        rating: 4.8,
        fees: "₹2100",
        location: "Yashoda Hospital, Hyderabad",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Telugu"],
        bio: "Expert in robotic joint replacement surgery.",
        image: getRandomImage(doctorImages, 3),
        availability: {
            hospital: ["Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "o8",
        name: "Dr. Sandeep Gupta",
        specialty: "Orthopedic Surgeon",
        experience: "16 years",
        rating: 4.7,
        fees: "₹1850",
        location: "Manipal Hospital, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Focused on sports injuries and ligament reconstruction.",
        image: getRandomImage(doctorImages, 4),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "o9",
        name: "Dr. Prakash Iyer",
        specialty: "Orthopedic Surgeon",
        experience: "21 years",
        rating: 4.9,
        fees: "₹2400",
        location: "Fortis Hospital, Mumbai",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Pioneer in minimally invasive spine surgery.",
        image: getRandomImage(doctorImages, 5),
        availability: {
            hospital: ["Monday", "Wednesday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "o10",
        name: "Dr. Naveen Kumar",
        specialty: "Orthopedic Surgeon",
        experience: "13 years",
        rating: 4.6,
        fees: "₹1500",
        location: "Apollo Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Specialized in hand and wrist surgery.",
        image: getRandomImage(doctorImages, 6),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },

    // Pediatricians (10)
    {
        _id: "p1",
        name: "Dr. Sneha Reddy",
        specialty: "Pediatrician",
        experience: "10 years",
        rating: 4.9,
        fees: "₹800",
        location: "Rainbow Children's Hospital, Hyderabad",
        consultationType: "Both",
        languages: ["English", "Hindi", "Telugu"],
        bio: "Caring for children's health with expertise in neonatal care and vaccinations.",
        image: getRandomImage(doctorImages, 7),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"]
        }
    },
    {
        _id: "p2",
        name: "Dr. Anita Desai",
        specialty: "Pediatrician",
        experience: "15 years",
        rating: 4.8,
        fees: "₹1000",
        location: "Cloudnine Hospital, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Expert in pediatric nutrition and growth disorders.",
        image: getRandomImage(doctorImages, 8),
        availability: {
            hospital: ["Monday", "Tuesday", "Thursday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "p3",
        name: "Dr. Rajesh Malhotra",
        specialty: "Pediatrician",
        experience: "18 years",
        rating: 4.9,
        fees: "₹1200",
        location: "Fortis Hospital, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English"],
        bio: "Specialized in pediatric cardiology and congenital heart defects.",
        image: getRandomImage(doctorImages, 9),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "p4",
        name: "Dr. Priya Nair",
        specialty: "Pediatrician",
        experience: "12 years",
        rating: 4.7,
        fees: "₹900",
        location: "Apollo Hospital, Chennai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Focused on pediatric infectious diseases and immunizations.",
        image: getRandomImage(doctorImages, 10),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM", "5:00 PM"]
        }
    },
    {
        _id: "p5",
        name: "Dr. Suresh Kumar",
        specialty: "Pediatrician",
        experience: "20 years",
        rating: 4.9,
        fees: "₹1300",
        location: "Max Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Renowned for neonatal intensive care and premature baby care.",
        image: getRandomImage(doctorImages, 11),
        availability: {
            hospital: ["Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "p6",
        name: "Dr. Kavita Sharma",
        specialty: "Pediatrician",
        experience: "14 years",
        rating: 4.8,
        fees: "₹950",
        location: "Lilavati Hospital, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Expert in pediatric allergy and asthma management.",
        image: getRandomImage(doctorImages, 12),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM"]
        }
    },
    {
        _id: "p7",
        name: "Dr. Arun Patel",
        specialty: "Pediatrician",
        experience: "11 years",
        rating: 4.6,
        fees: "₹850",
        location: "Manipal Hospital, Pune",
        consultationType: "Both",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Specialized in developmental pediatrics and behavioral issues.",
        image: getRandomImage(doctorImages, 13),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "p8",
        name: "Dr. Meera Iyer",
        specialty: "Pediatrician",
        experience: "16 years",
        rating: 4.8,
        fees: "₹1100",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Expert in pediatric gastroenterology and digestive disorders.",
        image: getRandomImage(doctorImages, 14),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "p9",
        name: "Dr. Deepak Verma",
        specialty: "Pediatrician",
        experience: "13 years",
        rating: 4.7,
        fees: "₹900",
        location: "Fortis Hospital, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Focused on pediatric neurology and developmental delays.",
        image: getRandomImage(doctorImages, 15),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "p10",
        name: "Dr. Ritu Singh",
        specialty: "Pediatrician",
        experience: "17 years",
        rating: 4.9,
        fees: "₹1150",
        location: "Medanta Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Specialized in pediatric endocrinology and diabetes in children.",
        image: getRandomImage(doctorImages, 16),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
        }
    },

    // General Physicians (10)
    {
        _id: "gp1",
        name: "Dr. Sanjay Gupta",
        specialty: "General Physician",
        experience: "22 years",
        rating: 4.8,
        fees: "₹600",
        location: "Safdarjung Hospital, Delhi",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Experienced in treating common illnesses and preventive healthcare.",
        image: getRandomImage(doctorImages, 17),
        availability: {
            hospital: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"]
        }
    },
    {
        _id: "gp2",
        name: "Dr. Ramesh Rao",
        specialty: "General Physician",
        experience: "18 years",
        rating: 4.7,
        fees: "₹700",
        location: "Apollo Clinic, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Expert in managing chronic diseases like diabetes and hypertension.",
        image: getRandomImage(doctorImages, 18),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM", "5:00 PM"]
        }
    },
    {
        _id: "gp3",
        name: "Dr. Sunita Joshi",
        specialty: "General Physician",
        experience: "15 years",
        rating: 4.6,
        fees: "₹650",
        location: "Fortis Clinic, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Marathi"],
        bio: "Focused on family medicine and geriatric care.",
        image: getRandomImage(doctorImages, 19),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "gp4",
        name: "Dr. Prakash Menon",
        specialty: "General Physician",
        experience: "20 years",
        rating: 4.8,
        fees: "₹750",
        location: "Max Clinic, Chennai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Tamil"],
        bio: "Specialized in lifestyle diseases and weight management.",
        image: getRandomImage(doctorImages, 20),
        availability: {
            hospital: ["Monday", "Tuesday", "Thursday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "gp5",
        name: "Dr. Neha Kapoor",
        specialty: "General Physician",
        experience: "12 years",
        rating: 4.7,
        fees: "₹600",
        location: "Manipal Clinic, Pune",
        consultationType: "Both",
        languages: ["English", "Hindi"],
        bio: "Expert in infectious diseases and fever management.",
        image: getRandomImage(doctorImages, 21),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM"]
        }
    },
    {
        _id: "gp6",
        name: "Dr. Anil Sharma",
        specialty: "General Physician",
        experience: "25 years",
        rating: 4.9,
        fees: "₹800",
        location: "AIIMS, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English"],
        bio: "Renowned for diagnosing complex medical conditions.",
        image: getRandomImage(doctorImages, 22),
        availability: {
            hospital: ["Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "gp7",
        name: "Dr. Kavita Reddy",
        specialty: "General Physician",
        experience: "14 years",
        rating: 4.6,
        fees: "₹650",
        location: "Yashoda Hospital, Hyderabad",
        consultationType: "Both",
        languages: ["English", "Hindi", "Telugu"],
        bio: "Focused on preventive medicine and health check-ups.",
        image: getRandomImage(doctorImages, 0),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "gp8",
        name: "Dr. Rajiv Patel",
        specialty: "General Physician",
        experience: "16 years",
        rating: 4.7,
        fees: "₹700",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Both",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Expert in respiratory diseases and lung health.",
        image: getRandomImage(doctorImages, 1),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"]
        }
    },
    {
        _id: "gp9",
        name: "Dr. Meera Singh",
        specialty: "General Physician",
        experience: "13 years",
        rating: 4.6,
        fees: "₹600",
        location: "Fortis Hospital, Noida",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Specialized in women's health and hormonal disorders.",
        image: getRandomImage(doctorImages, 2),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "gp10",
        name: "Dr. Ashok Kumar",
        specialty: "General Physician",
        experience: "19 years",
        rating: 4.8,
        fees: "₹750",
        location: "Max Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Expert in travel medicine and vaccination counseling.",
        image: getRandomImage(doctorImages, 3),
        availability: {
            hospital: ["Tuesday", "Thursday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },

    // Additional specialties with fewer doctors
    {
        _id: "n1",
        name: "Dr. Vikram Singh",
        specialty: "Neurologist",
        experience: "20 years",
        rating: 4.8,
        fees: "₹2500",
        location: "AIIMS, Delhi",
        consultationType: "Hospital",
        languages: ["Hindi", "English", "Punjabi"],
        bio: "Expert in treating stroke, epilepsy, and neurodegenerative disorders.",
        image: getRandomImage(doctorImages, 4),
        availability: {
            hospital: ["Tuesday", "Thursday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "d1",
        name: "Dr. Meera Iyer",
        specialty: "Dermatologist",
        experience: "8 years",
        rating: 4.6,
        fees: "₹1000",
        location: "Manipal Hospital, Chennai",
        consultationType: "Both",
        languages: ["English", "Tamil", "Hindi"],
        bio: "Specialized in cosmetic dermatology and treatment of skin disorders.",
        image: getRandomImage(doctorImages, 5),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"]
        }
    },
    {
        _id: "e1",
        name: "Dr. Arjun Mehta",
        specialty: "ENT Specialist",
        experience: "14 years",
        rating: 4.7,
        fees: "₹1300",
        location: "Medanta Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["Hindi", "English"],
        bio: "Expert in treating ear, nose, and throat disorders including sinus surgeries.",
        image: getRandomImage(doctorImages, 6),
        availability: {
            hospital: ["Tuesday", "Thursday", "Saturday"],
            timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"]
        }
    },
    {
        _id: "ga1",
        name: "Dr. Kavita Desai",
        specialty: "Gastroenterologist",
        experience: "16 years",
        rating: 4.8,
        fees: "₹1800",
        location: "Kokilaben Hospital, Mumbai",
        consultationType: "Hospital",
        languages: ["English", "Hindi", "Gujarati"],
        bio: "Specialized in digestive disorders, liver diseases, and endoscopy procedures.",
        image: getRandomImage(doctorImages, 7),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "ps1",
        name: "Dr. Rahul Verma",
        specialty: "Psychiatrist",
        experience: "11 years",
        rating: 4.9,
        fees: "₹1500",
        location: "Nimhans, Bangalore",
        consultationType: "Both",
        languages: ["English", "Hindi", "Kannada"],
        bio: "Expert in treating depression, anxiety, and other mental health conditions.",
        image: getRandomImage(doctorImages, 8),
        availability: {
            hospital: ["Monday", "Tuesday", "Thursday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM", "5:00 PM"]
        }
    },
    {
        _id: "pu1",
        name: "Dr. Anjali Nair",
        specialty: "Pulmonologist",
        experience: "13 years",
        rating: 4.7,
        fees: "₹1400",
        location: "Aster Medcity, Kochi",
        consultationType: "Both",
        languages: ["English", "Malayalam", "Hindi"],
        bio: "Specialized in respiratory diseases, asthma, and lung infections.",
        image: getRandomImage(doctorImages, 9),
        availability: {
            hospital: ["Tuesday", "Wednesday", "Friday"],
            timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"]
        }
    },
    {
        _id: "en1",
        name: "Dr. Pooja Khanna",
        specialty: "Endocrinologist",
        experience: "9 years",
        rating: 4.6,
        fees: "₹1100",
        location: "Artemis Hospital, Gurgaon",
        consultationType: "Both",
        languages: ["English", "Hindi"],
        bio: "Expert in diabetes management, thyroid disorders, and hormonal imbalances.",
        image: getRandomImage(doctorImages, 10),
        availability: {
            hospital: ["Monday", "Wednesday", "Friday"],
            timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"]
        }
    }
];

export const mockMedicines = [
    {
        _id: "m1",
        name: "Paracetamol 500mg",
        description: "Pain reliever and fever reducer",
        category: "Pain Relief",
        price: 45.00,
        image: "https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Paracetamol"
    },
    {
        _id: "m2",
        name: "Amoxicillin 500mg",
        description: "Antibiotic for bacterial infections",
        category: "Antibiotics",
        price: 120.00,
        image: "https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=Amoxicillin"
    },
    {
        _id: "m3",
        name: "Cetirizine 10mg",
        description: "Antihistamine for allergies",
        category: "Allergy Relief",
        price: 35.00,
        image: "https://via.placeholder.com/200x200/2ECC71/FFFFFF?text=Cetirizine"
    },
    {
        _id: "m4",
        name: "Omeprazole 20mg",
        description: "Reduces stomach acid production",
        category: "Digestive Health",
        price: 85.00,
        image: "https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=Omeprazole"
    },
    {
        _id: "m5",
        name: "Metformin 500mg",
        description: "Diabetes management medication",
        category: "Diabetes Care",
        price: 95.00,
        image: "https://via.placeholder.com/200x200/F39C12/FFFFFF?text=Metformin"
    },
    {
        _id: "m6",
        name: "Atorvastatin 10mg",
        description: "Cholesterol-lowering medication",
        category: "Cardiovascular",
        price: 150.00,
        image: "https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=Atorvastatin"
    },
    {
        _id: "m7",
        name: "Azithromycin 500mg",
        description: "Antibiotic for respiratory infections",
        category: "Antibiotics",
        price: 180.00,
        image: "https://via.placeholder.com/200x200/E67E22/FFFFFF?text=Azithromycin"
    },
    {
        _id: "m8",
        name: "Ibuprofen 400mg",
        description: "Anti-inflammatory pain reliever",
        category: "Pain Relief",
        price: 55.00,
        image: "https://via.placeholder.com/200x200/3498DB/FFFFFF?text=Ibuprofen"
    },
    {
        _id: "m9",
        name: "Vitamin D3 60000 IU",
        description: "Vitamin D supplement",
        category: "Vitamins & Supplements",
        price: 65.00,
        image: "https://via.placeholder.com/200x200/F1C40F/FFFFFF?text=Vitamin+D3"
    },
    {
        _id: "m10",
        name: "Levothyroxine 50mcg",
        description: "Thyroid hormone replacement",
        category: "Hormones",
        price: 110.00,
        image: "https://via.placeholder.com/200x200/8E44AD/FFFFFF?text=Levothyroxine"
    },
    {
        _id: "m11",
        name: "Aspirin 75mg",
        description: "Blood thinner and pain reliever",
        category: "Cardiovascular",
        price: 40.00,
        image: "https://via.placeholder.com/200x200/C0392B/FFFFFF?text=Aspirin"
    },
    {
        _id: "m12",
        name: "Pantoprazole 40mg",
        description: "Proton pump inhibitor for acid reflux",
        category: "Digestive Health",
        price: 90.00,
        image: "https://via.placeholder.com/200x200/16A085/FFFFFF?text=Pantoprazole"
    },
    {
        _id: "m13",
        name: "Montelukast 10mg",
        description: "Asthma and allergy medication",
        category: "Respiratory",
        price: 125.00,
        image: "https://via.placeholder.com/200x200/27AE60/FFFFFF?text=Montelukast"
    },
    {
        _id: "m14",
        name: "Losartan 50mg",
        description: "Blood pressure medication",
        category: "Cardiovascular",
        price: 135.00,
        image: "https://via.placeholder.com/200x200/2980B9/FFFFFF?text=Losartan"
    },
    {
        _id: "m15",
        name: "Calcium + Vitamin D",
        description: "Bone health supplement",
        category: "Vitamins & Supplements",
        price: 75.00,
        image: "https://via.placeholder.com/200x200/D35400/FFFFFF?text=Calcium+D"
    },
    {
        _id: "m16",
        name: "Ciprofloxacin 500mg",
        description: "Broad-spectrum antibiotic",
        category: "Antibiotics",
        price: 160.00,
        image: "https://via.placeholder.com/200x200/C0392B/FFFFFF?text=Ciprofloxacin"
    },
    {
        _id: "m17",
        name: "Diclofenac 50mg",
        description: "Anti-inflammatory for joint pain",
        category: "Pain Relief",
        price: 60.00,
        image: "https://via.placeholder.com/200x200/7F8C8D/FFFFFF?text=Diclofenac"
    },
    {
        _id: "m18",
        name: "Ranitidine 150mg",
        description: "Reduces stomach acid",
        category: "Digestive Health",
        price: 50.00,
        image: "https://via.placeholder.com/200x200/95A5A6/FFFFFF?text=Ranitidine"
    },
    {
        _id: "m19",
        name: "Multivitamin Tablets",
        description: "Daily nutritional supplement",
        category: "Vitamins & Supplements",
        price: 85.00,
        image: "https://via.placeholder.com/200x200/E74C3C/FFFFFF?text=Multivitamin"
    },
    {
        _id: "m20",
        name: "Cough Syrup",
        description: "Relief from cough and cold",
        category: "Respiratory",
        price: 95.00,
        image: "https://via.placeholder.com/200x200/9B59B6/FFFFFF?text=Cough+Syrup"
    },
    {
        _id: "m21",
        name: "Insulin Glargine",
        description: "Long-acting insulin",
        category: "Diabetes Care",
        price: 850.00,
        image: "https://via.placeholder.com/200x200/34495E/FFFFFF?text=Insulin"
    },
    {
        _id: "m22",
        name: "Salbutamol Inhaler",
        description: "Quick relief for asthma",
        category: "Respiratory",
        price: 220.00,
        image: "https://via.placeholder.com/200x200/1ABC9C/FFFFFF?text=Inhaler"
    },
    {
        _id: "m23",
        name: "Probiotic Capsules",
        description: "Gut health supplement",
        category: "Digestive Health",
        price: 450.00,
        image: "https://via.placeholder.com/200x200/16A085/FFFFFF?text=Probiotic"
    },
    {
        _id: "m24",
        name: "Omega-3 Fish Oil",
        description: "Heart and brain health",
        category: "Vitamins & Supplements",
        price: 380.00,
        image: "https://via.placeholder.com/200x200/F39C12/FFFFFF?text=Omega-3"
    }
];

export const mockLabTests = [
    {
        _id: "l1",
        name: "Complete Blood Count (CBC)",
        price: 350.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l2",
        name: "Lipid Profile",
        price: 650.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l3",
        name: "Thyroid Function Test",
        price: 550.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l4",
        name: "Liver Function Test",
        price: 600.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l5",
        name: "Kidney Function Test",
        price: 500.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l6",
        name: "HbA1c (Diabetes)",
        price: 450.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l7",
        name: "Vitamin D Test",
        price: 800.00,
        icon: "/image/16 img.jpg"
    },
    {
        _id: "l8",
        name: "Full Body Checkup",
        price: 2500.00,
        icon: "/image/16 img.jpg"
    }
];

export const mockHealthCamps = [
    {
        _id: "c1",
        title: "Free Diabetes Screening Camp",
        location: "Community Center, Sector 15, Delhi",
        date: "25th December 2025",
        description: "Free blood sugar testing, HbA1c screening, and diabetes counseling by expert endocrinologists.",
        time: "9:00 AM - 2:00 PM"
    },
    {
        _id: "c2",
        title: "Heart Health Awareness Camp",
        location: "Municipal Hall, Mumbai",
        date: "30th December 2025",
        description: "Free ECG, blood pressure check, cholesterol screening, and consultation with cardiologists.",
        time: "10:00 AM - 4:00 PM"
    },
    {
        _id: "c3",
        title: "Women's Health Camp",
        location: "District Hospital, Bangalore",
        date: "5th January 2026",
        description: "Free gynecological consultation, breast cancer screening, and women's wellness check-up.",
        time: "9:00 AM - 3:00 PM"
    },
    {
        _id: "c4",
        title: "Eye Checkup Camp",
        location: "School Ground, Chennai",
        date: "10th January 2026",
        description: "Free eye examination, vision testing, cataract screening, and free reading glasses for eligible patients.",
        time: "8:00 AM - 1:00 PM"
    },
    {
        _id: "c5",
        title: "General Health Checkup Camp",
        location: "Community Park, Hyderabad",
        date: "15th January 2026",
        description: "Free general health screening, BMI check, blood pressure monitoring, and basic health consultation.",
        time: "9:00 AM - 2:00 PM"
    },
    {
        _id: "c6",
        title: "Dental Care Camp",
        location: "City Hospital, Pune",
        date: "20th January 2026",
        description: "Free dental checkup, oral hygiene counseling, and basic dental treatments for children and adults.",
        time: "10:00 AM - 3:00 PM"
    },
    {
        _id: "c7",
        title: "Bone Health & Arthritis Camp",
        location: "Medical Center, Kolkata",
        date: "25th January 2026",
        description: "Free bone density screening, arthritis consultation, and physiotherapy guidance by orthopedic specialists.",
        time: "9:00 AM - 2:00 PM"
    },
    {
        _id: "c8",
        title: "Child Vaccination Camp",
        location: "Primary Health Center, Jaipur",
        date: "1st February 2026",
        description: "Free vaccination for children, growth monitoring, and pediatric consultation.",
        time: "8:00 AM - 12:00 PM"
    }
];

export const mockMembershipPlans = [
    {
        planName: "Silver",
        price: 999,
        benefits: [
            "10% discount on medicines",
            "Free health checkup once a year",
            "Priority customer support",
            "Access to health tips"
        ]
    },
    {
        planName: "Gold",
        price: 1999,
        benefits: [
            "20% discount on medicines",
            "Free health checkup twice a year",
            "Free doctor consultation (2 per year)",
            "Priority appointment booking",
            "24/7 customer support"
        ]
    },
    {
        planName: "Platinum",
        price: 3999,
        benefits: [
            "30% discount on medicines",
            "Free health checkup quarterly",
            "Unlimited free doctor consultations",
            "Priority appointment booking",
            "24/7 dedicated support",
            "Free home sample collection"
        ]
    }
];
