import Header from '@components/Header';
import Content from '@components/Content';
import Footer from '@components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

