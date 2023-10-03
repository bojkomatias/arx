import { SVG } from "./svg";
import { Button } from "./ui/button";

export const LandingPage = () => (
  <>
    <section class="pb-8 pl-10 pt-6 md:pb-12 md:pt-10">
      <div class="max-w-lg space-y-6 lg:max-w-2xl">
        <h1 class="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          The new standard in cyber security & supply chain resilience
        </h1>
        <p class="text-muted-foreground leading-normal sm:text-xl sm:leading-8">
          Get peace of mind today. Improve your organisation's cyber security,
          and supply chain management through the ARX Alliance.
        </p>
        <div class="flex gap-3">
          <Button intent="primary" size="lg">
            Get stared{" "}
            <span class="-mr-4 ml-2 h-[1.1px] w-0 rounded-md bg-white transition-all group-hover:w-2.5" />
            <i class="i-lucide-chevron-right -ml-px" />
          </Button>
          <Button intent="outline" size="lg">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
    <section>
      <div class="relative isolate overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 py-48 lg:flex lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div class="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" class="inline-flex space-x-6">
                <span class="bg-primary/10 text-primary ring-primary/20 rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                  What's new
                </span>
                <span class="text-muted-foreground inline-flex items-center space-x-2 text-sm font-medium leading-6">
                  <span>Just shipped v1.0</span>
                  {/* <ChevronRightIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                </span>
              </a>
            </div>
            <h1 class="text-foreground mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              Lorem Ipsum Dolor sir amet
            </h1>
            <p class="text-muted-foreground mt-6 text-lg leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div class="ring-border bg-card -m-2 overflow-hidden rounded-xl p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="/public/dashboard.png"
                  alt="App screenshot"
                  width="1000"
                  height="700"
                  class="ring-border -m-8 w-[60rem] rounded-md shadow-2xl ring-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
