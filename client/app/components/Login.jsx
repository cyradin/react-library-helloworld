import BEMHelper from 'react-bem-helper';
import formData from 'react-form-data';
import { mixin } from 'react-core-decorators';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {login } from '@actions/auth';

var classes = new BEMHelper({
  name: 'form'
});

@mixin(formData)
class Login extends React.Component {
    render() {
        if (this.props.auth.authorized) {
            browserHistory.goBack();
        }
        return (
            <div>
                <form {...classes({ modifiers: 'login' })} onChange={this.updateFormData.bind(this)} onSubmit={this.onSubmit}>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Username:</label>
                        <input
                            {...classes('input')}
                            type="text"
                            name="username" />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Password:</label>
                        <input
                            {...classes('input')}
                            type="password"
                            name="password" />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Submit</label>
                        <input
                            {...classes('input')}
                            type="submit"
                            name="submit" />
                    </div>
                </form>
            </div>
        );
    }

    @autobind
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(login(this.formData))
    }
}

const mapStateToProps = function(store) {
    return {
        auth: store.auth,
    };
}

export default connect(mapStateToProps)(Login);
