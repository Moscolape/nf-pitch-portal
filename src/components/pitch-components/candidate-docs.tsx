import { pdf2 } from "@/constants/assets";

const CandidateDocs = () => {
  const candidateDocs = [
    {
      title: "Quiz Certificate",
      mimeType: "PDF",
      icon: pdf2,
      fileSize: "1mb",
    },
    {
      title: "CAC Certificate",
      mimeType: "JPG",
      icon: pdf2,
      fileSize: "2mb",
    },
    {
      title: "Business Plan",
      mimeType: "PDF",
      icon: pdf2,
      fileSize: "3mb",
    },
    {
      title: "Financial Model",
      mimeType: "PDF",
      icon: pdf2,
      fileSize: "4mb",
    },
  ];

  return (
    <div className="mt-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg font-DM-Sans">
        <span className="text-main-4 text-h9 font-DM-Sans font-semibold">
          Documents
        </span>
        <div className="flex mt-7">
          {candidateDocs.map((doc, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col items-center justify-center bg-main-8 p-5 rounded-xl border mr-5">
                  <img src={doc.icon} alt="" className="" />
                  <span className="inline-block my-1 text-main-2">{doc.mimeType}</span>
                  <span className="text-main-2">{doc.fileSize}</span>
                  <span className="font-medium mt-2">{doc.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CandidateDocs;
