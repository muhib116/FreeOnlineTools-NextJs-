import classes from './ToolCard.module.css'
import Image from 'next/image'
import jpgCompressorImage from '/public/toolsIcon/jpeg-compressor-online.png'

export default function index() {
  return (
    <div className={ [classes.tool].join(' ') }>
        <div className={ [classes.img].join(' ') }>
            <Image 
                width="100" 
                height="100" 
                src={ jpgCompressorImage } 
                alt="JPEG Compressor Online" 
            />
        </div>
        <h3 className={ [classes.text].join(' ') }>JPEG Compressor Online</h3>
        <a 
            href="https://freetoolssite.com/tools/jpeg-compressor-online/" 
            className={ [classes.link].join(' ') } 
            title="JPEG Compressor Online" 
            role="button" 
            aria-label="JPEG Compressor Online"
        ></a>
    </div>
  )
}
