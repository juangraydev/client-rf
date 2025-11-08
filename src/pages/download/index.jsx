import { Table } from "antd";

export default function Download() {
  const dataSource = [
    {
      key: "1",
      update: "06/25/2025",
      description: "Full Client",
      size: "2.5GB",
      link_label: "Google Drive",
      link: "https://drive.usercontent.google.com/download?id=1Z24w7OkINAqG88QhNvXqNKHRbPzfFLWn&export=download&authuser=0",
    },
    {
      key: "2",
      update: "06/25/2025",
      description: "Full Client",
      size: "2.5GB",
      link_label: "MEDIAFIRE",
      link: "https://drive.usercontent.google.com/download?id=1Z24w7OkINAqG88QhNvXqNKHRbPzfFLWn&export=download&authuser=0",
    },
    {
      key: "3",
      update: "06/25/2025",
      description: "Full Client",
      size: "2.5GB",
      link_label: "MEGA",
      link: "https://drive.usercontent.google.com/download?id=1Z24w7OkINAqG88QhNvXqNKHRbPzfFLWn&export=download&authuser=0",
    },
  ];

  const columns = [
    {
      title: <span className="text-[#fff] font-[700]">Last Update</span>,
      dataIndex: "update",
      key: "update",
      render: (text) => <span className="text-[#fff] font-[500]">{text}</span>,
    },
    {
      title: <span className="text-[#fff] font-[700]">Description</span>,
      dataIndex: "description",
      key: "description",
      render: (text) => <span className="text-[#fff] font-[500]">{text}</span>,
    },
    {
      title: <span className="text-[#fff] font-[700]">Size</span>,
      dataIndex: "size",
      key: "size",
      render: (text) => <span className="text-[#fff] font-[500]">{text}</span>,
    },
    {
      title: <span className="text-[#fff] font-[700]">Link</span>,
      key: "link",
      render: (_, record) => (
        <a
          href={record.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBAA0F] font-bold hover:underline"
        >
          {record.link_label}
        </a>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen flex text-[#fff] max-h-[calc(100vh-150px)]">
      <div className="h-[calc(100vh-202px)] w-full mt-[140px] z-10 px-[1rem] pb-[1rem] relative flex items-center justify-center">
        <div className="bg-[#00000080] h-full max-w-[1024px] w-full p-[20px]">
          <h1 className="text-[45px] font-[800] text-[#fff] text-center">
            Download
          </h1>
          <h1 className="text-[30px] font-[800] text-[#fff]">[FULL CLIENT]</h1>

          {/* ✅ Transparent table, flat edges, white borders, bold text */}
          <div className="border-2 border-[#fff] bg-transparent">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
              className="font-bold
                         [&_.ant-table]:!bg-transparent 
                         [&_.ant-table-container]:!rounded-none 
                         [&_.ant-table-container_.ant-table-content]:!rounded-none 
                         [&_.ant-table-thead>tr:first-child>th:first-child]:!rounded-none 
                         [&_.ant-table-thead>tr:first-child>th:last-child]:!rounded-none 
                         [&_.ant-table-thead>tr>th]:!bg-[#FBAA0F] 
                         [&_.ant-table-thead>tr>th]:!text-[#fff] 
                         [&_.ant-table-thead>tr>th]:!border-[#fff]  
                         [&_.ant-table-tbody>tr>td]:!border-[#fff] 
                         [&_.ant-table-tbody>tr>td]:!bg-transparent 
                         [&_.ant-table-tbody>tr>td]:!text-center 
                         [&_.ant-table-tbody>tr>td]:!text-[#fff]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
