import React, {useState, useEffect} from "react";

export default function Rules() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Fetch the rules JSON from public folder
    fetch("/rules.json")
      .then((res) => res.json())
      .then((data) => setRules(data))
      .catch((err) => console.error("Failed to load rules:", err));
  }, []);

  return (
    <main className="relative min-h-screen flex text-[#fff] max-h-[calc(100vh-150px)]">
      <div className="h-[calc(100vh-202px)] w-full mt-[140px] z-10 px-[1rem] pb-[1rem] relative flex items-center justify-center">
        <div className="bg-[#00000080] h-full max-w-[1024px] w-full p-[20px]">
          <h1 className="text-[45px] font-[800] text-[#fff] text-center">
            Server Rules
          </h1>
          <div className="overflow-y-scroll h-[calc(100%-80px)] pl-[10px] scrollbar-thin scrollbar-thumb-[#ffffff40] scrollbar-track-transparent hover:scrollbar-thumb-[#ffffff70]">
            {
              rules?.map((rule, idx) => {
                return (
                  <div>
                    <h1 className="font-[600] text-[30px]">{idx+1}. {rule?.rule}</h1>
                    <h4 className="font-[500] text-[18px] pl-[10px]">{rule?.description}</h4>
                    <p className="font-[400] text-[16px] pl-[10px]">1st Offense: {rule.offense_1}</p>
                    <p className="font-[400] text-[16px] pl-[10px]">2nd Offense: {rule.offense_2}</p>
                    <p className="font-[400] text-[16px] pl-[10px]">3rd Offense: {rule.offense_3}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}
