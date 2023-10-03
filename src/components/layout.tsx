import Footer from "./footer";
import Header from "./header";
import { SVG } from "./svg";
import { Button } from "./ui/button";
import DarkMode from "./ui/dark-mode-toggle";

export function Layout({ children }: { children?: any }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* HTMX */}
        {/* <script
          src="https://unpkg.com/htmx.org@1.9.5"
          integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
          crossorigin="anonymous"
        /> */}
        {/* Preload Ext */}
        {/* <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script> */}
        {/* Target Response Ext */}
        {/* <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script> */}
        {/* htmx configuration */}
        {/* <script>htmx.config.globalViewTransitions = true;</script> */}

        {/* Hyperscript */}
        <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
        {/* TailwindCSS */}
        <link href="/styles.css" rel="preload stylesheet" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/public/logo-icon.svg" />
        <title>Cybersecurity ARX</title>
      </head>
      <body
        class="bg-background text-foreground w-screen overflow-x-hidden subpixel-antialiased"
        hx-boost="true"
        // hx-ext="response-targets, preload"
        _={`on click add .hidden .opacity-0 .scale-95 to .dropdown end`}
        // Handles click outside for all menus
      >
        <SVG class="left-24 top-32 rotate-[30deg]" />
        <SVG class="bottom-12 left-20 -rotate-[188deg]" />
        <div class="dark:to-accent-1/20 to-primary/10 dark:via-accent-2/20 bg-gradient-to-br from-transparent via-80%">
          <Header />
          <main class="min-h-screen">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
