import SocialBar from '../shared/SocialBar';
import Footer from '../shared/Footer';

const BaseLayout = (props) => {

    return (
        <div>
            <div className={`base ${props.pageClass}`}>
                <div className="base_left">
                    <div className="text-right padding32 font-xl x-bold uppercase title">{props.title}</div>
                    <SocialBar />
                </div>
                <div className="base_right">
                    <div className="mobile-title dt_hide tb_hide uppercase top64 text-center bold font-xl default">{props.title}</div>
                    <div className="minHeightScreen">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default BaseLayout