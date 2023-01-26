import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";

import "../index.css";

const competences = [
    {
        Title: "Ui & UX",
        Subtitle: "Design",
        Description:
            "User interface design, user experience design, user research.",
        Id: 1,
    },
    {
        Title: "Graphic",
        Subtitle: "Design",
        Description:
            "User interface design, user experience design, user research.",
        Id: 2,
    },
    {
        Title: "Web",
        Subtitle: "Development",
        Description:
            "User interface design, user experience design, user research.",
        Id: 3,
    },
];

function CompetencesCard({ competence }) {
    const [hover, isHover] = useState(false);
    return (
        <div
            className={`h-2/3 w-3/12 ${
                hover ? "bg-slate-600" : "bg-slate-400"
            } flex-row text-left p-8 pt-10 pb-10 space-y-20`}
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
        >
            <div className="flex-row space-y-5">
                <h2 className="text-4xl font-normal">
                    {competence.Title}
                    <br />
                    {competence.Subtitle}
                </h2>
                <h2 className="text-xl font-normal">
                    {competence.Description}
                </h2>
            </div>
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Read more</h2>
                <FontAwesomeIcon
                    className="place-self-center"
                    icon={faArrowRight}
                    size={"xl"}
                />
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <>
            <div className="grid place-items-center h-screen">
                <div className="grid grid-row-4 w-3/4 h-2/3">
                    <h1 className="row-span-1 text-5xl font-semibold">
                        What I Do
                    </h1>
                    <div className="row-span-2 flex justify-self-center align-center justify-center space-x-8">
                        {competences.map((competence, index) => {
                            return (
                                <CompetencesCard
                                    competence={competence}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                    <div className="row-span-1 space-x-5 flex-row justify-center">
                        <FontAwesomeIcon
                            className="place-self-center"
                            icon={faCircle}
                            size={"sm"}
                        />
                        <FontAwesomeIcon
                            className="place-self-center"
                            icon={faCircle}
                            size={"sm"}
                        />
                        <FontAwesomeIcon
                            className="place-self-center"
                            icon={faCircle}
                            size={"sm"}
                        />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center h-screen">
                <div className="grid grid-row-8 w-3/4 h-2/3">
                    <h1 className="row-span-1 text-5xl font-semibold">
                        Portfolio
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
