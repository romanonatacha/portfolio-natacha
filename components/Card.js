import { Badge } from 'react-bootstrap'

const Card = (props) => {

    const { image, title, link, description, badges, git } = props

    return (
        <div className="portfolio-card padding16">
            <div className="padding16 radius8 card">
                {image &&
                    <a href={link} target="_blank">
                        <div className="bottom16 portfolio-card-img">
                            <img src={image} alt={title} />
                        </div>
                    </a>
                }
                <div className="portfolio-card-text bottom16">
                    {title &&
                        <h4 className="font-sm bold uppercase">{title}</h4>
                    }
                    {description &&
                        <p className="font-xs">{description}</p>
                    }
                </div>
                <div className="font-xs flex_row_btw portfolio-card-footer">
                    <div>
                        {badges && badges.map((item, i) => (
                            <div key={i} className="inline-block">
                                <Badge className="mr-1 self_center badge padding4">{item}</Badge>
                            </div>

                        ))}
                    </div>
                    {git &&
                        <div>
                            <a href={git} target="_blank">
                                <i className="fab fa-github font-sm git"></i>
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card