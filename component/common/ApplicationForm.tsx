'use client'

import React, { useState } from "react";

interface ApplicationFormProps {
  onSubmit?: (data: { fullName: string; email: string; file: File | null }) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const validateFile = (uploadedFile: File) => {
    if (uploadedFile.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      setFile(null);
    } else {
      setError("");
      setFile(uploadedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) validateFile(uploadedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files?.[0];
    if (uploadedFile) validateFile(uploadedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ fullName, email, file });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-[100%] bg-white border-t-4 border-[#09273A] p-6 lg:p-8">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label className="font-inter font-bold text-[12px] leading-4 tracking-[0.6px] align-middle uppercase text-[#09273A]">
          FULL NAME
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full text-black font-semibold text-sm px-4 py-3.5 border border-[#C3C5D9] bg-[#09273A1F] rounded-[2px] leading-[100%] outline-none"
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label className="font-inter font-bold text-[12px] leading-4 tracking-[0.6px] align-middle uppercase text-[#09273A]">
          EMAIL ADDRESS
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane.doe@example.com"
          className="w-full text-black font-semibold text-sm px-4 py-3.5 border border-[#C3C5D9] bg-[#09273A1F] leading-[100%] rounded-[2px] outline-none"
        />
      </div>

      {/* Resume Upload */}
      <div className="flex flex-col gap-2">
        <label className="font-inter font-bold text-[12px] leading-4 tracking-[0.6px] uppercase text-[#09273A]">
          RESUME UPLOAD
        </label>

        {/* Label wraps everything so clicks trigger input */}
        <label
          onDrop={handleDrop as unknown as React.DragEventHandler<HTMLLabelElement>}
          onDragOver={handleDragOver as unknown as React.DragEventHandler<HTMLLabelElement>}
          className="relative w-full h-[126px] bg-[#09273A1F] flex flex-col items-center justify-center text-center cursor-pointer"
        >
          {/* Hidden file input */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* SVG dashed border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="6"
              ry="6"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* File Icon */}
          <svg
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 25.5H13.5V19.2375L15.9 21.6375L18 19.5L12 13.5L6 19.5L8.1375 21.6L10.5 19.2375V25.5ZM3 30C2.175 30 1.46875 29.7062 0.88125 29.1187C0.29375 28.5312 0 27.825 0 27V3C0 2.175 0.29375 1.46875 0.88125 0.88125C1.46875 0.29375 2.175 0 3 0H15L24 9V27C24 27.825 23.7062 28.5312 23.1187 29.1187C22.5312 29.7062 21.825 30 21 30H3ZM13.5 10.5V3H3V27H21V10.5H13.5ZM3 3V10.5V3V10.5V27V3Z"
              fill="#5D5D5D"
              fillOpacity="0.36"
            />
          </svg>

          {/* Upload Text */}
          <p className="mt-2 font-inter font-medium text-[14px] text-black">
            Upload file <span className="text-[#5D5D5D]"> or drag and drop </span>
          </p>
          <p className="text-[12px] leading-4 text-[#5D5D5D]">
            PDF, DOC, DOCX up to 10MB
          </p>

          {/* Show selected file */}
          {file && (
            <p className="mt-2 text-[12px] text-[#09273A] font-medium">
              Selected: {file.name}
            </p>
          )}
          {error && (
            <p className="mt-2 text-[12px] text-red-600 font-medium">{error}</p>
          )}
        </label>
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#09273A] py-4 text-white font-inter font-medium text-[14px] rounded-[2px] flex items-center justify-center"
      >
        SUBMIT APPLICATION
      </button>
    </form>
  );
};

export default ApplicationForm;
