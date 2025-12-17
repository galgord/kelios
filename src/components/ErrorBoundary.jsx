import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#F9F9F7] flex items-center justify-center px-6">
                    <div className="max-w-lg text-center">
                        <div className="bg-white border-2 border-[#1a1a1a] p-8 shadow-[8px_8px_0px_0px_#1a1a1a]">
                            <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">Something went wrong</h1>
                            <p className="font-mono text-sm text-[#1a1a1a]/70 mb-6">
                                We encountered an unexpected error. Please refresh the page to try again.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
