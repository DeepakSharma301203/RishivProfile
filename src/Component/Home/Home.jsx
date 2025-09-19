import React from 'react';

// --- SVG Icons for visual flair ---
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7" />
    </svg>
);
const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);
// Icons for Skills Section
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v4c0 2.21 3.582 4 8 4s8-1.79 8-4V7" /></svg>;
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


const HomePage = () => {
    // --- Data from the resume ---
    const education = [
        { degree: 'B.E in Computer Science Engineering', school: 'Chandigarh University', period: '2023 – 2026', score: 'CGPA: 6.4 (till 4th semester)' },
        { degree: 'Senior Secondary (CBSE)', school: 'Holy Heaven Public School', period: '2022', score: 'Percentage: 75.2%' },
        { degree: 'Secondary School (CBSE)', school: 'Holy Heaven Public School', period: '2020', score: 'Percentage: 72%' },
    ];

    const internship = {
        role: 'Web Developer Intern',
        company: 'Stucare Technologies Pvt. Ltd.',
        period: 'Jul 2024 – Aug 2024 (Remote)',
        points: [
            'Developed fully responsive web pages using HTML, CSS, and JavaScript, improving UI consistency by 30%.',
            'Collaborated with the development team to implement real-time features and debug production-level issues.'
        ]
    };
    
    const certifications = [
        'Web Development with JavaScript – Udemy',
        'Generative AI – by Microsoft',
        'Artificial Intelligence – by Microsoft',
        'Tally ERP – by CAIT'
    ];

    const skills = {
        languages: ['JavaScript', 'CSS', 'HTML'],
        frameworks: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS'],
        databases: ['MongoDB', 'MySQL'],
        tools: ['Git', 'GitHub', 'Postman', 'Tally ERP', 'VS Code', 'Terminal']
    };

    return (
        <div className="space-y-20 pb-12">
            {/* --- Hero Section --- */}
            <section className="text-center pt-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-3">
                        Rishiv Goutam | Sejal 
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
                        Full Stack Developer
                    </p>
                    <p className="max-w-3xl mx-auto text-md text-gray-600 leading-relaxed">
                        An energetic and detail-oriented Computer Science student with expertise in the MERN stack and a strong foundation in Data Structures and Algorithms. Proven ability to build scalable applications and solve complex problems.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#" 
                            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
            
            {/* --- Technical Skills Section --- */}
            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">My Technical Toolbox</h2>
                {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                        <CodeIcon />
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Languages</h3>
                        <div className="flex flex-wrap gap-2 justify-center">{skills.languages.map(s => <span key={s} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{s}</span>)}</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                        <LayersIcon />
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-2 justify-center">{skills.frameworks.map(s => <span key={s} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{s}</span>)}</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                        <DatabaseIcon />
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Databases</h3>
                        <div className="flex flex-wrap gap-2 justify-center">{skills.databases.map(s => <span key={s} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">{s}</span>)}</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                        <WrenchIcon />
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Tools</h3>
                        <div className="flex flex-wrap gap-2 justify-center">{skills.tools.map(s => <span key={s} className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">{s}</span>)}</div>
                    </div>
                </div>
            </section>
            
            {/* --- Experience Section --- */}
            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Professional Experience</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                        <BriefcaseIcon />
                        <h3 className="text-2xl font-bold text-gray-800">{internship.role}</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-600">{internship.company}</p>
                    <p className="text-md text-gray-500 mb-6">{internship.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {internship.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* --- Education Section --- */}
            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Education</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1"><GraduationCapIcon /></div>
                                <div className="ml-2 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                    <p className="text-md font-medium text-gray-600">{edu.school}</p>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                                        <p className="text-sm text-gray-500 mb-2 sm:mb-0">{edu.period}</p>
                                        <p className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full self-start sm:self-center">{edu.score}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* --- Certifications Section --- */}
            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Certifications</h2>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center">
                                <CertificateIcon />
                                <p className="text-gray-700">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;

