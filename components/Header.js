import { Navbar, Link, Text, useTheme, Switch } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Fade } from "react-awesome-reveal";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function App() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <Navbar css={{ position: "fixed" }}>
            <Navbar.Brand>
                <Text
                    h3
                    color="inherit"
                    className="tm"
                    css={{
                        position: "relative",
                        top: "3px",
                    }}
                >
                    Zoclhas
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Fade cascade triggerOnce direction="down" duration="550">
                    <Navbar.Link href="#about">
                        <span className="tm">01.</span>&nbsp;
                        <span className="ts">About</span>
                    </Navbar.Link>
                    <Navbar.Link href="#projects">
                        <span className="tm">02.</span>&nbsp;
                        <span className="ts">Projects</span>
                    </Navbar.Link>
                    <Navbar.Link href="#contact">
                        <span className="tm">03.</span>&nbsp;
                        <span className="ts">Contact</span>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Switch
                            size="lg"
                            className="theme-switch"
                            iconOff={<SunIcon filled />}
                            iconOn={<MoonIcon filled />}
                            checked={isDark}
                            onChange={(e) =>
                                setTheme(e.target.checked ? "dark" : "light")
                            }
                        />
                    </Navbar.Link>
                </Fade>
            </Navbar.Content>
            <Navbar.Content showIn="xs">
                <Fade cascade triggerOnce direction="down" duration="550">
                    <Switch
                        size="sm"
                        className="theme-switch"
                        iconOff={<SunIcon filled />}
                        iconOn={<MoonIcon filled />}
                        checked={isDark}
                        onChange={(e) =>
                            setTheme(e.target.checked ? "dark" : "light")
                        }
                    />
                    <Navbar.Toggle aria-label="toggle navigation" />
                </Fade>
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>
                    <Link href="#about">
                        <span className="tm">01.</span>&nbsp;
                        <span className="ts">About</span>
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="#projects">
                        <span className="tm">02.</span>&nbsp;
                        <span className="ts">Projects</span>
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    <Link href="#contact">
                        <span className="tm">03.</span>&nbsp;
                        <span className="ts">Contact</span>
                    </Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    );
}
