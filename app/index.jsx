import Root from '@app/root';
import {AppContainer} from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
        <Root/>
    </AppContainer>
    , document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('@app/root', function () {
        ReactDOM.render(
            <AppContainer>
                <Root />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
/*
ReactDOM.render(
    <Root />
    , document.getElementById('app')
);
*/