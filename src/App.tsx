import Badge from "./components/Badge";
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
import NeuSlider from "./components/Slider";

function App() {
  return (
    <main className="space-x-4">
      <Nav />
      <h1>App</h1>
      <Button>Default</Button>
      <Button variant={"primary"}>Submit</Button>
      <Button variant={"desctructive"}>Cancel</Button>
      <Button variant={"warning"}>Warning</Button>
      <Button variant={"warning"} disabled>
        Disabled
      </Button>
      <div className="m-6">
        <Card>
          <CardHeader>
            <CardTitle>This is title</CardTitle>
            <CardDescription>This is the desc</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>this is one</li>
              <li>this is two</li>
              <li>this is three</li>
            </ul>
          </CardContent>
          <CardFooter>
            This is the Footer
            <NeuSlider variant={"secondary"} />
          </CardFooter>
        </Card>
      </div>
      <div className="m-6">
        <Card>
          <CardHeader>
            <CardTitle>Progress Bar</CardTitle>
            <CardDescription>
              simple vertical/horizontal progress bar
              <Badge>Badge</Badge>
              <Badge variant={"primary"}>Badge</Badge>
              <Badge variant={"desctructive"}>Badge</Badge>
              <Badge variant={"warning"}>Badge</Badge>
            </CardDescription>
            <CardContent className="space-y-4 h-40 flex gap-4">
              <NeuProgressBar max={100} value={25} orientation={"vertical"} />
              <NeuProgressBar max={100} value={50} orientation={"vertical"} />
              <NeuProgressBar max={100} value={75} orientation={"vertical"} />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}

export default App;
