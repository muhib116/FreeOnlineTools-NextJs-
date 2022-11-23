import classes from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from './components/Dropdown'
import TopNav from './components/TopNav.js'


export default function Nav() {
    return (
        <>
            <TopNav />
            <nav className={ ['outer_container', classes._navigation_wrapper].join(' ') }>
                <div className={ ['inner_container', classes._navigation].join(' ') }>
                    <Link href="/" className={ [classes.brand].join(' ') } >
                        <span className={ [classes.first].join(' ') }>Online</span>
                        <span className={ [classes.second].join(' ') }>Tools</span>
                    </Link>

                    <button className={ [classes.nav_toggle].join(' ') } aria-label="Navigation Opener">
                        <span className={ [classes.icons].join(' ') }>
                            <span className={ [classes.bars_icon].join(' ') }>
                                <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" fill="currentColor">
                                    <g id="Icon_3_">
                                        <g>
                                            <path d="M64,384h384v-42.666H64V384z M64,277.334h384v-42.667H64V277.334z M64,128v42.665h384V128H64z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <span className={ [classes.close_icon].join(' ') }>
                                <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
                                    c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
                                    c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path>
                                </svg>
                            </span>
                        </span>
                    </button>

                    <div className={ [classes.nav, classes.nav_mobile].join(' ') }>
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Contact</Link>
                        <Dropdown title="Tools">
                            <Link href="#">Image Converter</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                            <Link href="#">Image Compressor</Link>
                        </Dropdown>
                    </div>

                </div>
            </nav>
        </>
    )
}
