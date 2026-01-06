import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Nav from "./components/Nav";
import NeuProgressBar from "./components/ProgressBar";
import { useState } from "react";
import NeuCheckbox from "./components/Checkbox";
import Input from "./components/Input";
import { Line, LineChart, ResponsiveContainer } from "recharts";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState("starter");
  const revenueData = [
    { name: "Jan", value: 3000 },
    { name: "Feb", value: 9500 },
    { name: "Mar", value: 8000 },
    { name: "Apr", value: 500 },
    { name: "May", value: 5120 },
    { name: "Jun", value: 10240 },
  ];

  return (
    <main className="space-x-4">
      <Nav />
      {/* hero section */}
      <section className="max-w-5xl px-8 py-12 mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          Beautiful components with neumorphic design
        </h1>
        <p className="mt-2 md:text-lg text-md text-muted-foreground max-w-2xl mx-auto text-center">
          Crafter with care and attentation to detail. Built on top of Base UI
          with Tailwind CSS. Accessible, customizable and ready to use in your
          projects
        </p>
      </section>

      <section className="flex flex-col max-w-5xl mx-auto md:flex-row items-start gap-8 my-12">
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Music Player</CardTitle>
              <CardDescription>
                Enjoy high quality music streaming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 flex flex-col items-center justify-center">
                <img
                  src="https://m.media-amazon.com/images/I/71862Xdp96L._AC_UF1000,1000_QL80_.jpg"
                  alt="album cover"
                  className={`w-56 h-56 rounded-full shadow-raised border-2 border-border object-cover ${
                    isPlaying && "animate-spin"
                  }`}
                />
                <div className="text-center space-y-2">
                  <CardTitle>Please Please Please</CardTitle>
                  <CardDescription>Sabrina Carpenter</CardDescription>
                </div>
                <div>
                  <NeuProgressBar max={100} value={15} className="min-w-xs" />
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>0:00</span>
                    <span>3:07</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <Button
                    aria-label="previous track"
                    size={"icon"}
                    shape={"circle"}
                    variant={"primary"}
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button
                    aria-label={isPlaying ? "pause" : "play"}
                    size={"icon"}
                    shape={"circle"}
                    variant={"primary"}
                    className="h-16 w-16"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    aria-label="next track"
                    size={"icon"}
                    shape={"circle"}
                    variant={"primary"}
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade your subscription</CardTitle>
              <CardDescription>
                You are currently on the free plan. Upgrade to the pro plan to
                get access to all features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <CardTitle>Plan</CardTitle>
                <CardDescription>
                  Select the plan that best fits your needs
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div
                    className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-2 border-border duration-350 ${
                      selectedPlans === "starter"
                        ? "bg-primary/10 shadow-inset"
                        : "bg-background shadow-raised"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <NeuCheckbox
                        id="starter-plan"
                        checked={selectedPlans === "starter"}
                        onClick={() => setSelectedPlans("starter")}
                      />
                      <span className="text-sm">Starter plan</span>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-2 border-border duration-350 ${
                      selectedPlans === "pro"
                        ? "bg-primary/10 shadow-inset"
                        : "bg-background shadow-raised"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <NeuCheckbox
                        id="pro-plan"
                        checked={selectedPlans === "pro"}
                        onClick={() => setSelectedPlans("pro")}
                      />
                      <span className="text-sm">Pro plan</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="notes"
                  className="mb-2 text-xs block text-muted-foreground"
                >
                  Notes
                </label>
                <Input placeholder="Notes" id="notes" />
                <div className="mt-4 flex items-center gap-2">
                  <NeuCheckbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    I agree to terms and condition.
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant={"desctructive"}>Cancel</Button>
              <Button variant={"primary"}>Upgrad Plan</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 space-y-6 w-full">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Total Revenue</CardTitle>
              </div>
              <CardTitle>$10,236.12</CardTitle>
              <p>+112% from last month</p>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={revenueData}>
                  <Line
                    type={"monotone"}
                    dataKey={"value"}
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-primary)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
