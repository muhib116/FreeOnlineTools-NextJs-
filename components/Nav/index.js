import classes from './nav.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link';
import Dropdown from './components/Dropdown'
import TopNav from './components/TopNav.js';


export default function Nav() {
    return (
        <>
            <TopNav />
            <div className={ classes.navOuterContainer }>
                <div className={ `${ classes.navContainer } container` }>
                    <nav className={ [classes.navContainer].join(' ') }>
                        <Link href="/">Home</Link>
                        <a href="">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Tools</a>
                        <Dropdown title="Image Converter">
                            <Link href="#">JPG to Webp</Link>
                            <Link href="#">PNG to Webp</Link>
                            <Link href="#">SVG to Webp</Link>
                            <Link href="#">JFIF to Webp</Link>

                            <Link href="#">PNG to JPG Converter</Link>
                            <Link href="#">WEBP to JPEG Converter</Link>
                            <Link href="#">SVG to JPG Converter</Link>
                            <Link href="#">JFIF to JPG Converter</Link>

                            <Link href="#">JPEG To PNG Converter</Link>
                            <Link href="#">WEBP to PNG Converter</Link>
                            <Link href="#">SVG to PNG Converter</Link>
                            <Link href="#">JFIF to PNG Converter</Link>
                            <Link href="#">Image Converter</Link>
                        </Dropdown>
                    </nav>
                    <a href='#' className={ classes.bookBtn }>Book a Meeting</a>
                </div>
            </div>
        </>
    )
}
