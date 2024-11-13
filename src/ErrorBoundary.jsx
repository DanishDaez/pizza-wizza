import { Component } from "react";
import { Link } from "@tanstack/react-router";
class ErrorBoundary extends Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log("Errorboundary cot some stupid error", error, info)
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Uh Oh!</h2>
                    <p>here was error. <Link to="/">click here</Link>to Go back to home page</p>
                </div>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary