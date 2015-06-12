'use strict';

import contentDeliveryActions from '../../actions/content-delivery';
import contentDeliveryStore from '../../stores/content-delivery';
import Loader from '../../shared/loader';
import Header from './header';
import Search from './search';
import Artists from './artists';

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
    getInitialState() {
        return {
            artists: [],
            loading: true,
            min_date_range: moment().subtract(1, 'y'),
            max_date_range: moment()
        };
    },
    componentDidMount() {
        contentDeliveryActions.searchArtists(this.state);
    },
    changeMin(date) {
        this.setState({
            loading: true,
            min_date_range: date
        });
        contentDeliveryActions.searchArtists(this.state);
    },
    changeMax(date) {
        this.setState({
            loading: true,
            max_date_range: date
        });
        contentDeliveryActions.searchArtists(this.state);
    },
    render() {
        const state = this.state;
        const searchProps =  _.merge({
            changeMin: this.changeMin,
            changeMax: this.changeMax
        }, state);

        const ArtistsSection = state.loading
            ? (<Loader />)
            : (<Artists artists={state.artists} />)

        return (
            <section>
                <Header />
                <Search {...searchProps} />
                {ArtistsSection}
            </section>
        );
    }
});
