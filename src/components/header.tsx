import { Button } from "./ui/button";
import DarkMode from "./ui/dark-mode-toggle";
import Dropdown from "./ui/dropdown";
import { Hover } from "./ui/hover";

export default function Header() {
  return (
    <header class="mx-auto flex max-w-7xl items-start justify-between px-8 pt-10">
      <a
        href="/"
        class="-ml-16 -mt-10 dark:invert sm:-mt-4 sm:ml-0"
        tabindex="-1"
      >
        <img src="/public/arx-logo-white.svg" alt="" width="300" height="200" />
      </a>
      <div class="-mr-4 flex gap-2.5">
        <div class="hidden items-center gap-6 lg:flex">
          <Button intent="link">Home</Button>
          <Button intent="link">Product</Button>
          <Button intent="link">Services</Button>
          <Button intent="link">About us</Button>
          <Button intent="link">Contact</Button>
          <Button intent="primary">Sign In</Button>
        </div>
        <div class="lg:hidden">
          <Dropdown>
            <Dropdown.Trigger size="icon">
              <i class="i-lucide-align-right h-6 w-6" />
            </Dropdown.Trigger>

            <Dropdown.Content class="mt-2">
              <Dropdown.Header>Menu</Dropdown.Header>
              <Dropdown.Separator />
              <Hover>
                <Hover.Item>
                  <Dropdown.Item>Home</Dropdown.Item>
                </Hover.Item>
                <Hover.Item>
                  <Dropdown.Item>Product</Dropdown.Item>
                </Hover.Item>
                <Hover.Item>
                  <Dropdown.Item>Services</Dropdown.Item>
                </Hover.Item>

                <Dropdown.Separator />

                <Hover.Item>
                  <Dropdown.Item>About us</Dropdown.Item>
                </Hover.Item>
                <Hover.Item>
                  <Dropdown.Item>Contact</Dropdown.Item>
                </Hover.Item>
              </Hover>
              <Dropdown.Separator />
              <Button intent="primary" size="sm" class="m-2 w-56">
                Sign In
              </Button>
            </Dropdown.Content>
          </Dropdown>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
