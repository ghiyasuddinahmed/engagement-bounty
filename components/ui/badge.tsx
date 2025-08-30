import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        success: 'bg-green-100 text-green-800 border-green-200',
        error: 'bg-red-100 text-red-800 border-red-200',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        info: 'bg-blue-100 text-blue-800 border-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
      {...props}
    >
      {variant === 'success' && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
      )}
      {variant === 'error' && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></span>
      )}
      {variant === 'warning' && (
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1.5"></span>
      )}
      {variant === 'info' && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
      )}
      {props.children}
    </div>
  )
}
export { Badge, badgeVariants }
