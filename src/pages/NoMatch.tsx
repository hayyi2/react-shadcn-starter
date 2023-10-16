import { buttonVariants } from "@/components/ui/button";

export default function NoMatch() {
    return (
        <div className="bg-background text-foreground flex-grow flex items-center justify-center">
            <div className="space-y-4">
                <h2 className="text-6xl mb-4">404</h2>
                <h1 className="text-3xl font-semibold">Page Not Found</h1>
                <a href="/" className={buttonVariants()}>Back to Home</a>
            </div>
        </div>
    )
}
