import { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("##### getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error by ErrorBoundary:", error);
    console.error("ErrorInfo caught by ErrorBoundary:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
