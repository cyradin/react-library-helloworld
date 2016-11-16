import Root from '@app/root';
import {AppContainer} from 'react-hot-loader';


const MOUNT_NODE = document.getElementById('app');

const render = function () {
    ReactDOM.render(
        <AppContainer>
            <Root/>
        </AppContainer>
        , MOUNT_NODE
    );
}


// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('@app/root', function () {
        setImmediate(function() {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        });
    });
}

render();
