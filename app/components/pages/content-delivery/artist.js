'use strict';

export default React.createClass({
    render() {
        const props = this.props;

        return (
            <div className="row">
                <div className="column small-12">
                    {props.artist_name}
                </div>
            </div>
        );
    }
});
