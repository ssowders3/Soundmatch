import React from 'react';

export default class fetchUsers extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/posts`)
            .then(result=>result.json())
            .then(items=>this.setState({items}))
    }

    render() {
        return(
            WHAT SHOULD THIS RETURN?
    );
    }