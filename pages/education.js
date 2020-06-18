import BaseLayout from '../components/layouts/BaseLayout'
import Card from '../components/Card'
import education from '../data/education'

const Education = () => {
    return (
        <BaseLayout title="Education">
            <div className="portfolio boxed">
                {education && education.map((item, i) => (
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

export default Education