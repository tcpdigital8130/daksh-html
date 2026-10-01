import React, { FormEvent, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Circle,
  Compass,
  FlaskConical,
  GraduationCap,
  Landmark,
  Loader2,
  Mail,
  Microscope,
  Mountain,
  Palette,
  PenTool,
  Phone,
  PlusCircle,
  RotateCcw,
  User,
  UserRound,
  UsersRound,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  academicStream: string;
  careerCategory: string[];
  otherCategoryDetail: string;
}

const initialForm: FormData = {
  fullName: "",
  mobileNumber: "",
  emailAddress: "",
  academicStream: "",
  careerCategory: [],
  otherCategoryDetail: "",
};

const API_URL =
  "https://apidaksh.dakshtest.com/api/admin/createStudentValidation";

const academicOptions = [
  {
    value: "Science",
    title: "Science",
    description: "Technology, Maths & Research",
    icon: FlaskConical,
  },
  {
    value: "Commerce",
    title: "Commerce",
    description: "Finance, Business & Economics",
    icon: ChartNoAxesCombined,
  },
  {
    value: "Humanities / Arts",
    title: "Humanities / Arts",
    description: "People, Culture & Creativity",
    icon: Palette,
  },
];

const careerOptions = [
  {
    value: "Science, Health & Technology",
    title: "Science, Health & Technology",
    description: "Medical, Engineering, IT, Research",
    icon: Microscope,
  },
  {
    value: "Business, Money & Entrepreneurship",
    title: "Business & Entrepreneurship",
    description: "Finance, Banking, Business",
    icon: BriefcaseBusiness,
  },
  {
    value: "Government, Law & Public Service",
    title: "Government, Law & Public Service",
    description: "Civil Services, Law, Defence",
    icon: Landmark,
  },
  {
    value: "Education, People & Social Impact",
    title: "Education & Social Impact",
    description: "Teaching, Psychology, Social Work",
    icon: UsersRound,
  },
  {
    value: "Creative, Media & Design",
    title: "Creative, Media & Design",
    description: "Design, Media, Arts, Entertainment",
    icon: PenTool,
  },
  {
    value: "Nature, Sports, Travel & Skilled Careers",
    title: "Nature, Sports & Skilled Careers",
    description: "Sports, Tourism, Agriculture, Skilled Trades",
    icon: Mountain,
  },
];

export default function StudentValidationForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      mobileNumber: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleAcademicChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      academicStream: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleCareerChange = (value: string) => {
    setFormData((prev) => {
      const exists = prev.careerCategory.includes(value);

      return {
        ...prev,
        careerCategory: exists
          ? prev.careerCategory.filter((item) => item !== value)
          : [...prev.careerCategory, value],
      };
    });

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // =========================
    // FRONTEND VALIDATION
    // =========================

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.emailAddress.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!formData.academicStream) {
      setErrorMessage("Please select your academic stream.");
      return;
    }

    if (formData.careerCategory.length === 0) {
      setErrorMessage("Please select at least one career area.");
      return;
    }

    // =========================
    // API REQUEST
    // =========================

    try {
      setIsSubmitting(true);

      const payload = {
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber,
        emailAddress: formData.emailAddress.trim(),
        academicStream: formData.academicStream,
        careerCategory: formData.careerCategory,
        otherCategoryDetail: formData.otherCategoryDetail.trim(),
      };

      console.log("Sending API Payload:", payload);

      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      console.log("Student Validation API Response:", responseData);

      // =========================
      // API ERROR
      // =========================

      if (!response.ok) {
        throw new Error(
          responseData?.message || "Something went wrong. Please try again.",
        );
      }

      // =========================
      // SUCCESS
      // =========================

      setSuccessMessage(
        responseData?.message || "Student validation submitted successfully.",
      );

      setFormData(initialForm);
    } catch (error) {
      console.error("Student Validation API Error:", error);

      if (error instanceof TypeError) {
        setErrorMessage(
          "Unable to connect to the server. Please check your internet connection or API server.",
        );
      } else {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FF] text-slate-900">
      {/* =========================
          HERO
      ========================= */}

      <section className="bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.18),transparent_30%),linear-gradient(135deg,#1e3a8a,#4c1d95)]">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center text-white sm:px-6 sm:py-10">
          {/* LOGO */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-2 shadow-lg sm:h-[70px] sm:w-[70px]">
            <img
              src="/gallery/logo-wht.png"
              alt="DAKSH Logo"
              className="h-[60px] w-auto rounded-xl object-cover"
            />
          </div>

          {/* TITLE */}

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[42px]">
            Student Validation Form
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Verify your student identity, academic pathway and career
            aspirations.
          </p>
        </div>
      </section>

      {/* =========================
          FORM CONTAINER
      ========================= */}

      <main className="relative z-10 mx-auto -mt-5 w-full max-w-5xl px-3 pb-12 sm:px-4">
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(30,58,138,0.14)]"
        >
          {/* =========================
              STUDENT DETAILS
          ========================= */}

          <section className="border-b border-slate-200 p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-blue-900">
                <UserRound size={20} />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-blue-950">
                  Student Details
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Basic contact information
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* FULL NAME */}

              <label className="md:col-span-2">
                <span className="mb-1.5 block text-xs font-bold text-blue-950">
                  Full Name <span className="text-red-500">*</span>
                </span>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </label>

              {/* MOBILE */}

              <label>
                <span className="mb-1.5 block text-xs font-bold text-blue-950">
                  Mobile Number <span className="text-red-500">*</span>
                </span>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={formData.mobileNumber}
                    onChange={handleMobileChange}
                    placeholder="9876543210"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </label>

              {/* EMAIL */}

              <label>
                <span className="mb-1.5 block text-xs font-bold text-blue-950">
                  Email Address <span className="text-red-500">*</span>
                </span>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    required
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="student@example.com"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />
                </div>
              </label>
            </div>
          </section>

          {/* =========================
              ACADEMIC STREAM
          ========================= */}

          <section className="border-b border-slate-200 p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-blue-900">
                <GraduationCap size={20} />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-blue-950">
                  Academic Stream
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Select your academic stream
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {academicOptions.map((option) => {
                const Icon = option.icon;

                const selected = formData.academicStream === option.value;

                return (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-xl border-[1.5px] p-4 transition ${
                      selected
                        ? "border-violet-600 bg-violet-50 shadow-lg shadow-violet-100"
                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-400"
                    } ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
                  >
                    <input
                      type="radio"
                      name="academicStream"
                      value={option.value}
                      checked={selected}
                      onChange={() => handleAcademicChange(option.value)}
                      disabled={isSubmitting}
                      className="sr-only"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-blue-900">
                        <Icon size={17} />
                      </div>

                      <Circle
                        size={17}
                        className={
                          selected ? "text-violet-600" : "text-slate-300"
                        }
                        fill={selected ? "currentColor" : "transparent"}
                      />
                    </div>

                    <div className="mt-3 text-sm font-bold text-blue-950">
                      {option.title}
                    </div>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {option.description}
                    </p>
                  </label>
                );
              })}
            </div>
          </section>

          {/* =========================
              CAREER ASPIRATIONS
          ========================= */}

          <section className="border-b border-slate-200 p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-blue-900">
                <Compass size={20} />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-blue-950">
                  Career Aspirations
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Choose all areas that interest you
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {careerOptions.map((option) => {
                const Icon = option.icon;

                const selected = formData.careerCategory.includes(option.value);

                return (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] p-4 transition ${
                      selected
                        ? "border-violet-600 bg-violet-50 shadow-lg shadow-violet-100"
                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-400"
                    } ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name="careerCategory"
                      value={option.value}
                      checked={selected}
                      onChange={() => handleCareerChange(option.value)}
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-blue-900"
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-sm font-bold leading-5 text-blue-950">
                        <Icon size={16} className="shrink-0 text-violet-600" />

                        <span>{option.title}</span>
                      </div>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {option.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* OTHER */}

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-bold text-blue-950">
                Any other
              </span>

              <div className="relative">
                <PlusCircle
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="otherCategoryDetail"
                  name="otherCategoryDetail"
                  type="text"
                  value={formData.otherCategoryDetail}
                  onChange={handleInputChange}
                  placeholder="Specify another career or field"
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>
            </label>
          </section>

          {/* =========================
              SUCCESS MESSAGE
          ========================= */}

          {successMessage && (
            <div className="mx-5 mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 sm:mx-7">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-green-600"
              />

              <div>
                <p className="font-bold">Success</p>

                <p className="mt-1">{successMessage}</p>
              </div>
            </div>
          )}

          {/* =========================
              ERROR MESSAGE
          ========================= */}

          {errorMessage && (
            <div className="mx-5 mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:mx-7">
              <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-600" />

              <div>
                <p className="font-bold">Submission Failed</p>

                <p className="mt-1">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* =========================
              FOOTER ACTIONS
          ========================= */}

          <footer className="mt-5 flex items-center justify-end gap-3 border-t border-slate-200 bg-[#F5F7FF] p-4 sm:px-7 sm:py-5">
            {/* RESET */}

            <button
              type="button"
              title="Clear Form"
              onClick={handleReset}
              disabled={isSubmitting}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-blue-900 transition hover:border-slate-400 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw size={16} />
            </button>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={17} className="animate-spin" />

                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Validation</span>

                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}