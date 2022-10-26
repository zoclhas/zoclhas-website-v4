import { useState } from "react";
import Image from "next/image";
import {
    Container,
    Grid,
    Text,
    Spacer,
    Tooltip,
    Button,
    Card,
    Link,
} from "@nextui-org/react";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Contact from "../components/Contact";
import ProjectsSection from "../components/ProjectsSection";

import aboutImage from "../public/about-pfp.png";
import { LinkArrow } from "../components/LinkArrow";
import { CopyIcon } from "../components/CopyIcon";

export default function Home() {
    const [copyDiscordContent, setCopyDiscordContent] = useState();

    if (!copyDiscordContent) {
        setCopyDiscordContent("Copy");
    }

    const copyDiscord = () => {
        navigator.clipboard.writeText("Zoclhas#0996");
        setCopyDiscordContent("Copied!");
    };

    if (typeof document !== "undefined") {
        const txt = document.getElementById("scroll-text");

        const scrollText = function () {
            var y = window.scrollY;
            if (y >= 200) {
                txt.setAttribute("data-scroll", "true");
            } else {
                txt.setAttribute("data-scroll", "false");
            }
        };

        window.addEventListener("scroll", scrollText);
    }

    const slideUp = keyframes`
        from {
            opacity: 0;
            transform: translatey(50px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
        `;

    return (
        <main>
            <section id="landing">
                <div id="scroll-text" data-scroll="false">
                    <span className="tm">S</span>
                    <span className="tm">C</span>
                    <span className="tm">R</span>
                    <span className="tm">O</span>
                    <span className="tm">L</span>
                    <span className="tm">L</span>
                    <span className="to">v</span>
                </div>
                <Container
                    css={{
                        display: "flex",
                        flexShrink: "0",
                        alignItems: "center",
                        minHeight: "100vh",
                    }}
                >
                    <div>
                        <Fade cascade triggerOnce duration="650">
                            <Text className="tm zoclhas-tm main-tm">
                                ZOCLHAS
                            </Text>
                            <Spacer y={-1.2} />
                            <Text
                                h1
                                size={50}
                                className="tm web-dev-tm main-tm"
                            >
                                Web Dev &ensp;
                            </Text>
                            <Spacer y={-1.5} />
                            <Text h1 size={50} className="tm main-tm">
                                Material Artist
                            </Text>
                        </Fade>
                    </div>
                    <Grid.Container>
                        <Grid
                            sm={3}
                            xs={6}
                            as="a"
                            href="https://github.com/zoclhas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className="css-fd9pe9"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    animationDelay: "1000ms",
                                }}
                            >
                                <Text className="tm">GitHub</Text> <LinkArrow />
                            </div>
                        </Grid>
                        <Grid
                            sm={3}
                            xs={6}
                            as="a"
                            href="https://artstation.com/zoclhas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className="css-fd9pe9"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    animationDelay: "1100ms",
                                }}
                            >
                                <Text className="tm">ArtStation</Text>{" "}
                                <LinkArrow />
                            </div>
                        </Grid>
                        <Grid
                            sm={3}
                            xs={6}
                            as="a"
                            href="https://twitter.com/zoclhas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className="css-fd9pe9"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    animationDelay: "1200ms",
                                }}
                            >
                                <Text className="tm">Twitter</Text>{" "}
                                <LinkArrow />
                            </div>
                        </Grid>
                        <Grid sm={3} xs={6}>
                            <div
                                className="css-fd9pe9"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    width: "100%",
                                    animationDelay: "1300ms",
                                }}
                            >
                                <Text className="tm">Discord</Text>{" "}
                                <Tooltip
                                    content={copyDiscordContent}
                                    hideArrow
                                    as="a"
                                    onClick={copyDiscord}
                                >
                                    <CopyIcon />
                                </Tooltip>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Container>
            </section>
            <section id="about">
                <Container>
                    <div className="section-titles">
                        <Fade triggerOnce damping="250ms">
                            <Text
                                css={{ position: "relative", bottom: "0" }}
                                className="tm"
                            >
                                ABOUT
                            </Text>
                        </Fade>
                    </div>
                    <Grid.Container className="main-gc">
                        <Grid
                            sm={6}
                            xs={12}
                            css={{
                                padding: "1rem",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                            className="bordered"
                        >
                            <Reveal
                                cascade
                                triggerOnce
                                keyframes={slideUp}
                                duration="400"
                            >
                                <Text h3 className="ts">
                                    Hello! I am Zoclhas // Zoc and I make
                                    websites and materials. I have been doing
                                    web dev from 2021, and creating materials
                                    from 2020. Web dev started for me when I was
                                    looking for a site builder for my startup,{" "}
                                    <a
                                        className="ml"
                                        href="https://zaura.net/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        zaura
                                    </a>
                                    , but coudn&apos;t really find anything
                                    good, so I decided to take matters into my
                                    own hand ;).{" "}
                                    <i>
                                        Materials was a fun side-bored thing
                                        haha.
                                    </i>
                                </Text>
                                <Spacer />
                                <Text h3 className="ts">
                                    I have done a few projects namely{" "}
                                    <a
                                        className="ml"
                                        href="https://www.shivamzter.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        shivamzter.com
                                    </a>
                                    , and as for materials-{" "}
                                    <a
                                        className="ml"
                                        href="https://zaura.net/SubtlePBR"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        SubtlePBR
                                    </a>{" "}
                                    &{" "}
                                    <a
                                        className="ml"
                                        href="https://zaura.net/Amulet"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Amulet
                                    </a>
                                    .
                                </Text>
                                <Spacer />
                                <Text h3 className="ts">
                                    Technologies I&apos;ve worked with:
                                    <Spacer y={0.5} />
                                    <Grid.Container css={{ gap: "0.5rem" }}>
                                        <Grid xs={4} className="tech-borders">
                                            HTML, CSS, JS
                                        </Grid>
                                        <Grid xs={4} className="tech-borders">
                                            ReactJS
                                        </Grid>
                                        <Grid xs={4} className="tech-borders">
                                            NextJS
                                        </Grid>
                                        <Grid xs={4} className="tech-borders">
                                            Django
                                        </Grid>
                                        <Grid xs={4} className="tech-borders">
                                            Bootstrap
                                        </Grid>
                                        <Grid xs={4} className="tech-borders">
                                            NextUI
                                        </Grid>
                                    </Grid.Container>
                                </Text>
                            </Reveal>
                        </Grid>
                        <Grid sm={6} xs={12}>
                            <Image
                                src={aboutImage}
                                alt="zoclhas-pic-drawn"
                                loading="lazy"
                            />
                        </Grid>
                    </Grid.Container>
                </Container>
            </section>
            <section id="projects">
                <Container>
                    <div className="section-titles">
                        <Fade triggerOnce damping="250ms">
                            <Text
                                css={{ position: "relative", bottom: "0" }}
                                className="tm"
                            >
                                PROJECTS
                            </Text>
                        </Fade>
                    </div>
                    <ProjectsSection />
                </Container>
            </section>
            <section id="contact">
                <Container>
                    <div className="section-titles">
                        <Fade triggerOnce damping="250ms">
                            <Text
                                css={{ position: "relative", bottom: "0" }}
                                className="tm"
                            >
                                CONTACT
                            </Text>
                        </Fade>
                    </div>
                    <Grid.Container>
                        <Grid
                            sm={6}
                            xs={12}
                            css={{
                                padding: "1rem",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                            className="bordered"
                        >
                            <Reveal
                                triggerOnce
                                keyframes={slideUp}
                                duration={500}
                            >
                                <Contact />
                            </Reveal>
                        </Grid>
                        <Grid
                            sm={6}
                            xs={12}
                            css={{
                                padding: "1rem",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text className="tm" size={40}>
                                Other ways to contact me:
                            </Text>
                            <div>
                                <Reveal
                                    triggerOnce
                                    cascade
                                    keyframes={slideUp}
                                    duration={500}
                                >
                                    <Text h3 className="ts">
                                        <a
                                            className="ml-1"
                                            href="https://zaura.net/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            &gt;&gt;&gt; Twitter &nbsp;{" "}
                                            <LinkArrow size="16" />
                                        </a>
                                    </Text>
                                    <Text h3 className="ts ml-1">
                                        &gt;&gt;&gt; Discord &nbsp;{" "}
                                        <Tooltip
                                            content={copyDiscordContent}
                                            hideArrow
                                            as="a"
                                            onClick={copyDiscord}
                                        >
                                            <CopyIcon size="20" />
                                        </Tooltip>
                                    </Text>
                                </Reveal>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Container>
            </section>
        </main>
    );
}
