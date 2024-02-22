import Hero from "./hero";
import Navbar from "./navbar";
import SatisfiedCustomers from "./satisfiedCustomers";
import Partners from "./partners";
import Steps from "./steps";
import Flexibilty from "./flexibilty";
import InvestmentPlan from "./investmentPlan";
import Review from "./review";
import WorldMap from "./worldMap";

function Homepage() {

    return (
        <div className="homepage">
        <Navbar />
        <Hero />
        <SatisfiedCustomers />
        <Partners />
        <Steps />
        <Flexibilty />
        <InvestmentPlan />
        <Review />
        <WorldMap />
        </div>
    )
}

export default Homepage;