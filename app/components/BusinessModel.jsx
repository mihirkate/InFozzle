import React from "react";
import Card from "./custom/Card";
import ImageCard from "./custom/ImageCard";

const BusinessModel = () => {
  const content1 = `Small businesses are the cornerstone of the American economy providing ~50% of all employment. A lot of these businesses are owned by boomers, who will be retiring in the next 5 years.
70% of these retiring owners do not have a succession plan. This will result in $5T assets available for sale. This is going to set the stage for the largest wealth transfer of our generation from baby boomers to millennials.
However, most millennials are in corporate jobs and cannot work out the time / money / risk tradeoffs to buy and operate these businesses. They will either shut down or be taken over by Private Equity / large corporations. Main street will never look the same again!`;

  const content2 = `Leveled is an innovative platform that is attempting to democratize small business ownership. Our aim is to sustainably run these businesses and continue to provide employment to the community and fuel the local economy.
At Leveled, we buy small businesses from retiring owners, make operational improvements and put capable operators in place. Further, we will enable investors to own a piece of these businesses with as little as $10,000 and in turn earn a share of the cash flow generated in the form of dividends. 
All this without any time investment from our customers!
Over time, we will look for opportunities to further grow and scale these businesses to maximize value for our investors.`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Win-win business model</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 text-center ">
            Lorem ipsum dolor sit amet consectetur. Libero ultricies quis
            pretium ut platea risus ac.
          </p>
          <p className="text-lg text-gray-600 text-center">
            Maecenas elementum amet tellus dolor habitasse ipsum.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-blue-50 rounded-3xl p-8">
          <Card
            title="The problem"
            content={content1}
            className="bg-transparent text-justify"
          />
        </div>

        <ImageCard
          src="/images/small-business.png"
          alt="Open Sign"
          width={605}
          height={565}
        />

        <ImageCard
          src="/images/computer-user-at-home-image.png"
          alt="Woman working on laptop"
          width={605}
          height={565}
        />

        <div className="bg-blue-50 rounded-3xl p-8">
          <Card
            title="Our solution"
            content={content2}
            className="bg-transparent text-justify"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
