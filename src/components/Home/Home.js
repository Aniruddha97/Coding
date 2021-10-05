import Services from '../Services/Services';
import './Home.css';
import Chart from '../Chart/Chart';

const Home = () => {
    return (
        <div>
            <div>
                <Services showAll={false}></Services>
            </div>
            <div className="card">
                <Chart></Chart>
            </div>
        </div>
    );
};

export default Home;