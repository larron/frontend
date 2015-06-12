'use strict';

import Artist from './artist';

export default React.createClass({
    render() {
        const props = this.props;
        const artists = props.artists.map((artist) => {
            return (<Artist {...artist} key={artist.artist_id} />);
        });
        return (
            <section className="content">
                <div className="row">
                    <div className="column small-12">
                        <h1>Top Artists</h1>
                    </div>
                </div>
            </section>
        );
    }
});

