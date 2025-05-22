import { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, UserPlus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast, { ToastBar } from "react-hot-toast";

export default function AuthForm({ mode = "signup" }) {
  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const [isAgency, setIsAgency] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const isLogin = mode === "login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    company: "",
    isAgency: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const fields = [
    !isLogin && {
      key: "fullName",
      label: "Full Name",
      type: "text",
      icon: UserPlus,
      placeholder: "John Doe",
      required: true,
    },
    !isLogin && {
      key: "phone",
      label: "Phone Number",
      type: "text",
      icon: UserPlus,
      placeholder: "1234567890",
      required: true,
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      icon: Mail,
      placeholder: "example@domain.com",
      required: true,
    },
    {
      key: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      icon: Lock,
      placeholder: "••••••••",
      required: true,
      toggle: true,
    },
    !isLogin && {
      key: "company",
      label: "Company Name",
      type: "text",
      icon: UserPlus,
      placeholder: "Company Name",
    },
  ].filter(Boolean);

  const handleChange = (key, val) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    if (isLogin) {
      if (!formData.email || !formData.password) {
        setIsValid(false);
        toast.error("Please fill in all fields");
        return;
      }
      if (formData.password.length < 6) {
        setIsValid(false);
        toast.error("Password must be at least 6 characters");
        return;
      }
    } else {
      if (
        !formData.email ||
        !formData.password ||
        !formData.fullName ||
        !formData.phone
      ) {
        setIsValid(false);
        toast.error("Please fill in all fields");
        return;
      }
      if (isNaN(formData.phone)) {
        setIsValid(false);
        toast.error("Phone number must be numeric");
        return;
      }
      if (formData.phone.length < 10) {
        setIsValid(false);
        toast.error("Phone number must be at least 10 digits");
        return;
      }
      if (formData.password.length < 6) {
        setIsValid(false);
        toast.error("Password must be at least 6 characters");
        return;
      }
    }
    toast.success(isLogin ? "Login successful!" : "Registration successful!");
    navigate("/profile", { state: { ...formData } });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200 transition-all duration-700 ease-in-out flex items-center justify-center px-4 py-12"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <button
        onClick={() => navigate("/")}
        className={`absolute top-4 left-4 p-2 rounded-full bg-primary shadow-md hover:bg-violet-700/30 transition-opacity duration-700 ease-in-out ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="w-full max-w-md space-y-6">
        <div
          className={`text-center transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl font-bold text-purple-700">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {isLogin ? "Login to continue" : "Join us today"}
          </p>
        </div>

        <div className="space-y-5">
          {fields.map((field, idx) => (
            <div
              key={field.key}
              className={`transform transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <label className="block text-purple-600 text-sm font-semibold mb-2">
                {field.label}
                {field.required && <span className="text-purple-500">*</span>}
              </label>
              <div className="relative">
                <field.icon
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-lg ${
                    focused === field.key || formData[field.key]
                      ? "text-purple-500"
                      : "text-gray-400"
                  }`}
                />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onFocus={() => setFocused(field.key)}
                  onBlur={() => setFocused("")}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl bg-white text-gray-900 border-2 transition-all duration-300 focus:outline-none ${
                    focused === field.key || formData[field.key]
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                />
                {field.toggle && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {!isLogin && (
          <div
            className={`transform transition-all duration-700 ease-out ${
              visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <label className="block text-gray-700 text-base font-medium mb-4">
              Are you an Agency?<span className="text-purple-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency}
                  onChange={() => setIsAgency(true)}
                  className="sr-only"
                  aria-label="Yes, I am an agency"
                />
                <div
                  className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    isAgency
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300 group-hover:border-purple-400"
                  }`}
                >
                  {isAgency && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-scale-in" />
                    </div>
                  )}
                </div>
                <span
                  className={`ml-3 font-medium transition-colors duration-200 ${
                    isAgency ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  Yes
                </span>
              </label>

              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="agency"
                  checked={!isAgency}
                  onChange={() => setIsAgency(false)}
                  className="sr-only"
                  aria-label="No, I am not an agency"
                />
                <div
                  className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    !isAgency
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300 group-hover:border-purple-400"
                  }`}
                >
                  {!isAgency && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-scale-in" />
                    </div>
                  )}
                </div>
                <span
                  className={`ml-3 font-medium transition-colors duration-200 ${
                    !isAgency ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  No
                </span>
              </label>
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={handleSubmit}
            className={`w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all
              ${!isValid ? "opacity-50 cursor-not-allowed" : "opacity-100"}
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
        <div
          className={`transform transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="text-center text-gray-600 dark:text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => navigate(isLogin ? "/signup" : "/login")}
              className="text-purple-600 font-semibold ml-1"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
