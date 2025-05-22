import { useState, useEffect } from "react";
import { Edit3, Camera, Phone, Building, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "123-456-7890",
    company: "PopX Digital Agency",
    bio: "Hello! I'm Jeet, a passionate web developer with a love for creating beautiful and functional websites. I enjoy working with the latest technologies and always strive to improve my skills.",
  });

  useEffect(() => {
    const { state } = location;

    if (state) {
      setProfileData((prev) => ({
        ...prev,
        email: state.email || "",
        name: state.fullName || state.email || "",
        phone: state.phone || "+91 123 456 7890",
        company: state.company || "PopX Digital Agency",
      }));
    }

    window.history.replaceState({}, document.title);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-all duration-700 ease-in-out px-4 py-12">
      <button
        onClick={() => navigate("/")}
        className={`absolute top-4 left-4 p-2 rounded-full bg-primary shadow-md hover:bg-violet-700/30 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Header */}
      <div className="relative pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="text-2xl font-bold text-purple-800">
              Account Settings
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-purple-200 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative mb-6 group">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="w-full h-full rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-105 select-none">
                    {profileData.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <h2 className="text-xl font-bold text-purple-800">
                    {profileData.name}
                  </h2>
                  <button className="ml-2 p-1 rounded-full hover:bg-purple-100 transition-colors duration-200">
                    <Edit3 className="w-4 h-4 text-purple-500" />
                  </button>
                </div>
                <p className="text-purple-600 mb-4">{profileData.email}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-100 rounded-2xl">
                  <div className="text-lg font-bold text-purple-600">142</div>
                  <div className="text-xs text-purple-500">Projects</div>
                </div>
                <div className="text-center p-3 bg-blue-100 rounded-2xl">
                  <div className="text-lg font-bold text-blue-600">28</div>
                  <div className="text-xs text-blue-500">Clients</div>
                </div>
              </div>

              <div className="space-y-3 text-purple-700">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-3 text-purple-500" />
                  {profileData.phone}
                </div>
                <div className="flex items-center text-sm">
                  <Building className="w-4 h-4 mr-3 text-purple-500" />
                  {profileData.company}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-purple-200 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-purple-800">About</h3>
                <button className="p-2 rounded-full hover:bg-purple-100 transition-colors duration-200">
                  <Edit3 className="w-4 h-4 text-purple-500" />
                </button>
              </div>
              <p className="text-purple-700 leading-relaxed">
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
