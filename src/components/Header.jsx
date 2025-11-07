import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  // ✅ Dropdown menu items
  const serverInfoMenu = {
    items: [
      { key: "1", label: <a href="/rules">Server Rules</a> },
      { key: "2", label: <a href="/drops">Drop List</a> },
      { key: "3", label: <a href="/combination">Combination Guide</a> },
      { key: "4", label: <a href="/updates">Update Logs</a> },
      { key: "5", label: <a href="/pitboss">Pitboss Status</a> },
      { key: "6", label: <a href="/tournament">Tournament</a> },
      { key: "7", label: <a href="/leaderboard">Leaderboard</a> },
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-[calc(100%-2rem)] h-[110px] mt-[1rem] px-[2rem] mx-[1rem] rounded-[8px] px-8 flex items-center justify-between bg-[#00000066] backdrop-blur-md z-50">
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div
          className="group flex flex-col text-center justify-center leading-[0.9] "
        >
          <span className="!font-[800] !text-[#fff] text-[30px] transition-colors duration-300">
            RF ONLINE
          </span>
          <span className="!text-[47px] !font-[800] !text-[#FBAA0F] transition-colors duration-300">
            NEXUS
          </span>
        </div>

        {/* Dropdown */}
        <Dropdown menu={serverInfoMenu} trigger={["click"]}>
          <Button
            type="text"
            className="!text-[#fff] hover:!text-[#FBAA0F] text-[20px] font-[500] transition"
          >
            <Space>
              Server Info
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        {/* Download */}
        <Button
          type="text"
          href="/download"
          className="!text-[#fff] hover:!text-[#FBAA0F] text-[20px] font-[500] transition"
        >
          Download
        </Button>

        {/* Donate */}
        <Button
          type="text"
          href="/donate"
          className="!text-[#fff] hover:!text-[#FBAA0F] text-[20px] font-[500] transition"
        >
          Donate
        </Button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-[20px]">
        {/* Social Links */}
        <FontAwesomeIcon
          icon={faDiscord}
          className="text-[#fff] text-[30px] hover:text-[#5865F2] transition"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-[#fff] text-[30px] hover:text-[#1877F2] transition"
        />
        {/* GameCP Button */}
        <Button
          href="/gamecp"
          type="default"
          className="!bg-[#FBAA0F] !text-[#fff] !font-[700] !rounded-none !border-none hover:!bg-white hover:!text-[#FBAA0F] transition-all duration-300"
        >
          GameCP
        </Button>
      </div>
    </header>
  );
}
