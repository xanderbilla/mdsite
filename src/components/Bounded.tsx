import clsx from 'clsx';
import React from 'react';

interface BoundedProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({
        as: Comp = "section", className, children, ...restProps}, ref) => (
            <Comp ref={ref} className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)} {...restProps}>
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </Comp>
        )
    );

Bounded.displayName = "Bounded";

export default Bounded;