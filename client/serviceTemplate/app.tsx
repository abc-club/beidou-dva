import React, { PureComponent } from "react";
import loadable from '@loadable/component'
import './mobile.less'

declare global {
  interface Window {
    componentList: { comp?: string }[]
  }
}

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

  }
  renderComponent = () => {
    const { componentList } = window;
    return componentList.map((item, index) => {
      const Component = loadable(() => import(`../components/mobile/${item.comp}`))
      return <Component {...item} key={index} isPreview={false} />
    })
  }
  render() {
    return (
      <div>
        {
          this.renderComponent()
        }
      </div>
    );
  }
}
export default App;
