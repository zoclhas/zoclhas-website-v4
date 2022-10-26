import { Grid, Card, Text, Link } from "@nextui-org/react";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { GitHubLogo } from "./GitHubLogo";
import { LinkArrow } from "./LinkArrow";

export default function ProjectsSection() {
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
        <Grid.Container>
            <Grid
                md={4}
                sm={6}
                xs={12}
                css={{
                    justifyContent: "center",
                }}
            >
                <Card css={{ mw: "330px" }}>
                    <Reveal triggerOnce keyframes={slideUp} duration={500}>
                        <Card.Image
                            src="/zoclhas-com.png"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Zoclhas website image"
                            showSkeleton
                        />
                        <Card.Divider />
                        <Card.Header
                            className="tm"
                            css={{
                                justifyContent: "space-between",
                            }}
                            as="a"
                            href="https://zoclhas.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            zoclhas.com <LinkArrow height="15" />
                        </Card.Header>
                        <Card.Divider />
                        <Card.Body className="ts">
                            <Text>
                                Portfolio site made using NextJS & NextUI.
                            </Text>
                        </Card.Body>
                        <Card.Divider />
                        <Card.Footer>
                            <Link
                                href="https://github.com/zoclhas/zoclhas-website-v4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubLogo size="30" />
                            </Link>
                        </Card.Footer>
                    </Reveal>
                </Card>
            </Grid>
            <Grid md={4} sm={6} xs={12} css={{ justifyContent: "center" }}>
                <Card css={{ mw: "330px" }}>
                    <Reveal triggerOnce keyframes={slideUp} duration={500}>
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
                                A Bootstrap site, with certain pages written in
                                ReactJS. Backend is served using Django.
                                <br />
                                <a
                                    className="ml-1"
                                    href="https://roadmap.shivamzter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ReactJS and Django site.
                                </a>
                            </Text>
                        </Card.Body>
                    </Reveal>
                </Card>
            </Grid>
            <Grid md={4} sm={6} xs={12} css={{ justifyContent: "center" }}>
                <Card css={{ mw: "330px" }}>
                    <Reveal triggerOnce keyframes={slideUp} duration={500}>
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
                            href="https://dev.zaura.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            dev.zaura.net <LinkArrow height="15" />
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
            <Grid md={4} sm={6} xs={12} css={{ justifyContent: "center" }}>
                <Card css={{ mw: "330px" }}>
                    <Reveal triggerOnce keyframes={slideUp} duration={500}>
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
                                Amulet is a high-res stylized POM/PBR
                                resourcepack for Minecraft. Generated
                                procedurally, using Substance Designer- and{" "}
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
    );
}
