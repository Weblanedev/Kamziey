import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",

    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex flex-col-reverse md:flex-row h-[90vh] md:h-[55vh] mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            About Kamziey
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[330px]">
            Our story, our values and how our customers drive everything we do.
          </p>

          <Link
            to="/products"
            className="text-base font-medium text-white bg-yellow-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-yellow-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link>
        </div>

        <img
          src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/Meet_the_Team_0cce546d6a.png"
          alt=""
          className="w-full h-[300px] md:h-[300px] md:w-[500px] object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="flex flex-col-reverse md:flex-row-reverse mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white py-14 md:py-20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Who We Are
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
          Kamziey Innovations Limited is a dynamic IT company dedicated to delivering cutting-edge technology solutions. With a focus on innovation and excellence, we provide a range of products and services designed to meet the diverse needs of our clients. Our mission is to leverage technology to drive business success and improve operational efficiency for organizations of all sizes.     </p>

        </div>

        <img
          src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/team_339c3ad3fa.jfif"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:justify-between gap-16 bg-yellow-500/30 py-14 md:py-20">
        <h2 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left leading-snug md:leading-[62px] text-center text-yellow-950">
          What we value
        </h2>
        <div className="px-10 md:px-[130px] flex flex-col md:flex-row justify-center items-center w-full gap-5">
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delighting Our Customers, Globally
              </h3>
              <p className="">
                Listening to and acting on customer feedback drives all that we
                do. It's reflected in our 2,000+ 5-star reviews.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delivering the Best Value
              </h3>
              <p className="">
                We offer our best-in-class solutions at competitive prices. Our
                clear, consistent and stable subscription pricing means no
                hidden conditions and no surprises.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Focusing on Security and Compliance
              </h3>
              <p className="">
                We comply with and support the latest security standards and
                regulations, including GDPR, HIPAA, SOC 2 and PCI. Our Security
                Advisory Council guides us toward our ever-more-rigorous
                security and compliance goals.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Providing Reliable, High Performing User Experiences
              </h3>
              <p className="">
                Our products' award-winning reliability and performance
                translate directly into our customers' abilities to achieve
                their goals in work, school or entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white py-14 md:py-20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Why Us
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
          Choosing Kamziey Innovations Limited means partnering with a technology company dedicated to your success. Our team of highly skilled professionals brings extensive experience and deep technical knowledge to every project, ensuring you receive the best possible solutions tailored to your specific needs. We are passionate about leveraging cutting-edge technology and innovation to drive efficiency, productivity, and growth for your business. Quality is at the core of everything we do, from initial consultation to final delivery, ensuring our solutions meet the highest standards of reliability.
          </p>

          <p className="text-center md:text-left mt-[-25px]  w-full md:w-[550px] leading-relaxed">
          Our commitment to exceptional customer service means our support team is available 24/7 to assist with any issues or questions, ensuring your IT systems run smoothly. With a proven track record of successfully delivering complex IT projects across various industries, we take a holistic approach to IT solutions, considering all aspects of your business and technology environment. This ensures comprehensive, integrated solutions aligned with your overall business strategy. Additionally, we offer competitive pricing, providing high-quality IT solutions that offer excellent value for money. Partner with Kamziey Innovations Limited and experience the difference of working with a company that values innovation, excellence, and your success.
          </p>
          <Link
            to="/contact-us"
            className="text-base font-medium text-white bg-yellow-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-yellow-600 flex items-center justify-center gap-3"
          >
            Contact Us
          </Link>
        </div>

        <img
          src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/Meet_the_Team_0cce546d6a.png"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
};

export default About;
