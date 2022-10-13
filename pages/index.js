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

import aboutImage from "../public/about-pfp.png";
import { LinkArrow } from "../components/LinkArrow";
import { CopyIcon } from "../components/CopyIcon";
import { GitHubLogo } from "../components/GitHubLogo";

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
                    <Grid.Container>
                        <Grid
                            sm={6}
                            xs={12}
                            css={{
                                padding: "1rem",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
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
                                <Button
                                    as="a"
                                    href="#contact"
                                    className="ts"
                                    css={{ width: "100%" }}
                                >
                                    Get In Touch &nbsp;{" "}
                                    <LinkArrow rotate="90" height="15" />
                                </Button>
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
                    <Grid.Container>
                        <Grid
                            md={4}
                            sm={6}
                            xs={12}
                            css={{ justifyContent: "center" }}
                        >
                            <Card css={{ mw: "330px" }}>
                                <Reveal
                                    triggerOnce
                                    keyframes={slideUp}
                                    duration={500}
                                >
                                    <Card.Image
                                        src="/shivamzter-com.png"
                                        objectFit="cover"
                                        width="100%"
                                        height={340}
                                        alt="Shivamzter Website Image"
                                        showSkeleton
                                    />
                                    <Card.Divider />
                                    <Card.Header
                                        className="tm"
                                        css={{
                                            justifyContent: "space-between",
                                        }}
                                        as="a"
                                        href="https://shivamzter.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        shivamzter.com <LinkArrow height="15" />
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body className="ts">
                                        <Text>
                                            A Bootstrap site, with certain pages
                                            written in ReactJS. Backend is
                                            served using Django.
                                        </Text>
                                    </Card.Body>
                                    <Card.Divider />
                                    <Card.Footer>
                                        <Link
                                            href="https://github.com/zoclhas/shivamzter-website"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <GitHubLogo size="30" />
                                        </Link>
                                    </Card.Footer>
                                </Reveal>
                            </Card>
                        </Grid>
                        <Grid
                            md={4}
                            sm={6}
                            xs={12}
                            css={{ justifyContent: "center" }}
                        >
                            <Card css={{ mw: "330px" }}>
                                <Reveal
                                    triggerOnce
                                    keyframes={slideUp}
                                    duration={500}
                                >
                                    <Card.Image
                                        src="/dev-zaura-net.png"
                                        objectFit="cover"
                                        width="100%"
                                        height={340}
                                        alt="Card image background"
                                        showSkeleton
                                    />
                                    <Card.Divider />
                                    <Card.Header
                                        className="tm"
                                        css={{
                                            justifyContent: "space-between",
                                        }}
                                        as="a"
                                        href="https://zaura.net"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        zaura.net <LinkArrow height="15" />
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body className="ts">
                                        <Text>
                                            WIP site for{" "}
                                            <a
                                                href="https://zaura.net"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="ml"
                                            >
                                                zaura.net
                                            </a>{" "}
                                            made using ReactJS and NextUI.
                                        </Text>
                                    </Card.Body>
                                </Reveal>
                            </Card>
                        </Grid>
                        <Grid
                            md={4}
                            sm={6}
                            xs={12}
                            css={{ justifyContent: "center" }}
                        >
                            <Card css={{ mw: "330px" }}>
                                <Reveal
                                    triggerOnce
                                    keyframes={slideUp}
                                    duration={500}
                                >
                                    <Card.Image
                                        src="/Amulet.webp"
                                        objectFit="cover"
                                        width="100%"
                                        height={340}
                                        alt="Card image background"
                                        showSkeleton
                                    />
                                    <Card.Divider />
                                    <Card.Header
                                        className="tm"
                                        css={{
                                            justifyContent: "space-between",
                                        }}
                                        as="a"
                                        href="https://zaura.net/Amulet"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Amulet <LinkArrow height="15" />
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body className="ts">
                                        <Text>
                                            Amulet is a high-res stylized
                                            POM/PBR resourcepack for Minecraft.
                                            Generated procedurally, using
                                            Substance Designer- and{" "}
                                            <a
                                                href="https://github.com/null511/PixelGraph-Release"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="ml"
                                            >
                                                PixelGraph
                                            </a>
                                            .
                                        </Text>
                                    </Card.Body>
                                </Reveal>
                            </Card>
                        </Grid>
                    </Grid.Container>
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
