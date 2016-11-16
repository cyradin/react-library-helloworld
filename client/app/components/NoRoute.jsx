import BEMHelper from 'react-bem-helper';
import DocumentTitle from 'react-document-title';

var classes = new BEMHelper({
  name: 'error'
});


var errors = {
    404: {
        title: 'Page not Found',
        text: 'The page you are looking for does not exist'
    }
}

export default class NoRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title={errors[this.props.route.code].title}>
                <div {...classes({ modifiers: this.props.route.code })}>
                    <div {...classes('text')}>
                        {errors[this.props.route.code].text}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}