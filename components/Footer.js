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
                    <Text className="tm" h4 as="a" href="/">
                        zoclhas.com
                    </Text>
                    <Text className="tm" h5>
                        Made using <a>NextJS</a> & <a>NextUI</a>
                    </Text>
                    <Spacer y={-0.65} />
                    <Text>
                        View website source on{" "}
                        <a
                            className="tm ml-1"
                            href="https://github.com/zoclhas/zoclhas"
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
