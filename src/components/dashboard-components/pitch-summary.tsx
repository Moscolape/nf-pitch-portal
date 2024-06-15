const PitchSummary = () => {
  return (
    <div className="font-DM-Sans flex justify-between">
      <div className="w-1/2 mr-5">
        <div className="p-5 border border-main-6 rounded-xl mb-5">
          <span className="text-main-5 font-semibold block">Summary:</span>
          <span className="text-h12 text-main-2">
            Sweet Haven Bakery is a cozy, community-focused bakery offering a
            wide range of artisanal baked goods made from the finest
            ingredients. Our mission is to bring joy to our customers with every
            bite by providing freshly baked pastries, bread, cakes, and cookies
            that are both delicious and visually appealing. We aim to become a
            beloved fixture in the neighborhood, known for our high-quality
            products, exceptional customer service, and warm, inviting
            atmosphere
          </span>
        </div>
        <div className="p-5 border border-main-6 rounded-xl mb-5">
          <span className="text-main-5 font-semibold block">Industry:</span>
          <div className="mt-3">
            <span className="text-h13 text-accented-2 bg-accented-11 px-3 py-1 rounded-full inline-block mr-3">
              Food & Beverage
            </span>
            <span className="text-h13 text-accented-2 bg-accented-11 px-3 py-1 rounded-full inline-block">
              Agriculture
            </span>
          </div>
        </div>
        <div className="p-5 border border-main-6 rounded-xl mb-5">
          <span className="text-main-5 font-semibold block">
            Target Market:
          </span>
          <div className="mt-3">
            <span className="text-h13 text-accented-2 bg-accented-11 px-3 py-1 rounded-full inline-block mr-3">
              Ceremonies
            </span>
            <span className="text-h13 text-accented-2 bg-accented-11 px-3 py-1 rounded-full inline-block">
              Parties
            </span>
          </div>{" "}
        </div>
        <div className="p-5 border border-main-6 rounded-xl mb-5">
          <span className="text-main-5 font-semibold block">Skill Group:</span>
          <div className="mt-3">
            <span className="text-h13 text-accented-2 bg-accented-11 px-3 py-1 rounded-full inline-block">
              Culinary & Catering Services
            </span>
          </div>{" "}
        </div>
      </div>
      <div className="w-1/2 p-5 border border-main-6 rounded-xl">
        <span className="text-main-5 font-semibold block">
          Funding Requirement:
        </span>
        <span className="text-h12 block my-5">$150,000</span>
        <span className="text-h12 block">Breakdown:</span>
        <div className="mt-5 text-h12 text-main-2">
            1. Equipment and Supplies (40% - $60,000): Purchase commercial-grade ovens, mixers, and baking tools. Stock up on high-quality ingredients and packaging materials. <br /><br /> 
            
            2. Storefront Renovation (30% - $45,000): Create
            a welcoming and aesthetically pleasing interior design. Install seating areas, display cases, and signage. <br /><br />
            
            3. Marketing and Branding (15% - $22,500): Develop a strong brand identity, including logo, packaging, and signage. Launch local marketing campaigns and social media promotions. Host community events and grand opening celebrations. <br /><br />
            
            4. Operational Expenses (15% - $22,500): Cover initial
            rent, utilities, and insurance costs. Hire and train staff to ensure high-quality service and product consistency.
        </div>
      </div>
    </div>
  );
};

export default PitchSummary;
