

import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/sections/contact/contactsection";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="CONTACT US" backgroundImage={"https://res.cloudinary.com/dneh5diea/image/upload/v1750073952/Recourses/a6nuponea10usm9atpaw.jpg"}>
        <ContactSection />
      </Layout>
    </>
  );
}
