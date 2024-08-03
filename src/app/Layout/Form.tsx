"use client";

import React from "react";
import Input from "../components/Input";
import Btn from "../components/Btn";
import Dropdown from "../components/Dropdown";
import TxtArea from "../components/TxtArea";
import Alert from "./Alert";

import axios from "axios";

type Props = {};

export default function Form({}: Props) {
  const api_url = process.env.NEXT_PUBLIC_API_URL;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [queryType, setQueryType] = React.useState("General");
  const [githubUsername, setGithubUsername] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [textMessage, setTextMessage] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: textMessage,
      queryType: queryType,
      githubUsername: githubUsername,
    };
    const res = await axios.post(`${api_url}/contact`, data);
    if (res.status === 200) {
      setSuccess(true);
      setShowAlert(true);
      setAlertMessage("Your form is submitted!");
    } else {
      setSuccess(false);
      setAlertMessage("Error! occured. Try Again!");
    }
  };

  return (
    <div className="w-80 md:w-96 lg:w-[450px] flex flex-col gap-4 transition-all duration-300 ease-in-out">
      <form
        action=""
        method="post"
        className={`flex flex-col gap-4 ${success ? "hidden" : "block"}`}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Dropdown
          onSelect={(selectedType) => setQueryType(selectedType)}
          options={["General", "Feedback", "Collaboration"]}
        />
        {queryType === "Collaboration" && (
          <Input
            type="text"
            placeholder="Github Username"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            required
          />
        )}
        {queryType === "General" && (
          <Input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        )}

        <TxtArea onTextChange={(text) => setTextMessage(text)} />
        <Btn
          onClick={() => {}}
          label={isSubmit ? "Submitting..." : "Submit"}
          isDisable={isSubmit}
        />
      </form>
      {showAlert && (
        <Alert type={success ? "Success" : "Error"} message={alertMessage} />
      )}
    </div>
  );
}
