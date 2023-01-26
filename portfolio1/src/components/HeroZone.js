import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareFacebook,
    faLinkedin,
    faBehance,
    faTwitter,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "../index.css";

function HeroZone() {
    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <div className="grid place-items-center h-screen">
                <div className="grid grid-row-6 grid-cols-2 gap-2 w-3/4 h-2/3">
                    <div className="flex flex-col space-y-5 text-left">
                        <h1 className="text-2xl font-bold">__ Hello</h1>
                        <h1 className="text-6xl font-medium">
                            I'm{" "}
                            <h1 className="inline-block font-bold">
                                Sarah Jackson
                            </h1>
                        </h1>
                        <h1 className="text-4xl font-normal">
                            A UX / UI designer, product designer, content
                            creator and creative director.
                        </h1>
                        <h1 className="text-xl font-normal">
                            Of course, there’s so much more to me than just a
                            few fancy titles. Scroll down and get to know me,
                        </h1>
                    </div>
                    <div className="">image</div>
                </div>
                <div className="grid grid-cols-3 w-3/4">
                    <div className="flex space-x-5">
                        <FontAwesomeIcon icon={faSquareFacebook} size={"xl"} />
                        <FontAwesomeIcon icon={faLinkedin} size={"xl"} />
                        <FontAwesomeIcon icon={faBehance} size={"xl"} />
                        <FontAwesomeIcon icon={faTwitter} size={"xl"} />
                        <FontAwesomeIcon icon={faDribbble} size={"xl"} />
                    </div>
                    <div className="flex flex-col justify-center space-y-5">
                        <h1 className="text-xl">Scroll Down</h1>
                        <FontAwesomeIcon
                            className="animate-bounce"
                            icon={faArrowDown}
                            size={"2x"}
                            onClick={executeScroll}
                        />
                    </div>
                </div>
            </div>
            <div ref={myRef} className="grid h-screen place-items-center">
                <div className="grid grid-row-6 w-3/4 h-2/3">
                    <h1 className="row-span-1 text-6xl font-bold">
                        Learn all about me in seconds
                    </h1>
                    <iframe
                        width="80%"
                        height="100%"
                        className="row-span-5 flex justify-center justify-self-center"
                        src="https://www.youtube.com/embed/GGFchqq2YVA"
                        allow="encrypted-media"
                        title="video"
                        allowFullScreen
                    />
                </div>
            </div>
        </>
    );
}

export default HeroZone;
