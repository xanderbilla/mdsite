"use client";

import React, { useState } from "react";

type Props = object;

export default function MessageForm({}: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formResult, setFormResult] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && subject && message) {
            setIsLoading(true);
            // Simulate an API call
            setTimeout(() => {
                try {
                    console.log({ name, email, subject, message });
                    setIsSubmitted(true);
                    setFormResult("✅ Sent Successfully");
                } catch (error) {
                    setFormResult("Something went wrong");
                } finally {
                    setIsLoading(false);
                }
            }, 2000);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <form className="flex flex-col gap-4 w-full max-w-xl" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                className="p-4 text-lg bg-slate-800 border border-slate-600 rounded-md text-slate-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading || isSubmitted}
                required
            />
            <input
                type="email"
                placeholder="Email"
                className="p-4 text-lg bg-slate-800 border border-slate-600 rounded-md text-slate-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSubmitted}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                className="p-4 text-lg bg-slate-800 border border-slate-600 rounded-md text-slate-300"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isLoading || isSubmitted}
                required
            />
            <textarea
                placeholder="Message"
                className="p-4 text-lg bg-slate-800 border border-slate-600 rounded-md text-slate-300"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading || isSubmitted}
                required
            />
            <button
                type="submit"
                className="p-4 text-lg font-semibold bg-yellow-400 text-slate-900 rounded-md transition-all duration-150 hover:bg-yellow-500"
                disabled={isLoading || isSubmitted}
            >
                {isLoading ? "Sending..." : "Send Message"}
            </button>
            {formResult && <p className="text-xl font-medium text-slate-300">{formResult}</p>}
        </form>
    );
}
