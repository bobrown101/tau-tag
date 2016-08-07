import React from 'react';

class Typewriter extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let { text } = this.props;

        if (Array.isArray(text)) {
            this._originalString = text.reverse().pop();
        } else {
            this._originalString = text;
        }

        this._originalString = this._originalString.split('').reverse();
        this.setState({ text: ' ' });
    }

    componentDidMount() {
        setTimeout(() => {
            this.type(this._originalString.pop());
        }, this.props.delay);
        
    }

    type(char) {
        let {
            speed, randomSpeed, text
        } = this.props;

        speed = randomSpeed ? this.randomizeSpeed(speed) : speed;

        setTimeout(() => {
            this.setState({
                text: this.state.text + char
            });

            if (this._originalString.length) {
                this.type(this._originalString.pop());
            } else {
                if (Array.isArray(text) && text.length) {
                    this._originalString = text.pop().split('').reverse();

                    setTimeout(() => {
                        this.setState({text: ''});
                        this.type(this._originalString.pop());
                    }, 1000);
                }
            }
        }, speed);
    }

    randomizeSpeed(baseline = 50) {
        return Math.floor(Math.random() * (baseline - 220) + 220);
    }

    render() {
        return React.DOM[this.props.tag]({className: "header-large-text"}, this.state.text);
    }
}

Typewriter.defaultProps = {
    speed: 75,
    randomSpeed: false,
    tag: 'p',
    delay: 0,
    class: ''
};

export default Typewriter;