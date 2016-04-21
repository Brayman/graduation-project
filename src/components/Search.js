import React from 'react';

const Search = React.createClass({
    render() {
        return (
            <div className="RowFlex">
                <div>
                  <input type="text"/>
                  <button>
                    <i className="search icon"/>
                  </button>
                </div>
                <div>
                  <button>ремонт</button>
                  <button>авто</button>
                  <button>прицепы</button>
                </div>
            </div>
        );
    }
});
export default Search;
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
