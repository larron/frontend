'use strict';

export default React.createClass({
    render() {
        const props = this.props;

        return (
            <section className="search">
                <div className="row">
                    <div className="column small-5">
                        <div className="row">
                            <div className="column small-5">
                                <DatePicker placeholderText="from" onChange={props.changeMin} selected={props.min_date_range} maxDate={props.max_date_range.clone().subtract(1, 'd')} />
                            </div>
                            <div className="column small-1 text-center big-dash">&ndash;</div>
                            <div className="column small-5 end">
                                <DatePicker placeholderText="to" onChange={props.changeMax} selected={props.max_date_range} minDate={props.min_date_range.clone().add(1, 'd')} maxDate={moment()} />
                            </div>
                        </div>
                    </div>
                    <div className="column small-7">
                        <input type="text" name="keyword" placeholder="search" className="hide" />
                    </div>
                </div>
            </section>
        );
    }
});

