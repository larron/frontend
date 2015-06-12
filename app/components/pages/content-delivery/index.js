'use strict';

import contentDeliveryActions from '../../actions/content-delivery';
import contentDeliveryStore from '../../stores/content-delivery';
import Header from './header';
import Search from './search';
import Artists from './artists';

export default React.createClass({
    mixins: [
        Reflux.listenTo(contentDeliveryStore, 'contentDeliveryChange')
    ],
    contentDeliveryChange(err, data) {
        // TODO: If err we must do something!
        this.setState(data);
    },
    getInitialState() {
        return {
            artists: [],
            min_date_range: moment().subtract(1, 'd'),
            max_date_range: moment()
        };
    },
    componentDidMount() {
        contentDeliveryActions.searchArtists(this.state);
    },
    changeMin(date) {
        this.setState({
            min_date_range: date
        });
        contentDeliveryActions.searchArtists(this.state);
    },
    changeMax(date) {
        this.setState({
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

        return (
            <section>
                <Header />
                <Search {...searchProps} />
                <Artists artists={state.artists} />
            </section>
        );
    }
});
