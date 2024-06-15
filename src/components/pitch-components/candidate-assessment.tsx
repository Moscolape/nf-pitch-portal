const CandidateAssessment = () => {
  return (
    <div className="mt-10 font-DM-Sans">
      <div className="bg-white p-8 rounded-2xl shadow-lg font-DM-Sans">
        <span className="text-main-5 text-h9 font-DM-Sans font-semibold">
          Assessment
        </span>
        <div className="grid grid-cols-3 mt-7 gap-5 font-DM-Sans">
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Feasibility & Sustainability (30 marks)
            </span>
            <span>25/30</span>
          </div>
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Market Relevance (20 marks)
            </span>
            <span>10/20</span>
          </div>
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Competitive edge / Innovation (15 marks)
            </span>
            <span>10/15</span>
          </div>
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Risk assessment / Mitigation plans (15 marks)
            </span>
            <span>5/15</span>
          </div>
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Scalabiity (15 marks)
            </span>
            <span>10/15</span>
          </div>
          <div className="p-5 border rounded-xl">
            <span className="text-h12 block font-medium mb-2">
              Overall Impression (5 marks)
            </span>
            <span>5/5</span>
          </div>
        </div>
        <div className="p-5 border rounded-xl mt-5">
          <span className="text-h12 block font-medium mb-2">
            Final Score (100 marks)
          </span>
          <span className="font-semibold text-accented-4">60/100</span>
        </div>
        <div className="p-5 border rounded-xl mt-5 font-DM-Sans">
          <span className="text-h11 block font-semibold mb-2">Comments</span>
          <div className="m-5 border-l px-5">
            <div className="">
              <span className="text-h12"><b>Assessor 1</b>{" "} 5h</span>
              <span className="text-main-2 mt-1 text-h12 block">What is the purpose of your business?</span>
            </div>
            <div className="mt-3">
              <span className="text-h12"><b>Assessor 2</b>{" "} 5h</span>
              <span className="text-main-2 mt-1 text-h12 block">What is the purpose of your business?</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="nin"
            className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
          >
            My Comment
          </label>
          <input
            type="text"
            id="nin"
            className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
            placeholder="Write comment here..."
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateAssessment;
