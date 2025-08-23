import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Home, Map, TrendingUp, DollarSign, MessageSquare, User, BarChart2, PlusCircle, BookOpen, Search, Menu, QrCode, Banknote, Factory, Ship, ShoppingBag, Edit3, Save, Calendar, Fish, DollarSign as DollarSignIcon, CreditCard, ExternalLink } from 'lucide-react';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Function to navigate between pages
  const navigate = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false); // Close sidebar on navigation
  };

  // Navigation menu items
  const menuItems = [
    { name: 'Dashboard', icon: Home, page: 'dashboard' },
    { name: 'Map Interface', icon: Map, page: 'map' },
    { name: 'Price Prediction', icon: TrendingUp, page: 'pricePrediction' },
    { name: 'Financial Inclusion', icon: DollarSign, page: 'dashboard' }, // Part of dashboard
    { name: 'Profile Management', icon: User, page: 'profile' },
    { name: 'Advanced Analytics', icon: BarChart2, page: 'analytics' },
    { name: 'Data Input', icon: PlusCircle, page: 'dataInput' },
    { name: 'Education & Resources', icon: BookOpen, page: 'education' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 shadow-lg flex items-center justify-between z-20">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold ml-4">Fisheries WebGIS</h1>
        </div>
        {/* Search bar (hidden on mobile) */}
        <div className="relative flex-grow mx-4 max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-700 bg-opacity-70 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>
        {/* Main navigation menu (hidden on mobile) */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.page)}
              className={`flex items-center space-x-2 p-2 rounded-md transition duration-300 ${
                currentPage === item.page ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile Sidebar (appears when open) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="bg-white w-64 h-full p-4 shadow-xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-6 text-blue-800">Navigation</h2>
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.page)}
                  className={`flex items-center space-x-3 p-3 rounded-lg text-left transition duration-300 ${
                    currentPage === item.page
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {currentPage === 'dashboard' && <Dashboard navigate={navigate} />}
        {currentPage === 'map' && <MapInterface />}
        {currentPage === 'pricePrediction' && <PricePrediction />}
        {currentPage === 'profile' && <ProfileManagement />}
        {currentPage === 'analytics' && <AdvancedAnalytics />}
        {currentPage === 'dataInput' && <DataInputForm />}
        {currentPage === 'education' && <EducationResources />}
      </main>

      {/* Finbot Chat Assistant */}
      <FinbotChat />
    </div>
  );
}

// Dashboard Component (Step 1 & 4)
const Dashboard = ({ navigate }) => {
  // Mock data for statistics
  const stats = [
    { label: 'Number of Fishers', value: '15,200', icon: User, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Total Fish Production (Tonnes)', value: '3,850', icon: Fish, color: 'text-green-500', bgColor: 'bg-green-50' },
  ];

  const qrisAdoptionRate = 78;
  const bankingServicesRate = 62;

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Main Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Interactive Map Placeholder */}
        <div className="md:col-span-2 bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center h-96 relative overflow-hidden group">
          <Map className="w-24 h-24 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          <p className="mt-4 text-lg text-gray-600 group-hover:text-blue-700 transition-colors duration-300 font-semibold">Interactive Map of Southeast Sulawesi Fisheries</p>
          <p className="text-sm text-gray-500">Click below to explore!</p>
          <button
            onClick={() => navigate('map')}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Go to Map Interface
          </button>
        </div>

        {/* Right Sidebar Widgets */}
        <div className="md:col-span-1 space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 ${stat.bgColor}`}>
              <div className={`p-3 rounded-full ${stat.color} ${stat.bgColor.replace('bg-', 'bg-opacity-50 ')}`}>
                <stat.icon size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}

          {/* Financial Inclusion Metrics Card (Step 4) */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <DollarSign className="mr-2 text-green-600" size={24} /> Financial Inclusion
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>QRIS Adoption Rate</span>
                  <span>{qrisAdoptionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${qrisAdoptionRate}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>Fishers Using Banking Services</span>
                  <span>{bankingServicesRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${bankingServicesRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Apply for Business Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// WebGIS Map Interface Component (Step 2)
const MapInterface = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg h-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">WebGIS Map Interface</h2>
      <div className="flex flex-col md:flex-row h-[calc(100vh-200px)]">
        {/* Map Area */}
        <div className="flex-1 bg-gray-200 rounded-lg relative overflow-hidden flex items-center justify-center p-4">
          <img
            src="https://placehold.co/800x600/E0E0E0/6B7280?text=Interactive+Map+Placeholder"
            alt="Interactive Map Placeholder"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Simulated icons for demonstration */}
          <Ship className="absolute top-1/4 left-1/3 text-blue-600 animate-pulse cursor-pointer" size={30} title="Fishermen Location" />
          <ShoppingBag className="absolute bottom-1/3 right-1/4 text-purple-600 animate-pulse cursor-pointer" size={30} title="Fish Auction Site - TPI" />
          <Factory className="absolute top-1/2 right-1/2 text-orange-600 animate-pulse cursor-pointer" size={30} title="Processing Center" />

          {/* Info Popup Example (can be triggered by click) */}
          <div className="absolute top-1/4 left-1/3 mt-10 ml-8 p-3 bg-white rounded-lg shadow-xl text-sm hidden group-hover:block transition-all duration-300">
            <p className="font-semibold text-blue-800">Fisher Area Info</p>
            <p className="text-gray-700">Fishers: 250</p>
            <p className="text-gray-700">Production: 50 Ton/Month</p>
          </div>
        </div>

        {/* Layer Control Panel */}
        <div className="md:w-64 bg-gray-50 rounded-lg p-6 mt-6 md:mt-0 md:ml-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Map Layers</h3>
          <div className="space-y-3">
            <label className="flex items-center text-gray-700 font-medium cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" defaultChecked />
              <span className="ml-2">Fishermen Locations</span>
            </label>
            <label className="flex items-center text-gray-700 font-medium cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" defaultChecked />
              <span className="ml-2">Fish Auction Sites (TPIs)</span>
            </label>
            <label className="flex items-center text-gray-700 font-medium cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" defaultChecked />
              <span className="ml-2">Processing Centers</span>
            </label>
            <label className="flex items-center text-gray-700 font-medium cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="ml-2">Coastal Zones</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// AI Price Prediction Feature Component (Step 3)
const PricePrediction = () => {
  // Mock data for price prediction chart
  const historicalData = [
    { name: 'Week 1', price: 25000 },
    { name: 'Week 2', price: 26500 },
    { name: 'Week 3', price: 27000 },
    { name: 'Week 4', price: 28000 },
    { name: 'Week 5', price: 27500 },
    { name: 'Week 6', price: 29000 },
  ];
  const forecastedData = [
    { name: 'Week 6', price: 29000 }, // Connects historical to forecast
    { name: 'Week 7', price: 30000 },
    { name: 'Week 8', price: 31500 },
    { name: 'Week 9', price: 31000 },
    { name: 'Week 10', price: 32500 },
  ];

  const fishTypes = ['Skipjack', 'Tuna', 'Mackerel', 'Snapper'];
  const timeRanges = ['Weekly', 'Monthly'];

  const [selectedFish, setSelectedFish] = useState('Skipjack');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Weekly');

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">AI Fish Price Prediction</h2>

      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <div className="flex-1 mb-4 md:mb-0">
          <label htmlFor="fishType" className="block text-sm font-medium text-gray-700 mb-2">Fish Type</label>
          <select
            id="fishType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            value={selectedFish}
            onChange={(e) => setSelectedFish(e.target.value)}
          >
            {fishTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
          <select
            id="timeRange"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
          >
            {timeRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Fish Price Prediction (per kg) - {selectedFish}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={[...historicalData, ...forecastedData]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" />
            <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} tickFormatter={(value) => `Rp${value.toLocaleString()}`} />
            <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              data={historicalData}
              stroke="#4CAF50" // Green for historical
              strokeWidth={2}
              name="Historical Price"
              dot={true}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="price"
              data={forecastedData}
              stroke="#2196F3" // Blue for forecasted
              strokeWidth={2}
              strokeDasharray="5 5" // Dotted line
              name="Forecasted Price"
              dot={true}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Card */}
      <div className="bg-blue-500 text-white rounded-xl shadow-lg p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Best Time to Sell:</h3>
        <p className="text-4xl font-extrabold">Next Week!</p>
        <p className="text-lg mt-2">Predicted increase of 5-7%</p>
      </div>
    </div>
  );
};

// Finbot Chat Assistant (Step 5)
const FinbotChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Finbot', text: 'Hello! I’m Finbot. How can I help you with financial inclusion or permits today?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'User', text: inputValue }]);
      setInputValue('');
      // Simulate Finbot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'Finbot', text: "Thanks for your message! I'm designed to help with common questions. For detailed assistance, please reach out to our support team." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-110"
      >
        <MessageSquare size={28} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl flex flex-col max-h-96">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Finbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              &times;
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'User' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Fisher/UMKM Profile Management (Step 6)
const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+62 812 3456 7890',
    address: 'Jl. Samudera No. 123, Kendari',
    businessType: 'Capture Fisher',
    mainProducts: 'Skipjack, Tuna, Sardine',
    qrisTransactions: 'Rp 5,500,000 (Last Month)',
    loanStatus: 'Approved (Rp 15,000,000)',
    digitalAdoptionLevel: 'High',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save profileData to a backend
    console.log('Profile Saved:', profileData);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Fisher/UMKM Profile</h2>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <User className="mr-2 text-blue-600" size={24} /> Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900 font-semibold">{profileData.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Phone:</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.phone}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Address:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.address}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Fish className="mr-2 text-green-600" size={24} /> Business Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Type of Business:</label>
            {isEditing ? (
              <select
                name="businessType"
                value={profileData.businessType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option>Capture Fisher</option>
                <option>Aquaculture</option>
                <option>Processing</option>
                <option>Trader</option>
              </select>
            ) : (
              <p className="text-lg text-gray-900">{profileData.businessType}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Main Products:</label>
            {isEditing ? (
              <input
                type="text"
                name="mainProducts"
                value={profileData.mainProducts}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.mainProducts}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Banknote className="mr-2 text-purple-600" size={24} /> Financial Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">QRIS Transaction History:</label>
            {isEditing ? (
              <input
                type="text"
                name="qrisTransactions"
                value={profileData.qrisTransactions}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.qrisTransactions}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Loan Status:</label>
            {isEditing ? (
              <input
                type="text"
                name="loanStatus"
                value={profileData.loanStatus}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            ) : (
              <p className="text-lg text-gray-900">{profileData.loanStatus}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Digital Financial Service Adoption Level:</h4>
          <span className={`inline-block px-4 py-2 rounded-full font-semibold ${
            profileData.digitalAdoptionLevel === 'High' ? 'bg-green-100 text-green-800' :
            profileData.digitalAdoptionLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {profileData.digitalAdoptionLevel}
          </span>
        </div>
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center"
          >
            <Save className="mr-2" size={20} /> Save Profile
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center"
          >
            <Edit3 className="mr-2" size={20} /> Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

// Advanced Analytics Page (Step 7)
const AdvancedAnalytics = () => {
  // Mock data for charts
  const monthlyProductionData = [
    { month: 'Jan', Production: 300 },
    { month: 'Feb', Production: 320 },
    { month: 'Mar', Production: 280 },
    { month: 'Apr', Production: 350 },
    { month: 'May', Production: 380 },
    { month: 'Jun', Production: 330 },
    { month: 'Jul', Production: 400 },
  ];

  const buyerSegmentationData = [
    { name: 'Local Markets', value: 400, color: '#0088FE' },
    { name: 'Restaurants', value: 300, color: '#00C49F' },
    { name: 'Processing Plants', value: 200, color: '#FFBB28' },
    { name: 'Export', value: 100, color: '#FF8042' },
  ];

  const marketingHeatmapData = [
    { area: 'Kendari', sales: 500 },
    { area: 'Bau-Bau', sales: 350 },
    { area: 'Raha', sales: 280 },
    { area: 'Kolaka', sales: 420 },
    { area: 'Wakatobi', sales: 180 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const fishTypes = ['All', 'Skipjack', 'Tuna', 'Mackerel'];
  const locations = ['All', 'Kendari', 'Bau-Bau', 'Raha'];

  const [selectedFishType, setSelectedFishType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Analytics</h2>

      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <div className="flex-1 mb-4 md:mb-0">
          <label htmlFor="analyticsFishType" className="block text-sm font-medium text-gray-700 mb-2">Fish Type</label>
          <select
            id="analyticsFishType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            value={selectedFishType}
            onChange={(e) => setSelectedFishType(e.target.value)}
          >
            {fishTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="analyticsLocation" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            id="analyticsLocation"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Fish Production Trends */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Fish Production Trends (Tonnes)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyProductionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Production" stroke="#4CAF50" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Buyer Segmentation Pie Chart */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Buyer Segmentation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={buyerSegmentationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {buyerSegmentationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} units`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Marketing Distribution Heatmap (Simulated with Bar Chart) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Marketing Distribution by Area (Sales in Kg)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketingHeatmapData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toLocaleString()} kg`} />
              <Legend />
              <Bar dataKey="sales" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Data Input Form for UMKM/Fishers (Step 8)
const DataInputForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 10), // Default to today
    fishType: '',
    quantity: '',
    pricePerKg: '',
    paymentMethod: 'Cash',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send formData to backend
    console.log('Submitted Data:', formData);
    alert('Data saved successfully!'); // Using alert for demo, replace with custom modal in production
    // Reset form
    setFormData({
      date: new Date().toISOString().slice(0, 10),
      fishType: '',
      quantity: '',
      pricePerKg: '',
      paymentMethod: 'Cash',
    });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Daily Catch / Sales Data Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <div className="relative">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
              required
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label htmlFor="fishType" className="block text-sm font-medium text-gray-700 mb-2">Fish Type</label>
          <select
            id="fishType"
            name="fishType"
            value={formData.fishType}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            required
          >
            <option value="">Select Fish Type</option>
            <option value="Skipjack">Skipjack</option>
            <option value="Tuna">Tuna</option>
            <option value="Mackerel">Mackerel</option>
            <option value="Snapper">Snapper</option>
            <option value="Sardine">Sardine</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity (kg)</label>
          <div className="relative">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 50"
              min="0"
              step="0.1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
              required
            />
            <Fish className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label htmlFor="pricePerKg" className="block text-sm font-medium text-gray-700 mb-2">Price per kg (IDR)</label>
          <div className="relative">
            <input
              type="number"
              id="pricePerKg"
              name="pricePerKg"
              value={formData.pricePerKg}
              onChange={handleChange}
              placeholder="e.g., 25000"
              min="0"
              step="100"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-8"
              required
            />
            <DollarSignIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
            required
          >
            <option value="Cash">Cash</option>
            <option value="QRIS">QRIS</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <Save className="mr-2" size={20} /> Save Data
        </button>
      </form>
    </div>
  );
};

// Education & Resources Page (Step 9)
const EducationResources = () => {
  const resources = [
    {
      title: 'Digital Financial Literacy',
      description: 'Learn about mobile banking, QRIS payments, and online financial management.',
      link: '#',
      icon: QrCode
    },
    {
      title: 'Online Marketing Tips for Fishers',
      description: 'Strategies to sell your catch online and reach a wider market.',
      link: '#',
      icon: ExternalLink
    },
    {
      title: 'Fisheries Business Permit Procedures',
      description: 'A step-by-step guide to obtaining necessary permits and licenses.',
      link: '#',
      icon: BookOpen
    },
    {
      title: 'List of MSME Assistance Programs',
      description: 'Discover government and non-government programs supporting micro, small, and medium enterprises.',
      link: '#',
      icon: Banknote
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Education & Resources</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <resource.icon className="text-blue-600 mr-3" size={32} />
              <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">{resource.description}</p>
            <a
              href={resource.link}
              className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
