import { cancelled, checked, menuIcon, message, pdf } from "@/constants/assets";

const UploadedDocs = () => {
  const documentsToUpload = [
    {
      title: "Quiz Certificate",
      status: "Assessed",
      icon: pdf,
      report: "Approved",
    },
    {
      title: "CAC Certificate",
      status: "Not uploaded",
      icon: pdf,
      report: "Rejected",
    },
    {
      title: "Business Plan",
      status: "Assessed",
      icon: pdf,
    },
    {
      title: "Financial Model",
      status: "Not uploaded",
      icon: pdf,
    },
  ];

  return (
    <div>
      <div>
        {documentsToUpload.map((doc, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-between my-3 py-3">
                <div className="flex items-center">
                  <img
                    src={doc.icon}
                    alt=""
                    className="px-3 py-4 rounded-lg bg-accented-4"
                  />
                  <div className="ml-4">
                    <span className="block font-semibold">{doc.title}</span>
                    <span className={`${doc.status === 'Assessed' ? 'bg-accented-5 text-accented-1' : 'bg-accented-6 text-accented-2'} px-2 rounded-md`}> {doc.status}</span>
                  </div>
                </div>
                <div className="flex">
                  {doc.report && (
                    <div
                      className={`${
                        doc.report === "Approved"
                          ? "bg-accented-7"
                          : "bg-accented-8"
                      } flex justify-center mr-5 pl-2 pr-3 py-1 rounded-lg`}
                    >
                      <img
                        src={doc.report === "Approved" ? checked : cancelled}
                        alt=""
                        className="scale-75"
                      />
                      <span
                        className={`${
                          doc.report === "Approved"
                            ? "text-accented-9"
                            : "text-accented-4"
                        } text-h12`}
                      >
                        {doc.report}
                      </span>
                    </div>
                  )}
                  <div className="flex">
                    <img src={message} alt="" className="inline-block w-7 h-7"/>
                    <span className="ml-2 mt-1 block">0</span>
                  </div>
                  <img src={menuIcon} alt="" className="inline-block ml-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadedDocs;
