'use strict';

const Router = ReactRouter;
const Link = Router.Link;

export default React.createClass({
    render() {
        const props = this.props;

        return (
            <div className="row">
                <div className="column small-12">
                    <div className="boxy p-15">
                        <Link to="artist" params={{id: props.artist_id, name: props.artist_name}}>{props.artist_name}</Link>
                    </div>
                </div>
            </div>
        );
    }
});
