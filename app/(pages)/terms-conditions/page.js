import React from 'react';
import Layout from "@/components/layout/Layout"



const page = () => {
    return (
        <Layout headerStyle={1} footerStyle={1}>


            <div className="p-4 max-w-3xl mx-auto text-gray-800">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                <p className="mb-4">Effective Date: May 22, 2025</p>

                <p className="mb-4">
                    Welcome to Markhor Events. By using our website or booking our services, you agree to be bound by the following Terms and Conditions. Please read them carefully before engaging with us.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
                <p className="mb-4">
                    Markhor Events offers event planning and party organization services in Pakistan, primarily Karachi. These include venue arrangement, catering, decor, entertainment, and related services.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Booking and Payments</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>All bookings must be made at least 7 days in advance of the event date.</li>
                    <li>50% advance payment is required to confirm the booking.</li>
                    <li>Full payment must be completed at least 48 hours before the event.</li>
                    <li>Accepted payment methods include bank transfer, Easypaisa, and cash (where applicable).</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Cancellations and Refunds</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Cancellation made 5+ days before the event will receive a 70% refund of the advance.</li>
                    <li>Cancellation made 2–4 days before the event will receive a 30% refund.</li>
                    <li>No refund for cancellations made less than 48 hours before the event.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Client Responsibilities</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Clients must provide accurate information about event size, location, and preferences.</li>
                    <li>Clients are responsible for any damages caused by guests to the venue or rented items.</li>
                    <li>Clients must ensure timely communication and approvals to avoid last-minute issues.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Our Commitments</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>We strive to provide professional event planning services according to the agreed scope.</li>
                    <li>We will inform you in advance if any changes need to be made to vendors or logistics.</li>
                    <li>We do not guarantee the availability of specific venues or third-party services unless confirmed.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
                <p className="mb-4">
                    Markhor Events is not liable for delays, losses, or damages caused by unforeseen circumstances such as weather conditions, third-party failures, or governmental restrictions. We do our best to mitigate such issues and find suitable alternatives.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
                <p className="mb-4">
                    All content on our website (text, images, logos, etc.) is the property of Markhor Events and may not be reproduced without written permission.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Privacy</h2>
                <p className="mb-4">
                    Your privacy is important to us. Please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for information on how we collect and use your data.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
                <p className="mb-4">
                    These terms are governed by the laws of Pakistan. Any disputes shall be resolved under the jurisdiction of the courts in Karachi.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
                <p>
                    If you have any questions or concerns, you can contact us at <strong>markhorevents@gmail.com</strong>.
                </p>
            </div>
        </Layout>
    );
};

export default page;
