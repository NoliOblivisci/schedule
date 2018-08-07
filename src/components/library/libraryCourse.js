import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {}
                {}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id quam tortor. Pellentesque id porttitor dui. Duis pretium leo ut posuere mollis. Praesent lacinia libero egestas molestie rutrum. Nunc aliquam sapien eu feugiat iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;