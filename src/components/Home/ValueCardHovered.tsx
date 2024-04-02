import React, { ReactElement, useState } from 'react'
import { ValueCard } from './ValueCard';
import { SmileSvg } from '../icons/HomeIcons/SmileSvg';

interface Props {
    hoveredSvg: ReactElement
    notHoveredSvg: ReactElement
}

export const ValueCardHovered = ({ hoveredSvg, notHoveredSvg }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='text-center lg:w-[264px] lg:h-[230px]' onMouseEnter={() => window.innerWidth > 768 ? setIsHovered(true) : setIsHovered(false)} onMouseLeave={() => window.innerWidth > 768 ? setIsHovered(false) : setIsHovered(true)}>
            {isHovered
                ? hoveredSvg
                : notHoveredSvg
            }
        </div>
    )
}
