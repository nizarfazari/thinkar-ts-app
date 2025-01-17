export default function Privacy() {
    return (
        <div className="container mx-auto px-60 mt-20 mb-32">
            <h1 className="text-6xl md:text-5xl font-bold text-[#2697FF]">Privacy Policy</h1>
            <p className="text-end font-bold text-gray-500">Last update : 2024/07/19</p>
            <div className="mt-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2697FF]">Introduction</h2>
                <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">AILens Group (“AILens”, “we”, “our” or “us”) cares about the security and privacy of your personal data. This Privacy Policy describes how AILens collects, uses and shares your personal data. In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal data. </p>
            </div>
            <div className="mt-14">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2697FF]">Overview</h2>
                <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    The Privacy Policy covers how we handle personal data whether you interact with us on our website (https://www.ThinkAR.com) (“Site”), through AiLens’s mobile apps (“Mobile Apps”) or in person (including by phone, through email or when visiting us). We may also link to third parties on our services or make third party apps available for connecting our product. Our Privacy Policy does not apply to how third parties define personal data or how they use it. We encourage you to read their privacy policies and know your privacy rights before interacting with them.
                </p>
            </div>
            <div className="mt-14">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2697FF]">Table of Content</h2>
                <ul className="space-y-4 list-disc list-inside">
                    {[
                        "What is Personal Data at AILens",
                        "Use of Personal Data",
                        "Permitted Disclosure of Personal Data",
                        "How We Protect Personal Data",
                        "Data Retention Policy",
                        "Your Rights and Choices",
                        "Link to Other Websites",
                        "Used by Minors",
                        "Updates To This Privacy Policy and Notifications",
                        "Mobile Devices",
                        "Legal Basis for Processing (For EEA Users only)",
                        "California Consumer Privacy Act (CCPA)",
                        "Languages",
                        "Contact Us"
                    ].map((item, index) => (
                        <li key={index} className="mt-4 text-2xl md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


            <div className="mt-14">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2697FF]">What is Personal Data at AILens</h2>
                <p className="mt-4 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    We may or may not collect your personal data when you register with or access our Services or otherwise interact with AILens. The categories of information we may collect might include but are not limited to the categories described below:
                </p>
                <p className="mt-12 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter ">
                    1.  Data You Provide.  Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (“Anonymous Data”). We collect the content, communications and other information you provide when you use our Services such as when you create or use your account with us (“Account”) or when you provide feedback to us. You are not required to provide the personal data that we have requested. However, if you choose not to do so, in many cases we will not be able to provide you with our products or services or respond to requests you may have. Information we collect may include the following:
                </p>
                <p className="mt-12 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (1) Identity Data includes first name, maiden name, last name, nationality, gender, marital status, passport number, ARC number, driver’s license number, Social Security number, Taxpayer Identification number, or other government-issued identification number.
                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (2) Contact Data includes email address, residential address, billing address, and phone numbers.
                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (3) Demographic Data includes your date of birth, and country/region.
                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (4) Financial Data includes bank account, payment and digital wallet information.
                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (5) Transaction Data includes details about when and where payment transactions occur, the names of the transacting parties, a description of the transactions, the payment or transfer amounts, billing and shipping information, and the devices and payment methods used to complete the transactions.
                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (6) Profile Data includes your username, password, preferred language, survey responses, promotions, or other prospective seller marketing forms or devices; suggestions for improvements; referrals; or any other actions you perform on our Services.
                </p>
                <p className="mt-12 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    2. Data Collected Automatically.  When you use our Services, some information may be automatically collected by our server logs and other similar technologies. This information include:

                </p>
                <p className="mt-12 text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (1) Technical Data includes device-specific information (such as your hardware model, operating system version, unique device identifiers and mobile network information), Internet protocol (IP) address, device event information such as crashes, system activity, hardware settings, browser type, language, the date and time when you access our Services.
                </p>
                <p className=" text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (2) Location Data includes information about your location, via various technologies including Internet protocol (IP) address which indicates a number assigned to every device connected to the Internet assigned in geographic blocks and other identifiers that may, for example, provide us with information on nearby devices, Wi-Fi access points.
                </p>
                <p className=" text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (3) Usage Data includes information about how you use our Services such as your preferences, characteristics, and behavior.
                </p>

                <p className="my-8   text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    3. Data Collected from Other Sources.
                </p>
                <p className=" text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (1) Third-Party Services. If you link, connect, or log in using the single sign-on (“SSO”) via a third-party service (e.g. Google, Facebook, Line), you direct the service to send us information such as your registration, friends list, and profile information as controlled by that service or as authorized by you via your privacy settings at that service.
                </p>
                <p className=" text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (2) Other Sources. To the extent permitted by applicable law, we may receive additional information about you, such as references, demographic data or information to help detect fraud and safety issues from third party service providers and/or partners, and combine it with information we have about you. For example, we may receive background check results or fraud warnings from identity verification service providers for use in our fraud prevention and risk assessment efforts.                </p>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    (3) We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2697FF]">What is Personal Data at AILens</h2>
                <p className=" text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    We may or may not collect your personal data when you register with or access our Services or otherwise interact with AILens. The categories of information we may collect might include but are not limited to the categories described below:
                </p>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    1.  Data You Provide.  Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (“Anonymous Data”). We collect the content, communications and other information you provide when you use our Services such as when you create or use your account with us (“Account”) or when you provide feedback to us. You are not required to provide the personal data that we have requested. However, if you choose not to do so, in many cases we will not be able to provide you with our products or services or respond to requests you may have. Information we collect may include the following:
                </p>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    2. Legal Compliance.  We use your personal data to verify your identity in order to comply with fraud monitoring, prevention and detection obligations, laws associated with the identification and reporting of illegal and illicit activity, such as AML (Anti-Money Laundering) and KYC (Know-Your-Customer) obligations, and financial reporting obligations. For example, we may be required to record and verify your identity for the purpose of compliance with legislation intended to prevent money laundering and financial crimes. These obligations are imposed on us by the operation of law, industry standards, and by our financial partners, and may require us to report our compliance to third parties, and to submit to third party verification audits.
                </p>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    3. Legitimate Business Interests.  Where allowed under applicable law, we rely on our legitimate business interests to process your personal data. When we do so, we balance our legitimate interests against the interests and rights of the individuals whose personal data we process. The following list sets out the business purposes that we have identified as legitimate:
                </p>
                <div className="mt-12 ">
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (1) Detect, monitor and prevent fraud and unauthorized payment transactions;                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (2) Mitigate financial loss, claims, liabilities or other harm to you, the public, and AILens;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (3) Determine eligibility for and offer new AILens products and services;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (4) Respond to inquiries, send Service notices and provide customer support;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (5) Promote, analyze, modify and improve our Services, systems, and tools, and develop new products and services, including reliability of the Services;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (6) Manage, operate and improve the performance of our Services by understanding their effectiveness and optimizing our digital assets;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (7) Analyze and advertise our Services;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (8) Conduct aggregate analysis and develop business intelligence that enable us to operate, protect, make informed decisions, and report on the performance of, our business;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (9) Share your personal data with third party service providers that provide services on our behalf and business partners which help us operate and improve our business;
                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (10) Enable network and information security throughout AILens and our Services; and                    </p>
                    <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                        (11) Share your personal data among our affiliates for administrative purposes.                    </p>

                </div>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    4. Service-Related Interaction.  We may process and use your personal data to communicate with you, for example, to provide information relating to our Services. We may also send service-related email, conduct survey and get feedback from you or otherwise interact with you when you register with or access our Services based on the information you provide us.
                </p>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    5. Advertising. We may use your personal data and your device to target advertisements for our Services to you on our Site and other sites you visit (“interest-based advertising”), where allowed by applicable law, including any consent requirements. For example, when you visit our Site, we will use cookies to identify your device and direct ads for our Services to you. You have choices and control over our cookies (or similar technologies) we use to advertise to you. Please see our Cookie Policy for more information. At present, there is no industry standard for recognizing Do Not Track browser signals, so we do not respond to them.                </p>
                <p className="mt-4 text-lg  md:text-xl text-[#5F5F5F] leading-relaxed font-inter">
                    6. Marketing. We may use your personal data to send you promotional messages, marketing, advertising, and other information based on your preferences on social media advertising through social media platforms, personalize, measure, ad improve our advertising, and analyze characteristics and preferences to send you promotional messages, marketing, advertising and other information that we might be of interest to you. You can opt out of receiving marketing communications from us at any time by using the “Unsubscribe” link in each newsletter or communication, or through your account (if you have created one).
                </p>
            </div>



            <div className="mt-8">
                <h1 className="text-5xl font-bold text-[#2697FF] mb-2">Permitted Disclosure of Personal Data</h1>
                <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                    We value your privacy. We do not share, sell, lease, transfer or otherwise disclose your personal data to third parties unless otherwise stated below:
                </p>
            </div>

            <div className="space-y-6">
                <section>
                    <p
                        className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        1. Verification Service Providers In order to detect and/or prevent fraud and comply with our legal obligations, we will sometimes need to share your information with third party identity verification services.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        2. Operational Service Providers In order to deliver our Services to you, we will need to share information with third parties who provide us with certain assistance including data storage, customer service platforms, accounting and invoicing, IT, email and other communication services, security and fraud detection.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        3. Other Service Providers In order to improve the functionality of our Services, we will sometimes share information with service providers that help us analyze how people are using our Services in order for us to refine the product. We may also share your information with services providers who help us deliver certain advertising/marketing campaigns in order to grow our business.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        4. Law Enforcement Agencies and Regulators We may share your personal data as we believe necessary: (i) to comply with applicable law, or rules imposed by payment method in connection with us; (ii) to respond to requests from our contractual rights; (iii) to protect the Services, rights, privacy, safety and property of Aliens, our Users or others; and (iv) to respond to requests from government agencies, regulatory agencies and other public and government authorities, which may include such authorities outside your country of residence.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        5. Group Companies Information may be shared with Aliens Group entities in order to fulfill, meet our legal and regulatory obligations. EU Users should be aware that Aliens Groups affiliates are likely to act as processors in respect of your personal information in order to provide you with the best possible service and experience.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        6. Business Partners6. Business Partners From time to time we may partner with other companies or individuals to allow you to transact with individuals that are customers of such Partners and via Aliens. In order to complete these transactions, we will need to share information regarding your account (such as name, email address, phone number) with such Partners to the extent necessary to complete the transaction and meet our legal and regulatory obligations. Your information will only be shared with such Partners to the extent you actually transact or interact with customers of such Partner.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        7. Professional Advisors In order to complete third party financial, technical, compliance and legal audits of Aliens's operations or otherwise comply with our legal obligations or corporate formalities, we may need to share information about such review with professional advisers acting as processors or joint controllers who provide consulting, legal, compliance, insurance or accounting services.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        8. Third Parties We may choose to sell, transfer, or merge parts of our business or our assets to third parties. Alternatively, we may acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this Privacy Policy.
                    </p>
                </section>

                <section>
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-8">
                        9. With Your Consent Where you provide us with consent to share your personal information as described at the time of consent. For example, At your direction or as described at the time of collection, such as to enable a third party application or website to access your personal information.
                    </p>
                </section>
            </div>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">How We Protect Personal Data</h1>
                <div className="space-y-4">
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        We use reasonable technical and organizational information security measures to provide appropriate protection for your personal information from leaking or unauthorized access and prevent such risks of providing personal information. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        We cannot, however, guarantee your personal data may not be accessed, disclosed, altered, or destroyed by any attacks from hackers or any skilled computer experts. If you have reason to believe that your interaction with us is no longer secure (e.g., you feel that the security of your account has been compromised), please contact us immediately.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        In relation to EEA Users, we have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                    </p>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Data Retention Policy</h1>
                <div className="space-y-4">
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        We retain your personal data as long as we are providing our Services to you. Even after we stop providing our Services directly or indirectly to you, and even if you close your account, we keep your personal data in order to comply with our legal and regulatory obligations. We may also keep it to assist with our fraud monitoring, detection and prevention activities. We also keep your personal data to comply with our tax, accounting, and financial reporting obligations, where we are required to retain the data by our contractual commitments to our financial partners, and where data retention is mandated by the payment methods you used. In all cases where we keep data, we do so in accordance with any limitation periods and records retention obligations that are imposed by applicable law.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        Even after you close your account, we may be required to retain certain information you have provided for a number of years. For example, we are subject to various AML and CTF regulations which, in a number of jurisdictions, require us to retain certain personal data for a minimum period of five (5) years following the closure of your account.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        For further details of retention periods for different aspects of your personal data please contact us.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        In some circumstances we may use Anonymized Data (defined in Section 2) for research or statistical purposes in which case we may use this information indefinitely without further notice to you.
                    </p>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Your Rights and Choices</h1>
                <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter ">
                    You may have choices regarding our collection, use and disclosure of your personal data:
                </p>
                <div className="space-y-4">
                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            1. Opting out of receiving electronic communications from us. If you no longer want to receive marketing-related emails from us, you may opt-out via the unsubscribe link included in such emails. We will try to comply with your request(s) as soon as reasonably practicable.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            2. If you would like to review, correct or update your personal data that you have previously disclosed to us, you may do so by signing in to your account or by contacting us.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            3. Your data protection rights. Depending on your location and subject to applicable law, you may have the following rights with regard to the personal data we control about you:
                        </p>
                        <ul className="  text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            <li>(1) The right to request that Aliens updates your personal data that is inaccurate, incomplete or outdated;</li>
                            <li>(2) The right to request the deletion or erasure your personal data in certain circumstances under applicable law;</li>
                            <li>(3) The right to request that Aliens restricts the use of your personal data in certain circumstances under applicable law;</li>
                            <li>(4) Where the processing of your personal data is based on your previously given consent, you have the right to withdraw your consent at any time; and/or</li>
                            <li>(5) In some cases, you may also have the right to object to the processing of your personal data.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            Notwithstanding anything to the foregoing, there may be situations where we cannot grant your request — for example, if you ask us to delete your transaction data and Aliens is legally obligated to keep a record of that transaction to comply with law. We may also decline to grant a request where doing so would undermine our legitimate use of data for anti-fraud and security purposes, such as when you request deletion of an account that is being investigated for security concerns. Other reasons your privacy request may be denied are if it jeopardizes the privacy of others, is frivolous or vexatious, or would be extremely impractical or unreasonable.
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] mt-8">Process for exercising data protection rights</h1>
                <div className="space-y-4">
                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4 ">
                            1. Fee is usually required. Usually, you will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your request in these circumstances.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            2. What we may need from you. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            3. Time limit to respond. We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                        </p>
                        <h2 className="text-[#5F5F5F] text-lg  leading-relaxed font-inter ">Link to Other Websites</h2>
                    </div>

                    <div>
                        <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                            Our Services may provide the ability to connect to other online services. These online services may operate independently from us and/or may have their own privacy notices or policies, which we strongly suggest you review. If any online service linked to our Services is not owned or controlled by us, or does not claim to be covered by this Privacy Policy, we are not responsible for it and it is not covered by this Privacy Policy. Please refer to the privacy policy associated with that service.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Used by Minors</h1>
                <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                    Our Services are not directed to minors, including children under the age of 18, and we request that they not provide personal data through the Services. In some countries, we may impose higher age limits as required by applicable law.
                </p>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Updates To This Privacy Policy and Notifications</h1>
                <div className="space-y-4">
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        We may change this Privacy Policy from time to time. When we do make updates, we'll let you know by changing the "Last updated" legend at the top of this Privacy Policy. If it is a big update, we will send you a notification or post a notice on our website. If you ever have any questions about changes made to the Privacy Policy, please contact us.
                    </p>

                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                        If applicable law requires that we obtain your consent or provide notice in a specified manner prior to making any changes to this Privacy Policy applicable to you, we will provide such required notice and obtain your required consent.
                    </p>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Mobile Devices</h1>
                <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter mt-4">
                    With your consent, we may send you push notifications. You may grant us access to your location information or contact details in order to provide our Services to you. When you use our Services on a mobile device, we may collect information tagged with your location information. Please read the instructions on your mobile device manufacturer how to change the settings to enable or disable the sharing of such information or the receipt of (or opt-out of receiving) push notifications (including Software Development Kit ("SDK") and other similar data). Different device operating systems may have different settings, so please familiarize yourself with such settings governing push notifications.
                </p>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Legal Basis for Processing (For EEA Users only)</h1>
                <div className="space-y-4">
                    <p className="text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                        This section only applies to European Economic Area ("EEA") users. We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                        <li>
                            Where we need to perform the contract we are about to enter into or have entered into with you.
                        </li>
                        <li>
                            Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                        </li>
                        <li>
                            Where we need to comply with a legal or regulatory obligation.
                        </li>
                    </ul>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">California Consumer Privacy Act (CCPA)</h1>
                <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter mb-4">
                    If you are located in California, we process your personal data in accordance with the California Consumer Privacy Act (CCPA). This section provides additional details about the personal data we collect and use for purposes of CCPA.
                </p>

                <div className="space-y-4">
                    <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                        How We Collect, Use, and Disclose Your Personal Data. The Personal Data We Collect section describes the personal data we may have collected about you, including the categories of sources of that information. We collect this information for the purposes described in the How We Use Personal Data section. We share this information as described in the How We Disclose Personal Data section. Aliens uses cookies, including advertising cookies, as described in our Cookie Policy. Your CCPA Rights and Choices: As a California consumer and subject to certain limitations under the CCPA, you have choices regarding our use and disclosure of your personal data:
                    </p>

                    <div>
                        <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter mb-2">
                            Exercising the right to know: You may request the following information about the personal information we have collected about you:
                        </p>
                        <ul className="list-decimal list-inside  space-y-2  text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                            <li>the categories and specific pieces of personal information we have collected;</li>
                            <li>the categories of sources from which we collected the personal information;</li>
                            <li>the business or commercial purpose for which we collected the personal information;</li>
                            <li>the categories of third parties with whom we shared the personal information; and</li>
                            <li>the categories of personal information about you that we disclosed for a business purpose, and the categories of third parties to whom we disclosed that information for a business purpose.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                            Exercise the right to delete: You may request that we delete the personal information we have collected from you, subject to certain limitations under applicable law.
                        </p>

                        <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                            Exercise the right to opt-out from a sale: You may request to opt-out or any "sale" of your personal information that may take place.
                        </p>

                        <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                            Non-discrimination: The CCPA provides that you may not be discriminated against for exercising these rights.
                        </p>

                        <p className=" text-[#5F5F5F] text-lg  leading-relaxed font-inter">
                            To submit a request to exercise any of the rights described above, please contact us.
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Languages</h1>
                <p className="text-gray-600">
                    This Private Policy is written in English. Any translations into another language are made solely for convenience and shall not be used in the interpretation or application of this Privacy Policy. The other translations of this Privacy Policy are only for reference. In case of any discrepancy, the English version shall prevail.
                </p>
            </section>

            <section>
                <h1 className="text-5xl font-bold text-[#2697FF] my-8">Contact Us</h1>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        To submit questions regarding this Privacy Policy, you can contact Aliens by emailing us at support@website.com.
                    </p>

                    <p className="text-gray-600">
                        We may need to verify your identity before responding to your request, such as verifying that the email address from which you send the request matches your email address that we have on file. Authentication based on a government-issued and valid identification document may be required.
                    </p>
                </div>
            </section>
        </div>
    )
}