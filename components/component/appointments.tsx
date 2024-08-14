"use client";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import imgplaceholder from "../../public/imgplaceholder.png";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import generatePDF from "react-to-pdf";

export function Appointments() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [providerName, setProviderName] = useState("");
  const [location, setLocation] = useState("");
  const [confirmationDate, setConfirmationDate] = useState();
  const [confirmationTime, setConfirmationTime] = useState("");
  const [confirmationPatientName, setConfirmationPatientName] = useState("");
  const [confirmationProviderName, setConfirmationProviderName] = useState("");
  const [confirmationLocation, setConfirmationLocation] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [logo, setLogo] = useState(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleLogoChange = (e: { target: { files: Blob[]; }; }) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleClick = () => {
    document.getElementById("logoInput").click();
  };
  const handleDownload = () => {
    if (targetRef.current) {
      generatePDF(targetRef, {
        filename: `appointment_${confirmationPatientName}.pdf`,
      });
    } else {
      console.error("Target element is not defined");
      alert("Unable to generate PDF. Please try again.");
    }
  };
  return (
    <div className="w-full p-6 sm:p-8">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Card className="max-w-5xl pt-10">
            <CardContent className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  Appointment Confirmation Generator
                </h2>
                {/* <p className="text-muted-foreground">
            Fill out the details below to generate a professional appointment
            confirmation.
          </p> */}
              </div>
              <Separator />
              <div className="flex">
                <div className="flex flex-col items-center">
                  <div className="">
                    <label htmlFor="logo" className="block font-medium mb-1">
                      Your Logo
                    </label>
                  </div>
                  <Image
                    src={logo || imgplaceholder}
                    width={50}
                    height={50}
                    alt="Company Logo"
                    style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                  />
                  <input
                    id="logoInput"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />

                  <div className="flex w-full justify-end">
                    <button
                    type="button"
                      onClick={handleClick}
                      className="p-1 bg-gray-200 rounded-full"
                      aria-label="Upload Logo"
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setConfirmationDate(e.target.value);
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => {
                      setConfirmationTime(e.target.value);
                      setTime(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="patient-name">Client Name</Label>
                <Input
                  id="patient-name"
                  placeholder="Enter client name"
                  value={patientName}
                  onChange={(e) => {
                    setConfirmationPatientName(e.target.value);
                    setPatientName(e.target.value);
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="provider-name">Provider Name</Label>
                <Input
                  id="provider-name"
                  placeholder="Enter provider name"
                  value={providerName}
                  onChange={(e) => {
                    setConfirmationProviderName(e.target.value);
                    setProviderName(e.target.value);
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => {
                    setConfirmationLocation(e.target.value);
                    setLocation(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="space-y-2">
                <Label htmlFor="appointment-type">Appointment Type</Label>
                <Select
                  id="appointment-type"
                  value={appointmentType}
                  onValueChange={(value) => setAppointmentType(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Checkup</SelectItem>
                    <SelectItem value="specialist">
                      Specialist Appointment
                    </SelectItem>
                    <SelectItem value="Surgery">Surgery</SelectItem>
                    <SelectItem value="Therapy">Therapy Session</SelectItem>
                    <SelectItem value="Call">Call</SelectItem>
                    <SelectItem value="Sales-closure">Sales Closure</SelectItem>
                    <SelectItem value="Follow-up">Follow-Up Call</SelectItem>
                    <SelectItem value="Initial-consultation">
                      Initial Consultation
                    </SelectItem>
                    <SelectItem value="Progress-review">
                      Progress Review
                    </SelectItem>
                    <SelectItem value="Evaluation">
                      Evaluation Appointment
                    </SelectItem>
                    <SelectItem value="Diagnostic">
                      Diagnostic Appointment
                    </SelectItem>
                    <SelectItem value="Sales-consultation">
                      Sales Consultation
                    </SelectItem>
                    <SelectItem value="Strategy-meeting">
                      Strategy Meeting
                    </SelectItem>
                    <SelectItem value="Training-session">
                      Training Session
                    </SelectItem>
                    <SelectItem value="Feedback-session">
                      Feedback Session
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <div id="appointment" ref={targetRef}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Appointment Confirmation</CardTitle>
                  {logo && (
                    <Image
                      src={logo}
                      width={50}
                      height={50}
                      alt="Company Logo"
                      style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                    />
                  )}
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="grid gap-4 pt-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold">Date</p>
                    <p>{confirmationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Time</p>
                    <p>{confirmationTime}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold">Client Name</p>
                    <p>{confirmationPatientName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Appointment Type</p>
                    <p>{appointmentType}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold">Provider Name</p>
                  <p>{confirmationProviderName}</p>
                </div>
                {confirmationLocation && (
                  <div>
                    <p className="text-sm font-bold">Location</p>
                    <p>{confirmationLocation}</p>
                  </div>
                )}
                <div></div>
                <Separator />
              </CardContent>
            </div>
            <div className="flex justify-end gap-2 mx-5">
              <Button variant="default" onClick={handleDownload}>
                Download
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
