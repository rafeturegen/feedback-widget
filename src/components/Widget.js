import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { Textarea } from "./ui/textarea";
import TailwindStyles from "../index.css?inline";
export const Widget = () => {
    const [rating, setRating] = useState(3);
    const [submitted, setSubmitted] = useState(false);
    const onSetRating = (index) => {
        setRating(index + 1);
    };
    const submit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = {
            name: form.get("name"),
            email: form.get("email"),
            message: form.get("feedback"),
            rating
        };
        console.log("Submitted", data);
        setSubmitted(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, TailwindStyles),
        React.createElement("div", { className: "widget fixed bottom-4 right-4 z-50" },
            React.createElement(Popover, null,
                React.createElement(PopoverTrigger, null,
                    React.createElement(Button, { className: "shadow-lg hover:scale-105" },
                        React.createElement(MessageIcon, { className: "mr-2 h-5 w-5" }),
                        "Feedback")),
                React.createElement(PopoverContent, { className: "widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md" },
                    React.createElement("style", null, TailwindStyles),
                    submitted ? (React.createElement("div", null,
                        React.createElement("h3", { className: "text-lg font-bold" }, "Thank you for your feedback!"),
                        React.createElement("p", { className: "mt-4" }, "We appreciate your feedback. It helps us improve our product and provide better service to our customers."))) : (React.createElement("div", null,
                        React.createElement("h3", { className: "text-lg font-bold" }, "Send us your feedback"),
                        React.createElement("form", { className: "space-y-2", onSubmit: submit },
                            React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                                React.createElement("div", { className: "space-y-2" },
                                    React.createElement(Label, { htmlFor: "name" }, "Name"),
                                    React.createElement(Input, { id: "name", name: "name", placeholder: "Enter your name" })),
                                React.createElement("div", { className: "space-y-2" },
                                    React.createElement(Label, { htmlFor: "email" }, "Email"),
                                    React.createElement(Input, { id: "email", type: "email", name: "email ", placeholder: "Enter your email" }))),
                            React.createElement("div", { className: "space-y-2" },
                                React.createElement(Label, { htmlFor: "feedback" }, "Feedback"),
                                React.createElement(Textarea, { id: "feedback", name: "feedback", placeholder: "Tell us what you think", className: "min-h-[100px]" })),
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("div", { className: "flex items-center gap-2" }, [...Array(5)].map((_, index) => (React.createElement(StarIcon, { key: index, className: `h-5 w-5 cursor-pointer ${rating > index ? "fill-primary" : "fill-muted stroke-muted-foreground"}`, onClick: () => onSetRating(index) })))),
                                React.createElement(Button, { type: "submit" }, "Submit"))))))))));
};
function StarIcon(props) {
    return (React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })));
}
function MessageIcon(props) {
    return (React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })));
}
