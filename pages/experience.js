import BaseLayout from '../components/layouts/BaseLayout'
import Card from '../components/Card'
import experience from '../data/experience'

const Experience = () => {
    return (
        <BaseLayout title="Experience">
            <div className="portfolio boxed">
                {experience && experience.map((item, i) => (
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

export default Experience