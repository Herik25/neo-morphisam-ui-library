import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import NeuCheckbox from "./components/Checkbox";
import Nav from "./components/Nav";
import NeuSwitch from "./components/Switch";

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
            <NeuSwitch />
            <NeuCheckbox />
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

export default App;
