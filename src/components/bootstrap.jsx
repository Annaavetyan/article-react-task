import React from "react";

class Layout extends React.Component {
    render() {
        return(
            <div>
                <div className="sidebar">

                </div>
                <div className="wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}



export default Layout;