import React from 'react';

const Search = React.createClass({
    render() {
        return (
            <div>
                <input type="text"/>
                <button>
                    <i className="search icon"
                    />
                </button>
                <button>ремонт</button>
                <button>авто</button>
                <button>прицепы</button>
            </div>
        );
    }
});
export default Search;
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
