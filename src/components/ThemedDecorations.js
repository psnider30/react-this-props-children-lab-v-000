import React from 'react';

class ThemedDecorations extends React.Component {
   render () {
     const childrenWithClass = React.Children.map(this.props.children, child => React.cloneElement(child, {
       className: this.props.theme,
     }));

     return (
       <div>
        {childrenWithClass}
       </div>
     );
   }
 }

export default ThemedDecorations;
