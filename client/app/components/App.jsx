import Loader from 'react-loader';
import { connect } from 'react-redux';

import Header from '@components/Header';
import Content from '@components/Content';
import Footer from '@components/Footer';
import { check } from '@actions/auth';

class App extends React.Component {
    componentWillMount() {
        this.props.dispatch(check(this.props.auth.refreshToken));
    }

    render() {
        return (
            <Loader loaded={this.props.auth.checked}>
                <Header />
                <Content>
                    { this.props.children }
                </Content>
                <Footer />
            </Loader>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        auth: store.auth,
    };
}

export default connect(mapStateToProps)(App);
