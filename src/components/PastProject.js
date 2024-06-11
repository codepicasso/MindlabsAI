import React from 'react';

const ProjectItem = ({ title, description, features, imgSrc, aosType }) => (
  <div className="row py-4 align-items-center">
    <div className="col-lg-4">
      <div className={`about-thumb-inner me-xl-5 aos-init aos-animate`} data-aos={aosType} data-aos-delay="100" data-aos-duration="1500">
        <img className="main-img border-radius-20 overflow-hidden" src={imgSrc} alt="img" />
      </div>
    </div>
    <div className="col-lg-8 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
      <div className="section-title mt-5 mt-lg-0 mb-0">
        <h3 className="title">{title}</h3>
        <p className="content mb-4 mb-xl-5">{description}</p>
        <div className="row">
          {features.map((featureSet, index) => (
            <div className="col-md-6" key={index}>
              <ul className="single-list-inner style-check style-heading style-check mb-3">
                {featureSet.map((feature, index) => (
                  <li key={index}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Autism Spectrum/ADHD Facial and Voice Tracker',
      description: 'This innovative project focuses on developing a cutting-edge tool designed for children aged 5-17 with Autism Spectrum Disorder (ASD). Utilising the latest in facial and eye detection technology alongside emotive voice trackers, this tool aims to enhance communication and emotional understanding by interpreting subtle cues and expressions. The system is currently under development, integrating advanced algorithms and neural network technologies to ensure accuracy and sensitivity in real-time interactions.',
      features: [
        ['Computer Vision for Facial and Eye Detection', 'Emotive Voice Processing'],
        ['Natural Language Processing', 'Emotive Voice Processing']
      ],
      imgSrc: 'assets/img/projects/1.webp',
      aosType: 'fade-right'
    },
    {
      title: 'On-Demand Mental Health AI Assistant',
      description: 'Our on-demand Mental Health AI assistant revolutionises mental health support by providing immediate, accessible assistance to individuals facing common mental health challenges. Powered by advanced natural language processing and machine learning technologies, this assistant offers personalised guidance, coping strategies, and support, ensuring users can navigate their mental health needs effectively and confidentially. This tool is designed to learn and adapt to individual user preferences and needs, improving its responses over time.',
      features: [
        ['Machine Learning', 'Sentiment Analysis'],
        ['Natural Language Processing', 'Speech Recognition']
      ],
      imgSrc: 'assets/img/projects/2.webp',
      aosType: 'fade-right'
    },
    {
      title: 'Financial Buddy Planner',
      description: 'Financial Buddy Planner is a user-friendly tool designed to help individuals effectively manage their income and track their financial health. Leveraging real-time data processing and intuitive graphical interfaces, this planner simplifies budgeting, expense tracking, and financial forecasting. By providing clear, actionable insights, it empowers users to make informed financial decisions and achieve their economic goals.',
      features: [
        ['Data Analytics', 'Predictive Analytics'],
        ['Natural Language Processing', 'Machine Learning']
      ],
      imgSrc: 'assets/img/projects/3.webp',
      aosType: 'fade-right'
    },
    {
      title: 'Domestic Violence Support Tracker',
      description: 'This project develops a crucial resource for individuals in domestic violence situations. Employing state-of-the-art facial, eye detection, and emotive voice tracking technologies, the tool is designed to detect signs of stress and anxiety, providing timely support and resources. This technology uses sophisticated pattern recognition and emotional analysis to offer a discreet, supportive network that helps enhance safety and emotional well-being.',
      features: [
        ['Facial Recognition', 'Voice Recognition and Emotion Analysis'],
        ['Pattern Recognition', 'Data Encryption and Security']
      ],
      imgSrc: 'assets/img/projects/4.webp',
      aosType: 'fade-right'
    },
    {
      title: 'Anti-Aging Wellness App with Facial Recognition',
      description: 'This innovative wellness app is tailored for individuals seeking effective anti-aging solutions through facial yoga techniques. By integrating facial recognition technology, the app enhances the user experience by providing real-time feedback and personalised guidance. As users perform facial yoga exercises, the app’s advanced algorithms analyse their facial movements to ensure each pose is executed correctly, maximising the anti-aging benefits. This tailored approach helps in reducing wrinkles, improving skin tone, and enhancing overall facial muscle tone. The app also tracks progress over time, offering users insights into the effectiveness of their routine and suggesting adjustments for optimal results. With a user-friendly interface and engaging content, this wellness app makes facial yoga accessible and enjoyable, promoting a youthful appearance and holistic well-being.',
      features: [
        ['Facial Recognition Technology', 'Image Processing'],
        ['Machine Learning', 'Augmented Reality']
      ],
      imgSrc: 'assets/img/projects/5.webp',
      aosType: 'fade-right'
    },
    {
      title: 'Retail, Sales, E-commerce',
      description: 'We specialise in developing customised AI sales assistants tailored for retail and e-commerce platforms. Our technology enhances customer interaction, boosts sales efficiency, and provides a personalised shopping experience that drives growth and customer satisfaction.',
      features: [
        ['Natural Language Processing', 'Recommendation Engines'],
        ['Chatbot Technology', 'Predictive Analytics']
      ],
      imgSrc: 'assets/img/projects/6.webp',
      aosType: 'fade-right'
    }
  ];

  return (
    <div className="about-area pd-top-60 pd-bottom-60">
      <div className="container">
        <h2 className="title">Current <span>Projects</span></h2>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            features={project.features}
            imgSrc={project.imgSrc}
            aosType={project.aosType}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;