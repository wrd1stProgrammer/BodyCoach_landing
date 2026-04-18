'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { trackStoreClick } from '@/lib/marketing-client';
import type { StorePlatform } from '@/lib/marketing';

type TrackedStoreLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    platform: StorePlatform;
    location: string;
};

export default function TrackedStoreLink({
    platform,
    location,
    onClick,
    children,
    ...props
}: TrackedStoreLinkProps) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }

        trackStoreClick({ platform, location });
    };

    return (
        <a {...props} onClick={handleClick}>
            {children}
        </a>
    );
}
