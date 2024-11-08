const CompanyProfileMain = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="w-full md:w-5/12">
        <div className="flex flex-col gap-7">
          <h3 className={`text-activeBlue text-2xl font-semibold`}>
            Company Profile
          </h3>
          <h1 className="text-secondaryBlue font-bold text-5xl text-wrap">
            Welcome To Prius Academics
          </h1>
          <div className="text-gray-600 ">
            Prius Academics is Skill Development and Career Development
            Enterprise. The services offered at Prius Academics include
            Placement / Employability Training, Technical Training, Aptitude &
            Soft Skills Training, E Learning Platform and Online Assessment
            Portal .
          </div>
          <div className="text-gray-600 ">
            We are dedicated to empowering students and professionals with the
            skills they need to excel in today’s competitive job market. Our
            specialized placement training courses are designed to enhance
            technical knowledge, boost confidence, and prepare candidates for
            success in their careers. With experienced instructors and a
            hands-on approach, we ensure that our learners are industry-ready,
            equipping them with the tools to land their dream jobs.
          </div>
          <div className="text-gray-600 ">
            We are passionate about helping individuals achieve their career
            goals. Our placement training programs focus on bridging the gap
            between academic learning and the real-world skills required by
            today’s employers. Whether you’re a fresh graduate looking to
            kickstart your career or a professional seeking to upgrade your
            skills, we offer comprehensive training in programming languages,
            interview preparation, soft skills, and problem-solving techniques.
          </div>
          <div className="text-gray-600 ">
            With a proven track record of success, expert trainers, and a
            curriculum tailored to meet industry standards, we aim to provide
            not just training but a complete transformation. We believe that
            with the right guidance and support, every individual has the
            potential to secure their desired job. At Prius Academics your
            success is our mission.
          </div>
          <h2 className="text-center text-secondaryBlue font-semibold text-xl">
            Join us and take the next step toward a brighter future!
          </h2>
        </div>
      </div>
      <div className="flex-1 ">
        <img src={`images/about.jpg`} width={500} className="" />
      </div>
    </div>
  );
};

export default CompanyProfileMain;
