import { browserHistory } from 'react-router'

module.exports = module.exports = {
    componentWillMount: function() {
        if (! this.props.auth.authorized) {
            browserHistory.push('/login');
        }
    },
}