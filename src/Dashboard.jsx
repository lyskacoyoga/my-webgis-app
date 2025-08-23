import React from "react";
import { User, Fish, CreditCard, Banknote } from "lucide-react";

const Dashboard = ({ navigate }) => {
  const stats = [
    { label: "Jumlah Nelayan", value: "15,200", icon: User, color: "text-blue-500", bgColor: "bg-blue-50" },
    { label: "Total Produksi Ikan (Ton)", value: "3,850", icon: Fish, color: "text-green-500", bgColor: "bg-green-50" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 rounded-lg ${stat.bgColor}`}>
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
          <h3 className={stat.color}>{stat.label}</h3>
          <p className="font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
