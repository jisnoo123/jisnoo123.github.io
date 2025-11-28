// Centralized content data for easy editing

export const personalInfo = {
  name: "Jisnoo Dev Pal",
  title: "Computer Science Student",
  email: "jisnoodevpal@gmail.com",
  profilePhoto: "/images/profile_photo/jisnoo.png",
  cv: "/CV/two_pg_cv.pdf",
  social: {
    github: "https://github.com/jisnoo123",
    linkedin: "https://www.linkedin.com/in/jisnoo/",
  },
  bio: [
    "I am a third year BSc Computer Science student at the Ramakrishna Mission Residential College (Autonomous), Narendrapur.",
    "I am interested in solving Deep Learning problems specifically applied to 3D settings like 3D Classification, Segmentation and Generation. I also want to work on Diffusion Models and Reinforcement Learning.",
  ],
  mentors: [
    { name: "Jimut Bahan Pal", url: "https://jimut123.github.io/" },
    { name: "Sw. Punyeshwarananda", url: "https://cs.rkmvu.ac.in/~sp/" },
  ],
  researchInterests: [
    "Deep Learning",
    "3D Classification",
    "3D Segmentation",
    "3D Generation",
    "Diffusion Models",
    "Reinforcement Learning",
  ],
};

export const newsItems = [
  {
    id: 1,
    date: "Jun' 25",
    content: "I am pursuing a research internship at RKMVERI, Belur.",
    isNew: true,
  },
];

export const projects = [
  {
    id: 1,
    title: "Collage: Converting images and videos to dataset collages",
    description:
      "Replaces patches of images or video frames with nearest neighbouring image in the dataset.",
    techInfo: "Datasets: Anime, CIFAR10, SVHN and ImageNet10",
    date: "Jun' 25",
    image: "/images/projects/collager/collage_teaser.png",
    links: {
      github: "https://github.com/jisnoo123/collage",
      demo: "https://huggingface.co/spaces/jisnoo/collage_image",
    },
  },
];

export const education = [
  {
    id: 1,
    institution: "Ramakrishna Mission Residential College (Autonomous)",
    location: "Narendrapur",
    period: "July '23 - Present",
    degree: "B.Sc. (Hons.) in Computer Science",
    isCurrent: true,
  },
  {
    id: 2,
    institution: "Central Modern School",
    location: "Baranagar",
    period: "2009 - 2023",
    degree: "Senior Secondary Education",
    isCurrent: false,
  },
];

export const honors = [
  {
    id: 1,
    title: "Certificate of Merit",
    description: "Highest Marks in CS major in UG Sem-II",
    certificateUrl: "/images/Honors/sem_2.jpg",
  },
  {
    id: 2,
    title: "Certificate of Merit",
    description: "Top position in UG Sem-I",
    certificateUrl: "/images/Honors/RKMRC_Sem1_Certificate.jpg",
  },
  {
    id: 3,
    title: "Certificate of Honor",
    description: "ISC School Topper",
    certificateUrl: "/images/Honors/isc_certificate.jpg",
  },
];

export const specializations = [
  {
    id: 1,
    title: "Machine Learning",
    provider: "DeepLearning.AI, Stanford University",
    platform: "Coursera",
    certificateUrl:
      "https://coursera.org/share/52990358086e6d9e647d63fa7b08df41",
  },
  {
    id: 2,
    title: "Python for Everybody",
    provider: "University of Michigan",
    platform: "Coursera",
    certificateUrl:
      "https://coursera.org/share/a8c4a3f5cd2cecaa88bb3f01b3da7e9e",
  },
];

export const trivia = {
  hobbies: ["Workout", "Running", "Movies", "Music"],
  brotherWebsite: {
    name: "Jimut",
    url: "https://jimut123.github.io/",
  },
};

export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/jisnoo_rkmrc_logo.jpeg",
    thumb: "/images/gallery/jisnoo_rkmrc_logo_thumb.jpeg",
    title: "Jisnoo",
    description: "RKMRC, 27th July 2024",
  },
  {
    id: 2,
    src: "/images/gallery/jisnoo_rkmrc.jpg",
    thumb: "/images/gallery/jisnoo_rkmrc_thumb.png",
    title: "Jisnoo",
    description: "Me and my college, 6th Jan 2024",
  },
  {
    id: 3,
    src: "/images/gallery/chrysanthemum_bee_pink.jpg",
    thumb: "/images/gallery/chrysanthemum_bee_pink_thumb.png",
    title: "Winter Chrysanthemum",
    description: "Bees on a Pink Chrysanthemum, 4th Jan 2024",
  },
  {
    id: 4,
    src: "/images/gallery/chrysanthemum_pink.jpg",
    thumb: "/images/gallery/chrysanthemum_pink_thumb.png",
    title: "Winter Chrysanthemum",
    description: "Pink Chrysanthemum, 4th Jan 2024",
  },
  {
    id: 5,
    src: "/images/gallery/chrysanthemum_red.jpg",
    thumb: "/images/gallery/chrysanthemum_red_thumb.png",
    title: "Winter Chrysanthemum",
    description: "Red Chrysanthemum, 4th Jan 2024",
  },
  {
    id: 6,
    src: "/images/gallery/chrysanthemum_white.jpg",
    thumb: "/images/gallery/chrysanthemum_white_thumb.png",
    title: "Winter Chrysanthemum",
    description: "White Chrysanthemum, 4th Jan 2024",
  },
  {
    id: 7,
    src: "/images/gallery/chrysanthemum_yellow.jpg",
    thumb: "/images/gallery/chrysanthemum_yellow_thumb.png",
    title: "Winter Chrysanthemum",
    description: "Yellow Chrysanthemum, 4th Jan 2024",
  },
  {
    id: 8,
    src: "/images/gallery/dahlia_pinata_red.jpg",
    thumb: "/images/gallery/dahlia_pinata_red_thumb.png",
    title: "Winter Dahlia",
    description: "Red Dahlia, 4th Jan 2024",
  },
  {
    id: 9,
    src: "/images/gallery/college_morning.jpg",
    thumb: "/images/gallery/college_morning_thumb.jpg",
    title: "RKMRC, Morning View",
    description: "Shot this during my daily jogging, 18th Dec 2023",
  },
  {
    id: 10,
    src: "/images/gallery/college_winter.jpg",
    thumb: "/images/gallery/college_winter_thumb.jpg",
    title: "RKMRC, Winter Bougainvillea",
    description: "Beauty of our college, 18th Nov 2023",
  },
  {
    id: 11,
    src: "/images/gallery/garden_morning.jpg",
    thumb: "/images/gallery/garden_morning_thumb.jpg",
    title: "Ayurvedic Garden, RKM Ashram Narendrapur",
    description: "Shot this during my daily jogging, 18th Dec 2023",
  },
  {
    id: 12,
    src: "/images/gallery/ground.jpg",
    thumb: "/images/gallery/ground_thumb.jpg",
    title: "College Ground on a Sunny Winter Day",
    description: "Shot this during the college recess, 18th Nov 2023",
  },
  {
    id: 13,
    src: "/images/gallery/outside.jpg",
    thumb: "/images/gallery/outside_thumb.jpg",
    title: "Beauty on a Rainy Day",
    description: "During recess, 26th Sept 2023",
  },
  {
    id: 14,
    src: "/images/gallery/tree.jpg",
    thumb: "/images/gallery/tree_thumb.jpg",
    title: "Magnolia Tree",
    description: "In front of our college, 26th Sept 2023",
  },
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "news", label: "News" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "honors", label: "Honors" },
  { id: "specializations", label: "Specializations" },
  { id: "trivia", label: "Trivia" },
];
