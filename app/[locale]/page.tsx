"use client";
import Footer from "@/components/en/Footer";
import Header from "@/components/en/Header";
import Banner from "@/components/en/home/Banner";
import JobOpens from "@/components/en/home/JobOpens";


export default function Home() {
  return (
    <>
      {/* <!-- Sidebar Menu end --> */}
      <Header />
      {/* <!-- Banner-section start --> */}
      <Banner />
      {/* <!-- Banner-section end --> */}
  
      {/* <!-- Job Opens start --> */}
      <JobOpens />
      {/* <!-- Job Opens end --> */}
      
      {/* <!-- Footer Area Start --> */}
      <Footer />
    </>
  );
}
