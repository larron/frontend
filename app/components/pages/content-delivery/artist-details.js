'use strict';

import contentDeliveryActions from '../../actions/content-delivery';
import contentDeliveryStore from '../../stores/content-delivery';
import Loader from '../../shared/loader';
import Header from './header';

const Router = ReactRouter;
const Link = Router.Link;

export default React.createClass({
    mixins: [
        Reflux.listenTo(contentDeliveryStore, 'contentDeliveryChange')
    ],
    contentDeliveryChange(err, data) {
        // TODO: If err we must do something!
        this.setState(_.merge({
            loading: false
        }, data));
    },
    componentDidMount() {
        const artist_id = this.props.params.id;
        const artist_name = this.props.params.artist_name;

        contentDeliveryActions.showArtist({
            artist_id,
            artist_name
        });
    },
    getInitialState() {
        return {
            currentArtist: null,
            tracks: [],
            loading: true
        }
    },
    render() {
        const state = this.state;
        const prop = this.props;
        const artist = state.currentArtist;
        const TracksSection = !state.tracks.length
            ? (<Loader />)
            : (
                <ul>
                    {state.tracks.map((track) => {
                        return (<li>{track.track_name}</li>);
                    })}
                </ul>
            );
        const DetailSection = !artist && state.loading
            ? (<Loader />)
            : (
                  <div className="boxy p-15">
                      {artist.artist_name}
                      {TracksSection}
                  </div>
              );

        return (
            <section>
                <Header />
                <div className="row">
                    <div className="column small-12 pt-10">
                        <Link to="index">&laquo; Back</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="column small-12 pt-30">
                        {DetailSection}
                    </div>
                </div>
            </section>
        );
    }
});
