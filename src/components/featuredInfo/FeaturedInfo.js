import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
export default function featuredInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,415</span>
                    <span className='featuredMoneyRate'>
                        +50.5%
                        <ArrowUpward />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last months</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,415</span>
                    <span className='featuredMoneyRate'>
                        -1.4%
                        <ArrowDownward />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last months</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1,234</span>
                    <span className='featuredMoneyRate'>
                        +2.2%
                        <ArrowUpward />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last months</span>
            </div>
        </div>
    )
}
