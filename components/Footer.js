import { Container, Text, Spacer } from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";
import { LinkArrow } from "./LinkArrow";

export default function App() {
    return (
        <footer>
            <Container
                css={{
                    textAlign: "center",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                }}
            >
                <Fade cascade triggerOnce duration="550">
                    <Text className="tm ml" h4 as="a" href="/">
                        zoclhas.com
                    </Text>
                    <Text className="tm" h5>
                        Made using {""}
                        <a
                            className="ml-1"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NextJS <LinkArrow size="10" />
                        </a>
                        &nbsp;
                        {""}&{" "}
                        <a
                            className="ml-1"
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            NextUI <LinkArrow size="10" />
                        </a>
                    </Text>
                    <Spacer y={-0.65} />
                    <Text className="tm">
                        View website source on{" "}
                        <a
                            className="ml-1"
                            href="https://github.com/zoclhas/zoclhas-website-v4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub <LinkArrow size="10" />
                        </a>
                    </Text>
                </Fade>
            </Container>
        </footer>
    );
}
