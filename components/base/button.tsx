import { ReactNode, forwardRef, ButtonHTMLAttributes } from "react"

// Enhanced Button component with full HTML button attributes support
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "default", size = "default", asChild, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 py-1.5 text-xs",
      lg: "h-12 px-6 py-3 text-base"
    }
    
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
    }
    
    return asChild ? (
      <div className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
        {children}
      </div>
    ) : (
      <button ref={ref} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"