import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Nav from "./components/Nav";
import NeuProgressBar from "./components/ProgressBar";
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
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
        </div>
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>This is title</CardTitle>
              <CardDescription>This is the desc</CardDescription>
            </CardHeader>
            <CardContent>This is my card content</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
