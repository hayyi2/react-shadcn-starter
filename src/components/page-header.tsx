import { cn } from "@/lib/utils"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "pt-6 pb-4 space-y-2",
        className
      )}
      {...props}>
      {children}
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-xl font-semibold leading-tight tracking-tight my-1",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-base font-light text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export { PageHeader, PageHeaderDescription, PageHeaderHeading }
