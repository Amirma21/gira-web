import Header from "../components/Header";
import Present from "../components/Presentation";
import ScrollIndicator from "../components/tools/ScrollIndicator";
import Statistics from "../components/Statistics";


export default function Home() {
  console.log();
  return (
    <div>
      <ScrollIndicator />
      <Header />
      <Present />
      <Statistics />
    </div>
  );
}