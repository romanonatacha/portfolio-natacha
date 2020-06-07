import BaseLayout from '../components/layouts/BaseLayout'
import Card from '../components/Card'
import projects from '../data/projects'

const Portfolio = () => {
    return (
        <BaseLayout title="Portfolio">
            <div className="portfolio boxed">
                {projects && projects.map((item, i) => (
                    <Card
                        key={i}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        badges={item.badges}
                        git={item.git}
                    />
                ))}
            </div>
        </BaseLayout>
    )
}

export default Portfolio
