"use client";

import Image from "next/image";
import ButtonComponent from "./custom/ButtonComponent";

const Footer = () => {
  const handleJoinWaitlist = () => {
    // Handle waitlist join action
    console.log("Joining waitlist");
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Start investing section */}
        <div className="bg-blue-600 rounded-lg p-12 text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Start investing with us</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Convert the user to create an account and invest on the platform to
            enjoy monthly cash flow/dividend and appreciation.
          </p>
          <ButtonComponent
            text="Join the Waitlist →"
            onClick={handleJoinWaitlist}
            className="!bg-white !text-blue-600 hover:!bg-gray-100"
          />
        </div>

        {/* Footer links and info */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div>
              <a href="/">
                <h3 className="font-medium mb-4">Investments</h3>
              </a>
              {/* Add investment links */}
            </div>
            <div>
              <a href="/">
                <h3 className="font-medium mb-4">Owners/Brokers</h3>{" "}
              </a>
              {/* Add owners/brokers links */}
            </div>
            <div>
              <a href="/">
                <h3 className="font-medium mb-4">Lorem Ipsum</h3>
              </a>
              {/* Add additional links */}
            </div>
            <div>
              <a
                href="mailto:support@getleveled.co"
                className="text-white/60 hover:text-white"
              >
                support@getleveled.co
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/">
                {" "}
                <Image
                  src="/images/Leveled.png" // Add your logo
                  alt="Leveled Logo"
                  width={120}
                  height={40}
                />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 Leveled. All rights reserved.
            </p>
          </div>

          {/* Legal text */}
          <div className="mt-8 text-white/60 text-xs space-y-4 text-justify">
            <p>
              Leveled, Inc. ("Leveled", the "Company", "our" or "we") operates a
              website at{" "}
              <a
                href="https://getleveled.co"
                className="underline hover:text-white"
              >
                https://getleveled.co
              </a>{" "}
              (the "Platform"). By using the Platform, you accept our Terms of
              Service and Privacy Policy.
            </p>

            <p>
              This Platform may contain certain historical returns, expected
              returns, projections or forward-looking statements. Past
              performance is not a guarantee of future results. Any such
              historical returns, expected returns, projections or
              forward-looking statements may not reflect actual future
              performance. Our ability to predict future events, actions, plans
              or results is inherently uncertain and actual outcomes may differ
              materially from those set forth on or anticipated by Leveled.
              Diversification and asset allocation do not ensure profit or
              guarantee against loss.
            </p>

            <p>
              All investments involve risk, including the risk of the partial or
              total loss of your invested capital. Information provided by
              Leveled does not consider an investor's specific objectives or
              risk profile. Investment decisions should be made based on your
              own objectives, risk tolerance and circumstances, and in
              consultation with your own professional advisors.
            </p>

            <p>
              The information contained on the Platform neither constitutes an
              offer for nor a solicitation of interest in any specific
              securities or any offering thereof. Content provided by Leveled is
              not intended to be a recommendation or investment advice, and
              Leveled is not a registered, licensed or supervised as a broker
              dealer by the Securities and Exchange Commission or the Financial
              Industry Regulatory Authority.
            </p>

            <p>
              While the data we use from third parties is believed to be
              reliable, we cannot ensure the accuracy or completeness of data
              provided by investors or other third parties.
            </p>

            <p>
              Leveled takes any potential security issues seriously and
              encourages the responsible and timely reporting of unknown
              security issues. Please send any discovered security concerns to{" "}
              <a
                href="mailto:support@getleveled.co"
                className="underline hover:text-white"
              >
                support@getleveled.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
