import React, { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
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
  X,
} from "lucide-react";

interface FormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  academicStream: string;
  careerCategory: string[];
  otherCategoryDetail: string;
}

interface StudentValidation {
  _id?: string;
  fullName?: string;
  mobileNumber?: string;
  emailAddress?: string;
  academicStream?: string;
  careerCategory?: string[];
  otherCategoryDetail?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface StudentValidationApiResponse {
  message?: string;
  data?: StudentValidation | StudentValidation[];
}

const initialForm: FormData = {
  fullName: "",
  mobileNumber: "",
  emailAddress: "",
  academicStream: "",
  careerCategory: [],
  otherCategoryDetail: "",
};

const CREATE_API_URL =
  "https://apidaksh.dakshtest.com/api/admin/createStudentValidation";

const GET_API_URL =
  "https://apidaksh.dakshtest.com/api/admin/findAllStudentValidations";

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
  const [formData, setFormData] =
    useState<FormData>(initialForm);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [isThankYouOpen, setIsThankYouOpen] =
    useState(false);

  const [studentName, setStudentName] =
    useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleMobileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

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
      const exists =
        prev.careerCategory.includes(value);

      return {
        ...prev,
        careerCategory: exists
          ? prev.careerCategory.filter(
              (item) => item !== value
            )
          : [...prev.careerCategory, value],
      };
    });

    setSuccessMessage("");
    setErrorMessage("");
  };

  /*
   * ==========================================================
   * GET LATEST STUDENT
   * ==========================================================
   *
   * POST ke baad ye API call hogi:
   *
   * GET
   * /api/admin/findAllStudentValidations
   *
   * API ke response se latest student ka fullName
   * nikala jayega.
   */

  const fetchLatestStudentName = async (
    fallbackName: string
  ): Promise<string> => {
    try {
      const response = await fetch(GET_API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(
          "Find all student validations failed:",
          response.status
        );

        return fallbackName;
      }

      const responseData: StudentValidationApiResponse =
        await response.json();

      console.log(
        "Find All Student Validations Response:",
        responseData
      );

      const data = responseData?.data;

      /*
       * Case 1:
       * API directly object return kare
       */

      if (
        data &&
        !Array.isArray(data) &&
        data.fullName
      ) {
        return data.fullName;
      }

      /*
       * Case 2:
       * API array return kare
       */

      if (Array.isArray(data) && data.length > 0) {
        const students = [...data];

        /*
         * createdAt ke basis par latest record
         * find karne ki koshish.
         */

        students.sort((a, b) => {
          const dateA = a.createdAt
            ? new Date(a.createdAt).getTime()
            : 0;

          const dateB = b.createdAt
            ? new Date(b.createdAt).getTime()
            : 0;

          return dateB - dateA;
        });

        const latestStudent = students[0];

        if (latestStudent?.fullName) {
          return latestStudent.fullName;
        }
      }

      /*
       * Agar GET response mein expected structure
       * nahi mila to POST se mila name use hoga.
       */

      return fallbackName;
    } catch (error) {
      console.error(
        "Find latest student error:",
        error
      );

      /*
       * GET fail hone par bhi POST successful
       * tha, isliye entered name fallback rahega.
       */

      return fallbackName;
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // ========================================================
    // VALIDATION
    // ========================================================

    if (!formData.fullName.trim()) {
      setErrorMessage(
        "Please enter your full name."
      );
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setErrorMessage(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    if (!formData.emailAddress.trim()) {
      setErrorMessage(
        "Please enter your email address."
      );
      return;
    }

    if (!formData.academicStream) {
      setErrorMessage(
        "Please select your academic stream."
      );
      return;
    }

    if (formData.careerCategory.length === 0) {
      setErrorMessage(
        "Please select at least one career area."
      );
      return;
    }

    // ========================================================
    // SAVE ENTERED NAME BEFORE RESET
    // ========================================================

    const submittedStudentName =
      formData.fullName.trim();

    try {
      setIsSubmitting(true);

      // ======================================================
      // POST PAYLOAD
      // ======================================================

      const payload = {
        fullName: submittedStudentName,
        mobileNumber: formData.mobileNumber,
        emailAddress:
          formData.emailAddress.trim(),
        academicStream:
          formData.academicStream,
        careerCategory:
          formData.careerCategory,
        otherCategoryDetail:
          formData.otherCategoryDetail.trim(),
      };

      console.log(
        "Create Student Validation Payload:",
        payload
      );

      // ======================================================
      // CREATE STUDENT VALIDATION
      // ======================================================

      const response = await fetch(
        CREATE_API_URL,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const responseData =
        await response.json();

      console.log(
        "Create Student Validation Response:",
        responseData
      );

      // ======================================================
      // POST ERROR
      // ======================================================

      if (!response.ok) {
        throw new Error(
          responseData?.message ||
            "Something went wrong. Please try again."
        );
      }

      // ======================================================
      // POST SUCCESS
      // ======================================================

      /*
       * POST successful hone ke baad
       * GET API call karo.
       */

      const latestStudentName =
        await fetchLatestStudentName(
          submittedStudentName
        );

      console.log(
        "Student Name for Thank You Modal:",
        latestStudentName
      );

      // ======================================================
      // SET STUDENT NAME
      // ======================================================

      setStudentName(latestStudentName);

      // ======================================================
      // RESET FORM
      // ======================================================

      setFormData(initialForm);

      // ======================================================
      // SUCCESS MESSAGE
      // ======================================================

      setSuccessMessage(
        responseData?.message ||
          "Student validation submitted successfully."
      );

      // ======================================================
      // OPEN THANK YOU MODAL
      // ======================================================

      setIsThankYouOpen(true);

    } catch (error) {
      console.error(
        "Student Validation API Error:",
        error
      );

      if (error instanceof TypeError) {
        setErrorMessage(
          "Unable to connect to the server. Please check your internet connection or API server."
        );
      } else {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."
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

  const closeThankYouModal = () => {
    setIsThankYouOpen(false);
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FF] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.18),transparent_30%),linear-gradient(135deg,#1e3a8a,#4c1d95)]">

        <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center text-white sm:px-6 sm:py-10">

          {/* LOGO */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-2 shadow-lg sm:h-[70px] sm:w-[70px]">

            <img
              src="/gallery/logo-wht.png"
              alt="DAKSH Logo"
              className="h-full w-full rounded-xl object-contain"
            />

          </div>

          {/* TITLE */}

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[42px]">
            Student Validation Form
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Verify your student identity, academic pathway
            and career aspirations.
          </p>

        </div>

      </section>

      {/* =====================================================
          FORM CONTAINER
      ===================================================== */}

      <main className="relative z-10 mx-auto -mt-5 w-full max-w-5xl px-3 pb-12 sm:px-4">

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(30,58,138,0.14)]"
        >

          {/* =================================================
              STUDENT DETAILS
          ================================================= */}

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
                  Full Name{" "}
                  <span className="text-red-500">
                    *
                  </span>
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
                  Mobile Number{" "}
                  <span className="text-red-500">
                    *
                  </span>
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
                    value={
                      formData.mobileNumber
                    }
                    onChange={
                      handleMobileChange
                    }
                    placeholder="9876543210"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </label>

              {/* EMAIL */}

              <label>

                <span className="mb-1.5 block text-xs font-bold text-blue-950">
                  Email Address{" "}
                  <span className="text-red-500">
                    *
                  </span>
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
                    value={
                      formData.emailAddress
                    }
                    onChange={
                      handleInputChange
                    }
                    placeholder="student@example.com"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                  />

                </div>

              </label>

            </div>

          </section>

          {/* =================================================
              ACADEMIC STREAM
          ================================================= */}

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

              {academicOptions.map(
                (option) => {

                  const Icon =
                    option.icon;

                  const selected =
                    formData.academicStream ===
                    option.value;

                  return (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-xl border-[1.5px] p-4 transition ${
                        selected
                          ? "border-violet-600 bg-violet-50 shadow-lg shadow-violet-100"
                          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-400"
                      } ${
                        isSubmitting
                          ? "cursor-not-allowed opacity-60"
                          : ""
                      }`}
                    >

                      <input
                        type="radio"
                        name="academicStream"
                        value={option.value}
                        checked={selected}
                        onChange={() =>
                          handleAcademicChange(
                            option.value
                          )
                        }
                        disabled={
                          isSubmitting
                        }
                        className="sr-only"
                      />

                      <div className="flex items-center justify-between">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-blue-900">

                          <Icon size={17} />

                        </div>

                        <Circle
                          size={17}
                          className={
                            selected
                              ? "text-violet-600"
                              : "text-slate-300"
                          }
                          fill={
                            selected
                              ? "currentColor"
                              : "transparent"
                          }
                        />

                      </div>

                      <div className="mt-3 text-sm font-bold text-blue-950">
                        {option.title}
                      </div>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {
                          option.description
                        }
                      </p>

                    </label>
                  );
                }
              )}

            </div>

          </section>

          {/* =================================================
              CAREER ASPIRATIONS
          ================================================= */}

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

              {careerOptions.map(
                (option) => {

                  const Icon =
                    option.icon;

                  const selected =
                    formData.careerCategory.includes(
                      option.value
                    );

                  return (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] p-4 transition ${
                        selected
                          ? "border-violet-600 bg-violet-50 shadow-lg shadow-violet-100"
                          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-400"
                      } ${
                        isSubmitting
                          ? "cursor-not-allowed opacity-60"
                          : ""
                      }`}
                    >

                      <input
                        type="checkbox"
                        name="careerCategory"
                        value={
                          option.value
                        }
                        checked={
                          selected
                        }
                        onChange={() =>
                          handleCareerChange(
                            option.value
                          )
                        }
                        disabled={
                          isSubmitting
                        }
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-blue-900"
                      />

                      <div className="min-w-0">

                        <div className="flex items-center gap-2 text-sm font-bold leading-5 text-blue-950">

                          <Icon
                            size={16}
                            className="shrink-0 text-violet-600"
                          />

                          <span>
                            {
                              option.title
                            }
                          </span>

                        </div>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {
                            option.description
                          }
                        </p>

                      </div>

                    </label>
                  );
                }
              )}

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
                  value={
                    formData.otherCategoryDetail
                  }
                  onChange={
                    handleInputChange
                  }
                  placeholder="Specify another career or field"
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-xl border border-[#d5dff0] bg-white pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50"
                />

              </div>

            </label>

          </section>

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {successMessage &&
            !isThankYouOpen && (
              <div className="mx-5 mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 sm:mx-7">

                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>

                  <p className="font-bold">
                    Success
                  </p>

                  <p className="mt-1">
                    {successMessage}
                  </p>

                </div>

              </div>
            )}

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {errorMessage && (
            <div className="mx-5 mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:mx-7">

              <AlertCircle
                size={20}
                className="mt-0.5 shrink-0 text-red-600"
              />

              <div>

                <p className="font-bold">
                  Submission Failed
                </p>

                <p className="mt-1">
                  {errorMessage}
                </p>

              </div>

            </div>
          )}

          {/* =================================================
              FOOTER
          ================================================= */}

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
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />

                  <span>
                    Submitting...
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Submit Validation
                  </span>

                  <ArrowRight
                    size={16}
                  />
                </>
              )}

            </button>

          </footer>

        </form>

      </main>

      {/* =====================================================
          THANK YOU MODAL
      ===================================================== */}

      {isThankYouOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-950/60 px-4 py-6 backdrop-blur-sm"
          onClick={closeThankYouModal}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-8"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={
                closeThankYouModal
              }
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>

            {/* SUCCESS ICON */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-lg shadow-violet-200">

                <CheckCircle2
                  size={32}
                  strokeWidth={2.5}
                  className="text-white"
                />

              </div>

            </div>

            {/* DYNAMIC STUDENT NAME */}

            <h2
              id="thank-you-title"
              className="mt-6 text-2xl font-extrabold text-blue-950 sm:text-3xl"
            >
              Thank You!
            </h2>

            {/* MESSAGE */}

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Dear {studentName
                ? `, ${studentName}`
                : ""} your form has
              been submitted successfully. We
              have received your details.
            </p>

            {/* SUCCESS BOX */}

            <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-800">

              Your response has been
              successfully recorded.

            </div>

            {/* DONE */}

            <button
              type="button"
              onClick={
                closeThankYouModal
              }
              className="mt-6 w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Done
            </button>

          </div>

        </div>
      )}

    </div>
  );
}