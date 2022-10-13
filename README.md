<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/zoclhas/zoclhas-website-v4/main/public/meta-img.png" width="100" />
</div>
<h1 align="center">
  zoclhas.com
</h1>
<p align="center">
The official source code for my portfolio site. Made using NextJS & NextUI- and hosted on Vercel.
</p>

## Before Forking:

Yes you can fork this repo, and modify it for your personal site- **but you attribution is required.**

You can give the attribution by linking my website [zoclhas.com](https://zoclhas.com/) or linking to this [GitHub Page](https://github.com/zoclhas/zoclhas-website-v4).

## Installation

1. Clone the repo

2. Install the dependencies

    ```sh
    npm i
    ```

3. Start the development server

    ```sh
    npm run dev
    ```

4. Contact Page (Using [EmailJS](https://www.emailjs.com/))

    1. Create a `Contact.js` file in the `/components/` folder.
    2. Create a account at [EmailJS](https://www.emailjs.com/) and create a service and template.
    3. Copy and Paste this code in `Contact.js`:

    ```js
    import { useRef, useState } from "react";
    import emailjs from "@emailjs/browser";
    import {
        Input,
        Textarea,
        useInput,
        Button,
        Spacer,
        Loading,
        Link,
    } from "@nextui-org/react";

    import { LinkArrow } from "./LinkArrow";

    export default function Contact() {
        const [pointsLoader, setPointsLoader] = useState(false);

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            const sendbtn = document.getElementById("send-btn");
            const nameSBT = document.getElementById("name");
            const mailSBT = document.getElementById("mail");
            const textSBT = document.getElementById("text");

            emailjs
                .sendForm(
                    "YOUR_SERVICE_ID",
                    "YOUR_TEMPLATE_ID",
                    form.current,
                    "YOUR_PUBLIC_KEY"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        sendbtn.innerText = "";
                        setPointsLoader(true);
                        setTimeout(() => {
                            sendbtn.innerText = "Sent! 😄";
                            nameSBT.value = "";
                            mailSBT.value = "";
                            textSBT.value = "";
                            setPointsLoader(false);
                        }, 1500);
                        setTimeout(() => {
                            sendbtn.innerText = "Send Another?";
                        }, 2000);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        };

        const { reset } = useInput("");

        return (
            <form className="tm" ref={form} onSubmit={sendEmail}>
                <Input
                    fullWidth
                    underlined
                    type="name"
                    name="user_name"
                    placeholder="Name"
                    id="name"
                    required
                />
                <Spacer y={3} />
                <Input
                    fullWidth
                    underlined
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    id="mail"
                    required
                />
                <Spacer y={3} />
                <Textarea
                    fullWidth
                    underlined
                    type="text"
                    name="message"
                    placeholder="Message"
                    id="text"
                    required
                />
                <Spacer y={3} />
                <div className="form-submit">
                    <Button
                        type="submit"
                        className="ts"
                        css={{ width: "100%" }}
                    >
                        <span id="send-btn">
                            Send
                            <LinkArrow
                                fill="var(--nextui--navbarBackgroundColor)"
                                height="16"
                            />
                        </span>
                        {pointsLoader === true ? (
                            <Loading
                                type="points"
                                color="currentColor"
                                size="sm"
                            />
                        ) : (
                            <div></div>
                        )}
                    </Button>
                    <div style={{ margin: "auto 0" }}>
                        Your data won&apos;t be shared anywhere, it will be sent
                        through a secure route.
                    </div>
                </div>
            </form>
        );
    }
    ```

    4. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` & `YOUR_PUBLIC_KEY` with the values from your account.

## Publishing the site

The best way I recommend is hosting it using [Vercel](https://vercel.com/).

&lt;3
