import { appConfig } from '@/config/app'
import { ModeToggle } from './mode-toggle'

export function AppFooter() {
    return (
        <footer className="flex flex-col items-center justify-between gap-4 min-h-[3rem] md:h-20 py-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built by <a href={appConfig.author.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">{appConfig.author.name}</a>.
                The source code is available on <a href={appConfig.github.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.</p>
            <div className="hidden md:block">
                <ModeToggle />
            </div>
        </footer>
    )
}