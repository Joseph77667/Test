import React from "react";
import Jane from "../assets/Jane.webp";
import John from "../assets/John.webp";

function About() {
  return (
    <div className="mt-20">
      <div className=" w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            At DreamShop, our mission is to revolutionize the online shopping
            experience by providing our customers with a seamless, enjoyable,
            and personalized shopping journey. We strive to offer the highest
            quality products at competitive prices while ensuring exceptional
            customer service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            We envision a world where online shopping is not just a transaction,
            but an experience that brings joy and satisfaction. Our goal is to
            become the leading e-commerce platform that inspires trust and
            loyalty among customers globally.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Customer-Centric: We put our customers at the heart of everything
              we do.
            </li>
            <li>
              Integrity: We uphold honesty and transparency in our business
              practices.
            </li>
            <li>
              Innovation: We embrace change and continuously seek better ways to
              serve our customers.
            </li>
            <li>
              Diversity: We celebrate diversity and inclusivity in our team and
              offerings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-700 mb-4">
            Our dedicated team is passionate about delivering the best products
            and experiences to our customers. With expertise in various fields,
            we work collaboratively to ensure that every aspect of our business
            aligns with our mission and values.
          </p>
          <div className="flex flex-col gap-8">
            {/* Team Member 1 */}

            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between group gap-10">
              <img
                  src={John}
                  alt="John Smith"
                  className="h-48 w-36 rounded-md bg-gray-500 object-cover group-hover:opacity-75"
                />
                <div>
                  <h3 className="font-bold text-gray-800">John Smith</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                  <p className="text-gray-700">
                    John leads the vision of YourShop, bringing years of
                    experience in e-commerce and a passion for innovation.
                  </p>
                </div>
                
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between group gap-10">
                <div>
                  <h3 className="font-bold text-gray-800">Jane Marthon</h3>
                  <p className="text-gray-600">Head of Marketing</p>
                  <p className="text-gray-700">
                    Jane crafts our marketing strategies, ensuring that we
                    connect with our customers in meaningful ways.
                  </p>
                </div>
                <img
                  src={Jane}
                  alt="Jane Marthon"
                  className="h-40 w-50 rounded-md bg-gray-500 object-cover group-hover:opacity-75"
                />
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-700">
            We prioritize quality, affordability, and customer satisfaction
            above all else. YourShop is committed to making your shopping
            experience enjoyable, with a wide range of products, easy
            navigation, and responsive customer support.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
