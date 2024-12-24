import React from "react";

const InvestmentCounter = () => {
  const investments = [
    {
      id: 1,
      title: "FranShares",
      subtitle: "Waitlist counter",
      amount: "41,974",
    },
    {
      id: 2,
      title: "An investor from Connecticut",
      subtitle: "intends to invest",
      amount: "$2,000",
    },
    {
      id: 3,
      title: "An investor from Oregon",
      subtitle: "intends to invest",
      amount: "$20,000",
    },
    {
      id: 4,
      title: "An investor from New Jersey",
      subtitle: "intends to invest",
      amount: "$20,000",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-50 rounded-xl p-6">
      {investments.map((investment) => (
        <div
          key={investment.id}
          className="flex flex-col items-start space-y-1"
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-600 text-sm">{investment.title}</p>
          </div>
          <p className="text-gray-500 text-sm">{investment.subtitle}</p>
          <p className="text-blue-500 font-bold text-xl">{investment.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentCounter;
