import React from 'react';
import Layout from "@/components/layout/Layout"

const page = () => {
    return (
        <Layout headerStyle={1} footerStyle={1}>

            <div className="p-4 max-w-3xl mx-auto text-gray-800">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">Effective Date: May 22, 2025</p>

                <p className="mb-4">
                    At Markhor Events, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services to organize events and parties in Pakistan, particularly Karachi.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>Personal Information:</strong> Name, phone number, email address, and event details you provide when booking our services.</li>
                    <li><strong>Usage Data:</strong> Information about your interaction with our website, such as pages visited and browser information.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To communicate with you regarding event planning and booking.</li>
                    <li>To improve our website and services.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
                <p className="mb-4">
                    We do not sell or rent your personal information. We may share it with trusted third-party vendors solely for the purpose of event organization (e.g., caterers, decorators), and only with your consent.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
                <p className="mb-4">
                    We take reasonable measures to protect your data from unauthorized access, loss, or misuse.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or delete your personal information by contacting us at markhorevents@gmail.com.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
                <p className="mb-4">
                    Our website may use cookies to enhance user experience. You can manage cookie settings in your browser.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <strong>markhorevents@gmail.com</strong>.
                </p>
            </div>
        </Layout>

    );
};

export default page;
