import classes from './categoryWiseTools.module.css'
import ToolCard from '../components/ToolCard/index'

export default function index() {
  return (
    <div className={ [classes.content_box].join(' ') }>
        <div className={ [classes.content_header, 'overflow-hidden'].join(' ') }>
            <h3>
                <a 
                    href="https://freetoolssite.com/tools-type/image-compressor/" 
                    className={ [classes.link].join(' ') }
                >
                    Image Compressor
                </a>
            </h3>
        </div>

        <div className={ [classes.content_body].join(' ') }>
            <div className={ [classes.tools_wrapper].join(' ') }>
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
            </div>
        </div>

        <div className={ [classes.content_footer].join(' ') }>

        </div>
    </div>
  )
}
