import React from 'react';
import { Button } from '@my-project/ui-lib';

const App: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    React 19 + TypeScript + Tailwind 4
                </h1>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to your new project!</h2>
                    <p className="mb-4">
                        This project is set up with pnpm workspaces and rsbuild.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button variant="default">Default Button</Button>
                        <Button variant="destructive">Destructive Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;